import { Link } from 'react-router-dom'
import VisitenosSection from '../components/VisitenosSection'
import heroImage from '../assets/imagen_de_clinica1.jpg'
import { TEAM_MEMBERS } from '../data/team'
import { WHATSAPP_HREF } from '../data/clinicContact'
import './about.css'
import dr_image from '../assets/dr_foto_replaceable.jpg'
import dra_image from '../assets/dra_foto_replaceable.jpg'
import machine from '../assets/machine1.jpg'

export default function About() {
  return (
    <>
      <div className="about-page">
        <section
          className="about-page__hero"
          aria-labelledby="about-hero-heading"
          style={
            {
              '--about-hero-bg-image': `url(${heroImage})`,
            } as React.CSSProperties
          }
        >
          <div className="about-page__hero-bg" aria-hidden />
          <div className="about-page__hero-overlay" aria-hidden />
          <div className="about-page__hero-inner">
            <h1 id="about-hero-heading" className="about-page__hero-title">
              Más de 25 años cuidando sonrisas
            </h1>
            <p className="about-page__hero-tagline">
              Brindamos atención dental personalizada con tecnología moderna, experiencia clínica
              y un trato humano y cercano.
            </p>
            <Link className="about-page__hero-cta" to="/contacto">
              RESERVAR CITA
            </Link>
            <p className="about-page__hero-phone">O LLAME: (504) 9674-7159</p>
          </div>
        </section>

        <section className="about-page__who" aria-labelledby="about-who-heading">
          <div className="about-page__who-inner">
            <div className="about-page__who-grid">
              <h2 id="about-who-heading" className="about-page__who-title">
                ¿Quiénes Somos?
              </h2>
              <div className="about-page__who-copy">
                <p>
                  Somos una clínica dental con más de 25 años de experiencia dedicada a brindar
                  atención personalizada y de alta calidad.
                </p>
                <p>
                  Nuestro equipo de profesionales está comprometido en ofrecer soluciones
                  integrales que combinan experiencia clínica, tecnología moderna y un trato
                  humano y cercano.
                </p>
                <p>
                  Trabajamos para que cada paciente se sienta en un ambiente seguro, cómodo y
                  confiable, recibiendo tratamientos diseñados según sus necesidades para mejorar
                  su bienestar y calidad de vida.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-page__values" aria-labelledby="about-values-heading">
          <div className="about-page__values-inner">
            <header className="about-page__values-head">
              <p className="about-page__values-eyebrow">Nuestro compromiso</p>
              <h2 id="about-values-heading" className="about-page__values-title">
                Lo que nos define
              </h2>
              <p className="about-page__values-intro">
                Principios que guían cada consulta y cada tratamiento en nuestra clínica.
              </p>
            </header>
            <div className="about-page__values-grid">
              <article className="about-page__value-card">
                <h3 className="about-page__value-title">Atención Personalizada</h3>
                <p className="about-page__value-text">
                  Cada tratamiento es adaptado a las necesidades y objetivos de cada paciente.
                </p>
              </article>
              <article className="about-page__value-card">
                <h3 className="about-page__value-title">Tecnología y Precisión</h3>
                <p className="about-page__value-text">
                  Utilizamos diagnósticos precisos y procedimientos modernos para garantizar
                  resultados seguros y duraderos.
                </p>
              </article>
              <article className="about-page__value-card">
                <h3 className="about-page__value-title">Trato Humano</h3>
                <p className="about-page__value-text">
                  Brindamos una atención cercana y profesional para generar confianza y comodidad
                  en cada visita.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="about-page__philosophy" aria-labelledby="about-philosophy-heading">
          <div className="about-page__philosophy-inner">
            <div className="about-page__philosophy-grid">
              <div className="about-page__philosophy-img-wrap">
                <img
                  className="about-page__philosophy-img"
                  src={machine}
                  alt="Consultorio y equipo de la clínica"
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="about-page__philosophy-text">
                <h2 id="about-philosophy-heading" className="about-page__philosophy-title">
                  Sonrisas saludables, seguras y naturales
                </h2>
                <p>
                  En nuestra clínica, la vanguardia técnica y el cuidado detallado van de la mano.
                  Nos especializamos en transformar sonrisas a través de diagnósticos precisos y
                  tratamientos avanzados.
                </p>
                <p>
                  Creemos que una buena salud bucal es la base de la seguridad y bienestar
                  personal, por lo que trabajamos bajo altos estándares de calidad para ofrecer
                  resultados funcionales, estéticos y duraderos.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-page__team" aria-labelledby="about-team-heading">
          <div className="about-page__team-inner">
            <h2 id="about-team-heading" className="about-page__team-heading">
              Nuestro Equipo Profesional
            </h2>
            <div className="about-page__team-grid">
              {TEAM_MEMBERS.map((member) => (
                <article className="about-page__team-card" key={member.id}>
                  <div className="about-page__team-photo" aria-hidden>
                    <img
                      className="about-page__team-photo-img"
                      src={member.id === 'yasna-flores' ? dra_image : dr_image}
                      alt={member.name}
                      width={800}
                      height={600}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="about-page__team-body">
                    <h3 className="about-page__team-name">{member.name}</h3>
                    <p className="about-page__team-specialty">{member.specialty}</p>
                    <p className="about-page__team-desc">{member.description}</p>
                    {member.experienceYears != null ? (
                      <p className="about-page__team-exp">
                        Más de {member.experienceYears} años de experiencia
                      </p>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-page__final-cta" aria-labelledby="about-final-heading">
          <div className="about-page__final-inner">
            <h2 id="about-final-heading" className="about-page__final-title">
              Tu sonrisa merece el mejor cuidado
            </h2>
            <p className="about-page__final-text">
              Estamos comprometidos en brindarte atención dental profesional, personalizada y de
              confianza.
            </p>
            <div className="about-page__final-actions">
              <Link className="about-page__btn about-page__btn--primary" to="/contacto">
                Agenda tu cita
              </Link>
              <a
                className="about-page__btn about-page__btn--secondary"
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
              >
                Contáctanos
              </a>
            </div>
          </div>
        </section>
      </div>
      <VisitenosSection />
    </>
  )
}
