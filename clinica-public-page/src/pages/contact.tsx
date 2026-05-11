import { useMemo } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './contact.css'
import clinicImage from '../assets/imagen_de_clinica1.jpg'
import {
  CLINIC_ADDRESS_LINES,
  DIRECTIONS_URL,
  MAP_EMBED_SRC,
  SCHEDULE,
  WHATSAPP_DISPLAY,
  WHATSAPP_HREF,
} from '../data/clinicContact'

function ClockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden fill="currentColor">
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z" />
    </svg>
  )
}

function ArrowOutIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden fill="currentColor">
      <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
      />
    </svg>
  )
}

export default function Contact() {
  const todayIndex = useMemo(() => new Date().getDay(), [])

  return (
    <div className="contact-page">
      <main>
        <Container fluid className="contact-page__container">
          <h1 className="contact-page__title">Contáctenos</h1>

          <div className="contact-page__panel contact-page__panel--top">
            <Row className="g-4 g-lg-4">
              <Col lg={4}>
                <div className="contact-page__map-wrap">
                  <iframe
                    title="Ubicación en Google Maps — Clínica Dental Sosa Flores"
                    src={MAP_EMBED_SRC}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Col>
              <Col lg={4}>
                <img
                  className="contact-page__location-img"
                  src={clinicImage}
                  alt="Interior de clínica dental moderna"
                />
                <h2 className="contact-page__location-heading">Ubicación</h2>
                <p className="contact-page__address">
                  {CLINIC_ADDRESS_LINES.map((line, i) => (
                    <span key={line}>
                      {i > 0 ? <br /> : null}
                      {line}
                    </span>
                  ))}
                </p>
                <a
                  className="contact-page__directions"
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cómo llegar
                  <ArrowOutIcon />
                </a>
              </Col>
              <Col lg={4}>
                <div className="contact-page__hours-card">
                  <h2 className="contact-page__hours-title">
                    <ClockIcon />
                    Horario
                  </h2>
                  <ul className="contact-page__hours-list">
                    {SCHEDULE.map((row) => (
                      <li
                        key={row.dayIndex}
                        className={
                          row.dayIndex === todayIndex
                            ? 'contact-page__hours-row contact-page__hours-row--today'
                            : 'contact-page__hours-row'
                        }
                      >
                        <span>{row.label}</span>
                        <span
                          className={
                            row.closed ? 'contact-page__hours-closed' : undefined
                          }
                        >
                          {row.closed ? 'CERRADO' : row.hours}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            </Row>
          </div>

          <Row className="g-4 align-items-stretch">
            <Col lg={6}>
              <div className="contact-page__panel contact-page__panel--bottom">
                <h2 className="contact-page__booking-heading">Reserve su cita</h2>
                <p className="contact-page__booking-text">
                  Para agendar una visita o una consulta de valoración, puede llamarnos en
                  horario de atención o escribirnos por los medios indicados en esta página.
                </p>
                <p className="contact-page__booking-text">
                  Si es su primera visita, llegue unos minutos antes para completar su
                  información y atenderle con calma.
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="contact-page__panel contact-page__panel--bottom contact-page__whatsapp">
                <h2 className="contact-page__whatsapp-title">
                  <WhatsAppIcon />
                  WhatsApp
                </h2>
                <p className="contact-page__whatsapp-text">
                  Escríbanos para citas, consultas o dudas. Le responderemos en horario de
                  atención.
                </p>
                <p className="contact-page__whatsapp-number">{WHATSAPP_DISPLAY}</p>
                <a
                  className="contact-page__whatsapp-btn"
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Abrir chat en WhatsApp
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  )
}
