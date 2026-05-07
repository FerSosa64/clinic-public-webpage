import { Outlet } from 'react-router-dom'
import SiteNavbar from './navbar'
import Footer from './footer'

/** Shared chrome for every page: top nav, routed body, site footer. */
export default function MainLayout() {
  return (
    <>
      <SiteNavbar />
      <Outlet />
      <Footer />
    </>
  )
}
