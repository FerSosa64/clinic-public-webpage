import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';
import logo from '../assets/logo_title.png';

function BasicExample() {
  return (
    <Navbar expand="lg" sticky="top" className="bg-body-tertiary site-navbar">
      <Container fluid>
        <Navbar.Brand href="/"><img src={logo} alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-lg-auto">
            <Nav.Link href="/nosotros">Nosotros</Nav.Link>
            <Nav.Link href="/servicios">Servicios</Nav.Link>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;