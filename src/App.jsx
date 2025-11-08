import React, {useState} from 'react'
import Minify from './components/Minify'
import Validate from './components/Validate'
import ConvertImage from './components/ConvertImage'
import MetaTags from './components/MetaTags'
import AdSense from './components/AdSense'
import Privacy from './components/Privacy'
import Terms from './components/Terms'

export default function App(){
  const [page, setPage] = useState('home')
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navbar Sticky */}
      <nav className="sticky top-0 z-50 bg-white bg-opacity-98 backdrop-blur border-b border-gray-100 shadow-sm">
        <div className="container-max px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={()=>setPage('home')}>
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-lg w-9 h-9 flex items-center justify-center font-bold text-sm">DT</div>
            <div>
              <div className="font-bold text-base text-gray-900">DevToolsPro</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {page !== 'home' && <button onClick={()=>setPage('home')} className="hidden md:inline-flex px-4 py-2 rounded-lg hover:bg-gray-100 transition text-gray-700 font-medium">← Atrás</button>}
          </div>
        </div>
      </nav>

      {/* Hero - Professional */}
      <header className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 md:py-24 relative overflow-hidden border-b border-gray-100">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-indigo-400 rounded-full blur-3xl"></div>
        </div>
        <div className="container-max px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Herramientas Profesionales para Desarrolladores Web
          </h1>
          <p className="mt-4 text-gray-700 max-w-2xl text-lg">
            DevToolsPro ofrece una suite completa de utilidades online gratuitas. Minifica código, valida HTML, convierte imágenes y genera meta tags SEO — todo en el navegador, sin instalaciones ni registros.
          </p>
          <div className="mt-8 flex gap-3 flex-wrap">
            <button onClick={()=>setPage('minify')} className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md hover:shadow-lg">
              Comenzar ahora
            </button>
            <button onClick={()=>setPage('home')} className="border-2 border-gray-300 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition">
              Explorar herramientas
            </button>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 grid grid-cols-3 gap-4 text-center text-sm">
            <div>
              <div className="text-2xl font-bold text-blue-600">100%</div>
              <div className="text-gray-600">Gratuito</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">Local</div>
              <div className="text-gray-600">Sin servidor</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">Rápido</div>
              <div className="text-gray-600">Instantáneo</div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {page === 'home' && (
          <div>
            {/* Herramientas */}
            <section className="container-max px-6 py-12">
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-2 text-gray-900">Herramientas disponibles</h2>
                <p className="text-gray-600">Elige la herramienta que necesites y comienza a trabajar al instante.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <button onClick={()=>setPage('minify')} className="group card-pro text-left hover:bg-blue-50 transition">
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-4xl">🧩</div>
                    <span className="text-xs font-semibold px-3 py-1 bg-blue-100 text-blue-700 rounded-full">Popular</span>
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-blue-600 transition text-gray-900">Minificador de código</h3>
                  <p className="text-gray-600 text-sm mt-2">Comprime HTML, CSS o JavaScript. Reduce el tamaño de tus archivos hasta un 80% eliminando espacios y comentarios innecesarios.</p>
                  <div className="mt-6 flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all gap-1">
                    Usar herramienta <span>→</span>
                  </div>
                </button>

                <button onClick={()=>setPage('validate')} className="group card-pro text-left hover:bg-green-50 transition">
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-4xl">✅</div>
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-green-600 transition text-gray-900">Validador de HTML</h3>
                  <p className="text-gray-600 text-sm mt-2">Detecta errores en tu HTML y reporta problemas de estructura. Asegúrate de que tu código sea válido antes de publicar.</p>
                  <div className="mt-6 flex items-center text-green-600 font-semibold group-hover:gap-2 transition-all gap-1">
                    Usar herramienta <span>→</span>
                  </div>
                </button>

                <button onClick={()=>setPage('convert')} className="group card-pro text-left hover:bg-purple-50 transition">
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-4xl">🖼️</div>
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-purple-600 transition text-gray-900">Conversor de imágenes</h3>
                  <p className="text-gray-600 text-sm mt-2">Convierte entre PNG, JPG y WebP sin software. Optimiza imágenes para web con soporte para arrastrar y soltar.</p>
                  <div className="mt-6 flex items-center text-purple-600 font-semibold group-hover:gap-2 transition-all gap-1">
                    Usar herramienta <span>→</span>
                  </div>
                </button>

                <button onClick={()=>setPage('meta')} className="group card-pro text-left hover:bg-orange-50 transition">
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-4xl">🔖</div>
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-orange-600 transition text-gray-900">Generador de meta tags</h3>
                  <p className="text-gray-600 text-sm mt-2">Crea etiquetas meta y Open Graph para SEO y redes sociales. Mejora el CTR y la visibilidad de tu contenido.</p>
                  <div className="mt-6 flex items-center text-orange-600 font-semibold group-hover:gap-2 transition-all gap-1">
                    Usar herramienta <span>→</span>
                  </div>
                </button>
              </div>
            </section>

            {/* Ad Space - Horizontal Banner */}
            <div className="bg-gray-50 py-4 border-y border-gray-200">
              <div className="container-max px-6">
                <AdSense adSlot="1803345916" format="auto" />
              </div>
            </div>

            {/* Beneficios */}
            <section className="bg-gray-50 border-y border-gray-200 py-12">
              <div className="container-max px-6">
                <h2 className="text-3xl font-bold mb-8 text-gray-900">Por qué elegir DevToolsPro</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 bg-white rounded-lg border border-gray-100">
                    <div className="text-3xl mb-3">⚡</div>
                    <h3 className="font-bold text-gray-900 mb-2">Ultra rápido</h3>
                    <p className="text-sm text-gray-600">Sin servidores. Sin esperas. Todo se procesa instantáneamente en tu navegador.</p>
                  </div>
                  <div className="p-6 bg-white rounded-lg border border-gray-100">
                    <div className="text-3xl mb-3">🔒</div>
                    <h3 className="font-bold text-gray-900 mb-2">Privado y seguro</h3>
                    <p className="text-sm text-gray-600">Tu código nunca se envía a servidores. 100% local, sin tracking ni cookies.</p>
                  </div>
                  <div className="p-6 bg-white rounded-lg border border-gray-100">
                    <div className="text-3xl mb-3">💰</div>
                    <h3 className="font-bold text-gray-900 mb-2">Completamente gratis</h3>
                    <p className="text-sm text-gray-600">Sin registros, sin límites de uso. Acceso ilimitado a todas las herramientas.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Ad Space - Vertical/Square */}
            <section className="container-max px-6 py-8">
              <AdSense adSlot="1803345916" format="auto" />
            </section>

            {/* FAQ */}
            <section className="container-max px-6 py-12">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Preguntas frecuentes</h2>
              <div className="space-y-4 max-w-3xl">
                <details className="p-4 border border-gray-200 rounded-lg group cursor-pointer hover:bg-gray-50">
                  <summary className="font-semibold text-gray-900 flex justify-between items-center">
                    ¿Es seguro usar DevToolsPro?
                    <span className="group-open:rotate-180 transition">▼</span>
                  </summary>
                  <p className="mt-3 text-gray-600 text-sm">Sí, 100% seguro. Todos tus datos se procesan localmente en tu navegador. Nunca enviamos información a servidores externos.</p>
                </details>
                <details className="p-4 border border-gray-200 rounded-lg group cursor-pointer hover:bg-gray-50">
                  <summary className="font-semibold text-gray-900 flex justify-between items-center">
                    ¿Hay límites de uso?
                    <span className="group-open:rotate-180 transition">▼</span>
                  </summary>
                  <p className="mt-3 text-gray-600 text-sm">No, puedes usar las herramientas sin límites. Usa DevToolsPro tan frecuentemente como necesites.</p>
                </details>
                <details className="p-4 border border-gray-200 rounded-lg group cursor-pointer hover:bg-gray-50">
                  <summary className="font-semibold text-gray-900 flex justify-between items-center">
                    ¿Funciona sin conexión?
                    <span className="group-open:rotate-180 transition">▼</span>
                  </summary>
                  <p className="mt-3 text-gray-600 text-sm">Una vez cargada la página, la mayoría de herramientas funcionan sin conexión. Usa DevToolsPro en cualquier lugar.</p>
                </details>
              </div>
            </section>
          </div>
        )}

        {page === 'minify' && <Minify onBack={()=>setPage('home')} />}
        {page === 'validate' && <Validate onBack={()=>setPage('home')} />}
        {page === 'convert' && <ConvertImage onBack={()=>setPage('home')} />}
        {page === 'meta' && <MetaTags onBack={()=>setPage('home')} />}
        {page === 'privacy' && <Privacy />}
        {page === 'terms' && <Terms />}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
        <div className="container-max px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-white mb-4">DevToolsPro</h4>
              <p className="text-sm">Suite de herramientas online gratuitas para desarrolladores web profesionales.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Herramientas</h4>
              <ul className="text-sm space-y-2">
                <li><button onClick={()=>setPage('minify')} className="hover:text-white transition">Minificador</button></li>
                <li><button onClick={()=>setPage('validate')} className="hover:text-white transition">Validador HTML</button></li>
                <li><button onClick={()=>setPage('convert')} className="hover:text-white transition">Conversor imágenes</button></li>
                <li><button onClick={()=>setPage('meta')} className="hover:text-white transition">Meta tags SEO</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Enlaces</h4>
              <ul className="text-sm space-y-2">
                <li><button onClick={()=>setPage('privacy')} className="hover:text-white transition">Política de privacidad</button></li>
                <li><button onClick={()=>setPage('terms')} className="hover:text-white transition">Términos de servicio</button></li>
                <li><a href="mailto:contact@devtoolspro.com" className="hover:text-white transition">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Suscripción</h4>
              <p className="text-sm mb-3">Recibe actualizaciones sobre nuevas herramientas</p>
              <input type="email" placeholder="tu@email.com" className="w-full px-3 py-2 bg-gray-800 rounded text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 text-center text-sm">
            <p>© 2025 DevToolsPro. Todos los derechos reservados. Hecho para desarrolladores, por desarrolladores.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
