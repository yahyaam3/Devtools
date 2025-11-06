import React, {useState} from 'react'

export default function Validate({onBack}){
  const [html,setHtml] = useState('')
  const [result,setResult] = useState(null)

  function validate(){
    if (!html.trim()) return setResult({ ok: false, detail: 'Pega HTML primero' })
    const parser = new DOMParser()
    const doc = parser.parseFromString(html, 'text/html')
    const errors = doc.querySelectorAll('parsererror')
    if (errors.length > 0) {
      const text = Array.from(errors).map(e => e.textContent).join('\n')
      setResult({ ok: false, detail: text })
    } else {
      setResult({ ok: true, detail: 'HTML válido y bien formado. ✨' })
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <button onClick={onBack} className="text-blue-600 underline mb-4 flex items-center gap-1">← Atrás</button>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">✅ Validador de HTML</h1>
        <p className="text-gray-600">Comprueba si tu HTML es válido y detecta errores de estructura.</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block font-semibold text-gray-800 mb-2">Código HTML</label>
          <textarea 
            value={html} 
            onChange={e=>setHtml(e.target.value)} 
            placeholder="<html>...</html>"
            className="w-full h-64 p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none font-mono text-sm"
          />
        </div>

        <button onClick={validate} className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
          Validar HTML
        </button>

        {result && (
          <div className={`mt-6 p-4 rounded-lg border ${result.ok ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
            <p className={`font-semibold ${result.ok ? 'text-green-800' : 'text-red-800'}`}>
              {result.ok ? '✅ Validación exitosa' : '⚠️ Error encontrado'}
            </p>
            <pre className="mt-3 p-3 bg-white rounded border text-xs overflow-auto max-h-40 text-gray-700">
              {result.detail}
            </pre>
          </div>
        )}
      </div>
    </div>
  )
}
