import SiteNavbar from '../components/navbar'

export default function Services() {
    return (
      <div className="home">
        <SiteNavbar />
        <main className="flex-grow-1 p-4">
          <h1 className="h3 mb-2">Acerca de </h1>
          <p className="text-body-secondary mb-0">
            Página de nosotros.
          </p>
        </main>
      </div>
    )
}
  