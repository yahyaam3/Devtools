import React, {useState} from 'react'
import showToast from '../utils/toast'

export default function Minify({onBack}){
  const [input,setInput] = useState('')
  const [output,setOutput] = useState('')
  const [copied, setCopied] = useState(false)

  function minify(){
    if (!input.trim()) return showToast('Pega código primero', { type: 'error' })
    let s = input.replace(/<!--[\s\S]*?-->/g, '')
    s = s.replace(/\/\*[^]*?\*\//g, '')
    s = s.replace(/\n+/g, ' ')
    s = s.replace(/\s{2,}/g, ' ')
    setOutput(s.trim())
    showToast('Código minificado', { type: 'success' })
  }

  function copy(){
    if (!output) return
    navigator.clipboard.writeText(output)
    setCopied(true)
    showToast('Resultado copiado al portapapeles', { type: 'success' })
    setTimeout(() => setCopied(false), 2000)
  }

  const originalSize = input.length
  const minifiedSize = output.length
  const savings = originalSize > 0 ? Math.round((1 - minifiedSize / originalSize) * 100) : 0

  return (
    <div className="max-w-4xl mx-auto">
      <button onClick={onBack} className="text-blue-600 underline mb-4 flex items-center gap-1">← Atrás</button>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">🧩 Minificador de código</h1>
        <p className="text-gray-600">Elimina espacios, líneas nuevas y comentarios de tu HTML, CSS o JavaScript.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-3">
          <label className="block font-semibold text-gray-800">Código original</label>
          <textarea 
            value={input} 
            onChange={e=>setInput(e.target.value)} 
            placeholder="Pega tu HTML, CSS o JS aquí..." 
            className="w-full h-64 p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
          <div className="text-xs text-gray-500">Caracteres: {originalSize}</div>
        </div>

        <div className="space-y-3">
          <label className="block font-semibold text-gray-800">Código minificado</label>
          <textarea 
            value={output} 
            readOnly 
            className="w-full h-64 p-4 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none resize-none"
            placeholder="El código minificado aparecerá aquí..."
          />
          <div className="text-xs text-gray-500">
            {output && <span className="font-semibold text-green-600">Caracteres: {minifiedSize} (ahorró {savings}%)</span>}
          </div>
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <button onClick={minify} className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
          Minificar
        </button>
        <button onClick={()=>{setInput(''); setOutput('')}} className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-100 transition">
          Limpiar
        </button>
        {output && <button onClick={copy} className={`px-6 py-2 rounded-lg font-semibold transition ${copied ? 'bg-green-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}>
          {copied ? '✓ Copiado' : 'Copiar'}
        </button>}
      </div>
    </div>
  )
}
