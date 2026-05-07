import './home.css'

export default function Home() {
  return (
    <div className="home">
      <section className="home-hero" aria-label="Presentación">
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
    </div>
  )
}
