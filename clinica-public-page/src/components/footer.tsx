import { Link } from 'react-router-dom'
import './footer.css'
import logo from '../assets/logo_title.png'
import {
  DIRECTIONS_URL,
  WHATSAPP_DISPLAY,
  WHATSAPP_HREF,
  CLINIC_PHONE_TEL,
} from '../data/clinicContact'
import { SERVICE_CATEGORIES } from '../data/servicesContent'

const OPENING_HOURS: { day: string; hours: string }[] = [
  { day: 'Lunes', hours: '8:00 – 17:00' },
  { day: 'Martes', hours: '8:00 – 17:00' },
  { day: 'Miércoles', hours: '8:00 – 17:00' },
  { day: 'Jueves', hours: '8:00 – 17:00' },
  { day: 'Viernes', hours: '8:00 – 17:00' },
  { day: 'Sábado', hours: '8:00 – 12:00' },
  { day: 'Domingo', hours: 'Cerrado' },
]

function SocialIconFacebook() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
      <path
        fill="currentColor"
        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
      />
    </svg>
  )
}

function SocialIconInstagram() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
      <path
        fill="currentColor"
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
      />
    </svg>
  )
}

function SocialIconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
      <path
        fill="currentColor"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
      />
    </svg>
  )
}

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__container">
        <div className="site-footer__grid">
          <section className="site-footer__col" aria-labelledby="footer-ubicacion">
            <h2 id="footer-ubicacion" className="site-footer__heading">
              Ubicación
            </h2>
            <address className="site-footer__address">
              Clínica Dental Sosa Flores
              <br />
              San Pedro Sula, Cortés
              <br />
              Honduras
            </address>
            <p className="site-footer__phone">
              <a href={CLINIC_PHONE_TEL}>{WHATSAPP_DISPLAY}</a>
            </p>
            <div className="site-footer__social" role="list">
              <a
                className="site-footer__social-link"
                href="https://www.facebook.com/clinicasosaflores.sosaflores?mibextid=rS40aB7S9Ucbxw6v"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <SocialIconFacebook />
              </a>
              <a
                className="site-footer__social-link"
                href="https://www.instagram.com/clinicadentalsosaflores2026?igsh=MTI5OXNnZnJjeXF6cA=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <SocialIconInstagram />
              </a>
              <a
                className="site-footer__social-link"
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <SocialIconWhatsApp />
              </a>
            </div>
          </section>

          <section className="site-footer__col" aria-labelledby="footer-horario">
            <h2 id="footer-horario" className="site-footer__heading">
              Horario
            </h2>
            <ul className="site-footer__hours">
              {OPENING_HOURS.map((row) => (
                <li key={row.day} className="site-footer__hours-row">
                  <span>{row.day}</span>
                  <span
                    className={
                      row.hours === 'Cerrado'
                        ? 'site-footer__hours-closed'
                        : undefined
                    }
                  >
                    {row.hours === 'Cerrado' ? 'CERRADO' : row.hours}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section className="site-footer__col" aria-labelledby="footer-servicios">
            <h2 id="footer-servicios" className="site-footer__heading">
              Servicios
            </h2>
            <ul className="site-footer__links">
              {SERVICE_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link to={`/servicios#${cat.id}`}>{cat.name}</Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="site-footer__col" aria-labelledby="footer-nav">
            <h2 id="footer-nav" className="site-footer__heading">
              Navegación
            </h2>
            <ul className="site-footer__links">
              <li>
                <Link to="/" >Inicio</Link>
              </li>
              <li>
                <Link to="/nosotros">Nosotros</Link>
              </li>
              <li>
                <Link to="/servicios">Servicios</Link>
              </li>
              <li>
                <Link to="/contacto" className="site-footer__link-emphasis">
                  Contacto
                </Link>
              </li>
            </ul>
          </section>
        </div>

        <div className="site-footer__brand-row">
          <Link to="/" className="site-footer__logo-link" aria-label="Inicio">
            <img src={logo} alt="" className="site-footer__logo" width={180} height={48} />
          </Link>
        </div>

        <div className="site-footer__bottom">
          <p className="site-footer__copyright">
            © {new Date().getFullYear()} Clínica Dental Sosa Flores. Todos los derechos
            reservados.
          </p>
          <p className="site-footer__extra">
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="site-footer__inline-link"
            >
              Cómo llegar en Google Maps
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
