import React, {useState} from 'react'
import showToast from '../utils/toast'

export default function MetaTags({onBack}){
  const [title,setTitle] = useState('')
  const [desc,setDesc] = useState('')
  const [url,setUrl] = useState('')
  const [img,setImg] = useState('')
  const [output,setOutput] = useState('')
  const [copied, setCopied] = useState(false)

  function generate(){
    if (!title.trim() || !desc.trim()) return showToast('Completa título y descripción', { type: 'error' })
    const meta = `<meta name="title" content="${title}">
<meta name="description" content="${desc}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${desc}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${img}">`
    setOutput(meta.trim())
    showToast('Meta tags generados', { type: 'success' })
  }

  function copy(){
    if (!output) return
    navigator.clipboard.writeText(output)
    setCopied(true)
    showToast('Meta tags copiados', { type: 'success' })
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <button onClick={onBack} className="text-blue-600 underline mb-4 flex items-center gap-1">← Atrás</button>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">🔖 Generador de Meta Tags SEO</h1>
        <p className="text-gray-600">Crea etiquetas meta y Open Graph para SEO y redes sociales.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block font-semibold text-gray-800 mb-1">Título</label>
            <input 
              value={title} 
              onChange={e=>setTitle(e.target.value)} 
              placeholder="Ej: Mi sitio web increíble" 
              maxLength="60"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-xs text-gray-500 mt-1">{title.length}/60 caracteres</p>
          </div>

          <div>
            <label className="block font-semibold text-gray-800 mb-1">Descripción</label>
            <textarea 
              value={desc} 
              onChange={e=>setDesc(e.target.value)} 
              placeholder="Ej: Descubre herramientas profesionales..." 
              maxLength="160"
              rows="3"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
            <p className="text-xs text-gray-500 mt-1">{desc.length}/160 caracteres</p>
          </div>

          <div>
            <label className="block font-semibold text-gray-800 mb-1">URL</label>
            <input 
              value={url} 
              onChange={e=>setUrl(e.target.value)} 
              placeholder="https://ejemplo.com" 
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-800 mb-1">URL de imagen (Open Graph)</label>
            <input 
              value={img} 
              onChange={e=>setImg(e.target.value)} 
              placeholder="https://ejemplo.com/imagen.jpg" 
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button onClick={generate} className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
            Generar meta tags
          </button>
        </div>

        <div className="space-y-3">
          <label className="block font-semibold text-gray-800">Código HTML</label>
          <textarea 
            value={output} 
            readOnly 
            className="w-full h-72 p-4 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none resize-none font-mono text-sm"
            placeholder="Los meta tags aparecerán aquí..."
          />
          {output && (
            <button onClick={copy} className={`w-full px-6 py-2 rounded-lg font-semibold transition ${copied ? 'bg-green-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}>
              {copied ? '✓ Copiado al portapapeles' : 'Copiar código'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
