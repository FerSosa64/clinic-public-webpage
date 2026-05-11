import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
  CLINIC_ADDRESS_LINES,
  DIRECTIONS_URL,
  MAP_EMBED_SRC,
  SCHEDULE,
} from '../data/clinicContact'
import './visitenos-section.css'

function ArrowOutIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden fill="currentColor">
      <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
    </svg>
  )
}

function LocationPinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden fill="currentColor">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden fill="currentColor">
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z" />
    </svg>
  )
}

/** Ubicación, mapa y horario — mismo contenido que en contacto. */
export default function VisitenosSection() {
  const todayIndex = useMemo(() => new Date().getDay(), [])

  return (
    <section className="visitenos" aria-labelledby="visitenos-heading">
      <div className="visitenos__inner">
        <h2 id="visitenos-heading" className="visitenos__title">
          Visítenos
        </h2>
        <p className="visitenos__intro">
          Estamos en San Pedro Sula, con fácil acceso y referencia frente al Centro Médico de la
          Mujer Monte de Sion. Consulte horario y cómo llegar antes de su visita.
        </p>

        <div className="visitenos__grid">
          <article className="visitenos__card">
            <div className="visitenos__card-top">
              <span className="visitenos__icon" aria-hidden>
                <LocationPinIcon />
              </span>
              <h3 className="visitenos__card-title">Ubicación</h3>
              <address className="visitenos__address">
                {CLINIC_ADDRESS_LINES.join('\n')}
              </address>
              <a
                className="visitenos__directions"
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Cómo llegar
                <ArrowOutIcon />
              </a>
            </div>
            <div className="visitenos__map-wrap">
              <a
                className="visitenos__map-open"
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Abrir en Maps
              </a>
              <iframe
                title="Ubicación en Google Maps — Clínica Dental Sosa Flores"
                src={MAP_EMBED_SRC}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </article>

          <article className="visitenos__card visitenos__card--hours">
            <span className="visitenos__icon" aria-hidden>
              <ClockIcon />
            </span>
            <h3 className="visitenos__card-title">Horario</h3>
            <ul className="visitenos__hours-list">
              {SCHEDULE.map((row) => (
                <li
                  key={row.dayIndex}
                  className={
                    row.dayIndex === todayIndex
                      ? 'visitenos__hours-row visitenos__hours-row--today'
                      : 'visitenos__hours-row'
                  }
                >
                  <span className="visitenos__hours-day">{row.label}</span>
                  <span
                    className={
                      row.closed
                        ? 'visitenos__hours-value visitenos__hours-value--closed'
                        : 'visitenos__hours-value'
                    }
                  >
                    {row.closed ? 'CERRADO' : row.hours}
                  </span>
                </li>
              ))}
            </ul>
            <p className="visitenos__hours-note">
              Más detalles y reservas en{' '}
              <Link className="visitenos__inline-link" to="/contacto">
                contacto
              </Link>
              .
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
