import React from 'react'

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-200 py-4">
        <div className="container-max px-6">
          <a href="/" className="text-blue-600 font-semibold">← Volver a DevToolsPro</a>
        </div>
      </nav>

      <main className="container-max px-6 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Términos de Servicio</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Aceptación de términos</h2>
          <p className="text-gray-700 mb-4">
            Al acceder y usar DevToolsPro, aceptas estar vinculado por estos Términos de Servicio. Si no estás de acuerdo, no uses nuestro servicio.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. Licencia de uso</h2>
          <p className="text-gray-700 mb-4">
            Te otorgamos una licencia no exclusiva, no transferible y revocable para usar DevToolsPro para fines personales y no comerciales.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. Restricciones de uso</h2>
          <p className="text-gray-700 mb-4">No debes:</p>
          <ul className="list-disc pl-8 text-gray-700 space-y-2">
            <li>Usar DevToolsPro para fines ilegales o no autorizados</li>
            <li>Intentar piratear, alterar o sabotear nuestro servicio</li>
            <li>Usar bots o scrapers automáticos</li>
            <li>Procesar o generar contenido malicioso</li>
            <li>Violar derechos de autor de terceros</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. Descargo de responsabilidad</h2>
          <p className="text-gray-700 mb-4">
            <strong>DevToolsPro se proporciona "TAL CUAL"</strong> sin garantías de ningún tipo. No somos responsables de:
          </p>
          <ul className="list-disc pl-8 text-gray-700 space-y-2">
            <li>Pérdida de datos o información</li>
            <li>Errores o imprecisiones en la salida de herramientas</li>
            <li>Daños indirectos o incidentales</li>
            <li>Interrupción del servicio</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">5. Limitación de responsabilidad</h2>
          <p className="text-gray-700 mb-4">
            En ningún caso DevToolsPro será responsable por daños que superen $100 USD, incluso si hemos sido notificados de la posibilidad de tales daños.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">6. Derechos de propiedad intelectual</h2>
          <p className="text-gray-700 mb-4">
            DevToolsPro y su contenido son propiedad intelectual de DevToolsPro. No puedes reproducir, distribuir o transmitir sin permiso.
          </p>
          <p className="text-gray-700 mb-4">
            El contenido que procesas permanece siendo tuyo. DevToolsPro no reclama propiedad sobre tu código, imágenes o datos.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">7. Publicidad y AdSense</h2>
          <p className="text-gray-700 mb-4">
            DevToolsPro utiliza Google AdSense para monetización. Los anuncios pueden personalizarse según tu actividad. 
            Puedes optar por no participar en publicidad personalizada en tu página de configuración de Google.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">8. Cambios en el servicio</h2>
          <p className="text-gray-700 mb-4">
            Nos reservamos el derecho de modificar, suspender o discontinuar DevToolsPro en cualquier momento con o sin previo aviso.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">9. Suspensión de cuenta</h2>
          <p className="text-gray-700 mb-4">
            Podemos suspender o terminar tu acceso si violamos estos términos o usas el servicio de forma abusiva.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">10. Ley aplicable</h2>
          <p className="text-gray-700 mb-4">
            Estos Términos de Servicio se rigen por las leyes de España, sin considerar conflictos de ley.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">11. Contacto</h2>
          <p className="text-gray-700">
            Si tienes preguntas sobre estos Términos, contáctanos en: 
            <strong className="block mt-2">terms@devtoolspro.com</strong>
          </p>
        </section>

        <div className="border-t border-gray-200 pt-8 mt-12 text-sm text-gray-600">
          <p>Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </main>
    </div>
  )
}
