import React, { useEffect } from 'react'

export default function AdSense({ adSlot, format = 'auto', responsive = true }) {
  useEffect(() => {
    // Intenta cargar Google AdSense script si no está ya cargado
    if (window.adsbygoogle === undefined) {
      const script = document.createElement('script')
      script.async = true
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXX' // Reemplazar con tu AdSense ID
      script.crossOrigin = 'anonymous'
      document.head.appendChild(script)
    }
    
    // Push ad cuando el componente monta o cambia
    try {
      if (window.adsbygoogle !== undefined) {
        window.adsbygoogle.push({})
      }
    } catch (error) {
      console.log('AdSense script not ready yet')
    }
  }, [])

  return (
    <div className="my-6 flex justify-center">
      <ins
        className="adsbygoogle"
        style={{
          display: responsive ? 'block' : 'inline-block',
          width: responsive ? '100%' : '300px',
          height: format === 'vertical' ? '600px' : '250px'
        }}
        data-ad-client="ca-pub-XXXXXXX" // Reemplazar con tu AdSense ID
        data-ad-slot={adSlot}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      ></ins>
    </div>
  )
}
