import { useLayoutEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './services.css'
import servicesHeroImage from '../assets/imagen_de_clinica2.png'
import VisitenosSection from '../components/VisitenosSection'
import { SERVICE_CATEGORIES } from '../data/servicesContent'

export default function Services() {
  const location = useLocation()

  useLayoutEffect(() => {
    const id = location.hash.replace(/^#/, '')
    if (!id) return
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [location.pathname, location.hash])

  return (
    <div className="services-page">
      <section
        className="services-page__hero"
        aria-label="Servicios — presentación"
        style={
          {
            '--services-hero-bg-image': `url(${servicesHeroImage})`,
          } as React.CSSProperties
        }
      >
        <div className="services-page__hero-bg" aria-hidden />
        <div className="services-page__hero-overlay" aria-hidden />
        <div className="services-page__hero-inner">
          <h1 className="services-page__hero-title">Nuestros servicios</h1>
          <p className="services-page__hero-tagline">
            Prevención, restauración, especialidades y estética dental, con el mismo trato cercano
            que nos caracteriza.
          </p>
          <Link className="services-page__hero-cta" to="/contacto">
            RESERVAR CITA
          </Link>
          <p className="services-page__hero-phone">
            O LLAME: (504) 9674-7159
          </p>
        </div>
      </section>

      <main className="services-page__main">
        <div className="services-page__container">
          {SERVICE_CATEGORIES.map((category) => {
            const headingId = `services-cat-${category.id}`
            return (
              <section
                key={category.id}
                id={category.id}
                className="services-page__section"
                aria-labelledby={headingId}
              >
                <div className="services-page__category-head">
                  <h2 id={headingId} className="services-page__category-title">
                    <span>{category.name}</span>
                  </h2>
                  <p className="services-page__category-intro">{category.intro}</p>
                </div>
                <div className="services-page__items">
                  {category.items.map((item) => (
                    <article key={item.title} className="services-page__card">
                      <h3 className="services-page__card-title">{item.title}</h3>
                      <p className="services-page__card-text">{item.description}</p>
                    </article>
                  ))}
                </div>
              </section>
            )
          })}

          <div className="services-page__cta-wrap">
            <Link className="services-page__cta" to="/contacto">
              Solicitar información o cita
            </Link>
          </div>
        </div>
      </main>

      <VisitenosSection />
    </div>
  )
}
