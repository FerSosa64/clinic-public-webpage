import SiteNavbar from '../components/navbar'

export default function Home() {
  return (
    <div className="home">
      <SiteNavbar />
      <main className="flex-grow-1 p-4">
        <h1 className="h3 mb-2">Inicio</h1>
        <p className="text-body-secondary mb-0">
          Página principal — aquí irá el contenido de la clínica.
        </p>
      </main>
    </div>
  )
}
