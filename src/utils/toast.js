export function showToast(message, { type = 'info', duration = 3000 } = {}) {
  const colors = {
    info: '#2563eb',
    success: '#16a34a',
    error: '#dc2626'
  }
  const el = document.createElement('div')
  el.textContent = message
  el.style.position = 'fixed'
  el.style.right = '20px'
  el.style.bottom = '20px'
  el.style.background = colors[type] || colors.info
  el.style.color = 'white'
  el.style.padding = '10px 14px'
  el.style.borderRadius = '8px'
  el.style.boxShadow = '0 6px 18px rgba(0,0,0,0.12)'
  el.style.zIndex = 9999
  el.style.fontFamily = 'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial'
  el.style.fontSize = '14px'
  el.style.opacity = '0'
  el.style.transition = 'opacity 180ms ease, transform 180ms ease'
  el.style.transform = 'translateY(6px)'
  document.body.appendChild(el)
  requestAnimationFrame(() => {
    el.style.opacity = '1'
    el.style.transform = 'translateY(0)'
  })
  setTimeout(() => {
    el.style.opacity = '0'
    el.style.transform = 'translateY(6px)'
    setTimeout(() => el.remove(), 200)
  }, duration)
}

export default showToast
