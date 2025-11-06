import React, {useRef, useState, useEffect} from 'react'
import showToast from '../utils/toast'

export default function ConvertImage({onBack}){
  const inputRef = useRef(null)
  const [preview, setPreview] = useState(null)
  const [format, setFormat] = useState('image/png')

  function handleFile(e){
    const file = e.target.files && e.target.files[0]
    if(!file) return
    const reader = new FileReader()
    reader.onload = ev => setPreview(ev.target.result)
    reader.readAsDataURL(file)
  }

  useEffect(() => {
    const el = inputRef.current
    if (!el) return
    function onDrop(e) {
      e.preventDefault()
      const file = e.dataTransfer.files && e.dataTransfer.files[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = ev => setPreview(ev.target.result)
        reader.readAsDataURL(file)
        showToast('Imagen cargada por arrastrar y soltar', { type: 'info' })
      }
    }
    function onDragOver(e) { e.preventDefault() }
    el.addEventListener('drop', onDrop)
    el.addEventListener('dragover', onDragOver)
    return () => {
      el.removeEventListener('drop', onDrop)
      el.removeEventListener('dragover', onDragOver)
    }
  }, [inputRef])

  function convert(){
    if(!preview) return alert('Selecciona una imagen primero')
    const img = new Image()
    img.src = preview
    img.onload = ()=>{
      const canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height
      const ctx = canvas.getContext('2d')
      ctx.drawImage(img,0,0)
      // allow quality for jpeg/webp
      const isJPEG = format === 'image/jpeg'
      const isWebP = format === 'image/webp'
      const quality = (isJPEG || isWebP) ? 0.92 : undefined
      const converted = quality ? canvas.toDataURL(format, quality) : canvas.toDataURL(format)
      const a = document.createElement('a')
      a.href = converted
      a.download = `converted.${format.split('/')[1]}`
      a.click()
      showToast('Imagen convertida y descargada', { type: 'success' })
    }
  }

  return (
    <div>
      <button onClick={onBack} className="text-blue-600 underline">⬅ Volver</button>
      <h2 className="mt-4 font-semibold text-xl">🖼️ Conversor de imágenes</h2>
  <input ref={inputRef} type="file" accept="image/*" onChange={handleFile} className="mt-3" />
  <div className="mt-2 small-muted">También puedes arrastrar y soltar una imagen sobre el selector.</div>
      <div className="mt-3">
        <select value={format} onChange={e=>setFormat(e.target.value)} className="border p-2 rounded">
          <option value="image/png">PNG</option>
          <option value="image/jpeg">JPG</option>
          <option value="image/webp">WebP</option>
        </select>
        <button onClick={convert} className="ml-3 bg-blue-600 text-white px-4 py-2 rounded">Convertir y descargar</button>
      </div>
      {preview && <div className="mt-4">
        <p className="font-medium">Vista previa:</p>
        <img src={preview} alt="preview" className="max-w-full h-auto rounded shadow mt-2" />
      </div>}
    </div>
  )
}
