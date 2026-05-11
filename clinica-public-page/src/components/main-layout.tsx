import { Outlet } from 'react-router-dom'
import Footer from './footer'
import SiteNavbar from './navbar'
import ScrollToTop from './ScrollToTop'

export default function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <SiteNavbar />
      <Outlet />
      <Footer />
    </>
  )
}
