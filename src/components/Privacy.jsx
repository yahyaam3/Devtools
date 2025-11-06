import React from 'react'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-200 py-4">
        <div className="container-max px-6">
          <a href="/" className="text-blue-600 font-semibold">← Volver a DevToolsPro</a>
        </div>
      </nav>

      <main className="container-max px-6 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Política de Privacidad</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Introducción</h2>
          <p className="text-gray-700 mb-4">
            DevToolsPro ("nosotros", "nuestro" o "nos") respeta tu privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y salvaguardamos tu información.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. Información que recopilamos</h2>
          <p className="text-gray-700 mb-4">
            DevToolsPro procesa <strong>100% de los datos localmente en tu navegador</strong>. No enviamos tu código, imágenes o datos a nuestros servidores.
          </p>
          <p className="text-gray-700 mb-4">
            Sin embargo, podemos recopilar información no identificable:
          </p>
          <ul className="list-disc pl-8 text-gray-700 space-y-2">
            <li>Dirección IP (a través de Google Analytics - opcional)</li>
            <li>Tipo de navegador y dispositivo</li>
            <li>Páginas visitadas y tiempo en sitio</li>
            <li>Fuente de tráfico</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. Cómo usamos tu información</h2>
          <p className="text-gray-700 mb-4">Utilizamos la información para:</p>
          <ul className="list-disc pl-8 text-gray-700 space-y-2">
            <li>Mejorar nuestras herramientas y servicios</li>
            <li>Analizar uso del sitio (Google Analytics)</li>
            <li>Mostrar anuncios relevantes (Google AdSense)</li>
            <li>Cumplir con leyes y regulaciones</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. Google Analytics y AdSense</h2>
          <p className="text-gray-700 mb-4">
            DevToolsPro utiliza <strong>Google Analytics</strong> para entender cómo usas nuestro sitio, y <strong>Google AdSense</strong> para monetización.
          </p>
          <p className="text-gray-700 mb-4">
            Google puede usar tus datos para mostrar anuncios personalizados. Puedes optar por no participar en la publicidad personalizada visitando 
            <a href="https://myaccount.google.com/about" className="text-blue-600 ml-1">tu página de configuración de Google</a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">5. Cookies</h2>
          <p className="text-gray-700 mb-4">
            Utilizamos cookies para mantener sesión y mejorar tu experiencia. Puedes controlar cookies en la configuración de tu navegador.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">6. Privacidad de menores</h2>
          <p className="text-gray-700 mb-4">
            DevToolsPro no está dirigido a menores de 13 años. No recopilamos información de menores deliberadamente.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">7. Cambios en esta Política</h2>
          <p className="text-gray-700 mb-4">
            Nos reservamos el derecho de modificar esta política en cualquier momento. Los cambios entran en vigor inmediatamente tras su publicación.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">8. Contacto</h2>
          <p className="text-gray-700">
            Si tienes preguntas sobre esta Política de Privacidad, contáctanos en: 
            <strong className="block mt-2">privacy@devtoolspro.com</strong>
          </p>
        </section>

        <div className="border-t border-gray-200 pt-8 mt-12 text-sm text-gray-600">
          <p>Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </main>
    </div>
  )
}
