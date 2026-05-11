import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Al cambiar de página, sube al inicio. Si la URL lleva #ancla, no hace nada (lo gestiona la página destino). */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
    if (hash) return
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
