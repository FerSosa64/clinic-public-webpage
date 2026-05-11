import { useMemo } from 'react'
import './home.css'
import lobbyHeroImage from '../assets/lobby_clinica1.jpg'
import clinicInteriorImage from '../assets/lobby_clinica2.png'
import {
  CLINIC_ADDRESS_LINES,
  DIRECTIONS_URL,
  MAP_EMBED_SRC,
  SCHEDULE,
} from '../data/clinicContact'

const HOME_SERVICES = [
  {
    title: 'Odontología Preventiva',
    description:
      'Tratamientos enfocados en prevenir enfermedades dentales y mantener una sonrisa sana mediante limpiezas, selladores y aplicación de flúor.',
  },
  {
    title: 'Odontología Restauradora',
    description:
      'Procedimientos que recuperan la función y estética de los dientes con resinas, carillas, coronas y prótesis.',
  },
  {
    title: 'Especialidades',
    description:
      'Atención odontológica avanzada para tratar casos específicos como endodoncia, cirugías, cordales retenidas y ortodoncia.',
  },
  {
    title: 'Estética Dental',
    description:
      'Tratamientos diseñados para mejorar la apariencia de la sonrisa, incluyendo diseño de sonrisa y blanqueamiento dental.',
  },
]

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

export default function Home() {
  const todayIndex = useMemo(() => new Date().getDay(), [])

  return (
    <div className="home">
      <section
        className="home-hero"
        aria-label="Presentación"
        style={
          {
            '--home-hero-bg-image': `url(${lobbyHeroImage})`,
          } as React.CSSProperties
        }
      >
        <div className="home-hero__bg" aria-hidden />
        <div className="home-hero__overlay" aria-hidden />
        <div className="home-hero__inner">
          <h1 className="home-hero__title">
            Dentista de confianza para su familia
          </h1>
          <p className="home-hero__tagline">
            Clínica tranquila. Equipo experimentado. Atención excepcional.
          </p>
          <a className="home-hero__cta" href="/contacto">
            RESERVAR CITA
          </a>
          <p className="home-hero__phone">O LLAME: (504) 9674-7159</p>
        </div>
      </section>

      <section className="home-about" aria-labelledby="home-about-heading">
        <div className="home-about__inner">
          <div className="home-about__grid">
            <div className="home-about__copy">
              <h2 id="home-about-heading" className="home-about__title">
                Más de 25 años dedicados a sonrisas saludables en San Pedro Sula
              </h2>
              <p className="home-about__text">
                Somos una clínica dental con más de 25 años de experiencia, dedicada a crear
                sonrisas saludables y brindar una atención personalizada y de alta calidad.
                Nuestro equipo de profesionales combina experiencia clínica, tecnología avanzada
                y un trato humano y cercano para ofrecer soluciones integrales adaptadas a cada
                paciente.
              </p>
              <p className="home-about__text">
                Nos especializamos en diagnósticos precisos y tratamientos diseñados para mejorar
                la salud, funcionalidad y estética dental, siempre en un ambiente seguro y cómodo.
              </p>
              <p className="home-about__text">
                Estamos convenientemente ubicados en la 12 Avenida 2 y 3 Calle NO, San Pedro Sula,
                frente al Centro Médico de la Mujer Monte de Sion.
              </p>
              <p className="home-about__emphasis">
                Agenda tu cita y déjanos ayudarte a transformar tu sonrisa.
              </p>
              <p className="home-about__cta-line">
                  Agende su cita llamando al numero: {' '}
                <a className="home-about__cta-link" href="tel:+50496747159">
                  (504) 9674-7159
                </a>
                .
              </p>
            </div>

            <aside className="home-about__card" aria-label="Información de la clínica">
              <div className="home-about__card-body">
                <h3 className="home-about__card-title">Clínica Dental Sosa Flores</h3>
                <a
                  className="home-about__reviews"
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="home-about__stars" aria-hidden>
                    ★★★★★
                  </span>
                  <span className="home-about__reviews-text">Opiniones en Google</span>
                </a>
                <address className="home-about__address">
                  12 Avenida 2 y 3 Calle NO
                  <br />
                  San Pedro Sula, Cortés, Honduras
                  <br />
                  Frente al Centro Médico de la Mujer Monte de Sion
                </address>
                <a
                  className="home-about__directions"
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cómo llegar
                  <ArrowOutIcon />
                </a>
              </div>
              <img
                className="home-about__card-img"
                src={clinicInteriorImage}
                alt="Sala de tratamiento en Clínica Dental Sosa Flores"
                width={640}
                height={400}
                loading="lazy"
                decoding="async"
              />
            </aside>
          </div>
        </div>
      </section>

      <section className="home-services" aria-labelledby="home-services-heading">
        <div className="home-services__inner">
          <p className="home-services__eyebrow">Servicios</p>
          <h2 id="home-services-heading" className="home-services__title">
            Cuidado dental integral para cada etapa de tu sonrisa
          </h2>
          <p className="home-services__intro">
            Un resumen de nuestros tratamientos principales para ayudarte a elegir la atención
            adecuada.
          </p>

          <div className="home-services__grid">
            {HOME_SERVICES.map((service) => (
              <article className="home-services__card" key={service.title}>
                <h3 className="home-services__card-title">{service.title}</h3>
                <p className="home-services__card-text">{service.description}</p>
              </article>
            ))}
          </div>

          <a className="home-services__cta" href="/servicios">
            VER TODOS LOS SERVICIOS
          </a>
        </div>
      </section>

      <section className="home-visit" aria-labelledby="home-visit-heading">
        <div className="home-visit__inner">
          <h2 id="home-visit-heading" className="home-visit__title">
            Visítenos
          </h2>
          <p className="home-visit__intro">
            Estamos en San Pedro Sula, con fácil acceso y referencia frente al Centro Médico de la
            Mujer Monte de Sion. Consulte horario y cómo llegar antes de su visita.
          </p>

          <div className="home-visit__grid">
            <article className="home-visit__card">
              <div className="home-visit__card-top">
                <span className="home-visit__icon" aria-hidden>
                  <LocationPinIcon />
                </span>
                <h3 className="home-visit__card-title">Ubicación</h3>
                <address className="home-visit__address">
                  {CLINIC_ADDRESS_LINES.join('\n')}
                </address>
                <a
                  className="home-visit__directions"
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cómo llegar
                  <ArrowOutIcon />
                </a>
              </div>
              <div className="home-visit__map-wrap">
                <a
                  className="home-visit__map-open"
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

            <article className="home-visit__card home-visit__card--hours">
              <span className="home-visit__icon" aria-hidden>
                <ClockIcon />
              </span>
              <h3 className="home-visit__card-title">Horario</h3>
              <ul className="home-visit__hours-list">
                {SCHEDULE.map((row) => (
                  <li
                    key={row.dayIndex}
                    className={
                      row.dayIndex === todayIndex
                        ? 'home-visit__hours-row home-visit__hours-row--today'
                        : 'home-visit__hours-row'
                    }
                  >
                    <span className="home-visit__hours-day">{row.label}</span>
                    <span
                      className={
                        row.closed
                          ? 'home-visit__hours-value home-visit__hours-value--closed'
                          : 'home-visit__hours-value'
                      }
                    >
                      {row.closed ? 'CERRADO' : row.hours}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="home-visit__hours-note">
                Más detalles y reservas en{' '}
                <a className="home-visit__inline-link" href="/contacto">
                  contacto
                </a>
                .
              </p>
            </article>
          </div>
        </div>
      </section>

    </div>
  )
}
