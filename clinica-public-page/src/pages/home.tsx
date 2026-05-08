import './home.css'
import lobbyHeroImage from '../assets/lobby_clinica1.jpg'
import clinicInteriorImage from '../assets/lobby_clinica2.png'

const DIRECTIONS_URL =
  'https://www.google.com/maps/search/?api=1&query=Cl%C3%ADnica+Dental+Sosa+Flores+San+Pedro+Sula'

function ArrowOutIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden fill="currentColor">
      <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
    </svg>
  )
}

export default function Home() {
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
    </div>
  )
}
