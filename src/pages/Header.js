import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { mapToStyles } from '@popperjs/core/lib/modifiers/computeStyles';

const Header = () => {
  const styles = {
    bar: {
      background: '#D8A113',
      border: 'none',
      
    },
    link: {
      color: '#592B02',
      fontWeight: 700,
      fontSize: '130%'
    },
    name: {
      fontSize: '3rem'
    }
  }
  return (
    <Navbar collapseOnSelect expand="lg" style={styles.bar}>
      <Container>
        <Navbar.Brand href="/" style={styles.name}>Kathy Bradt</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" style={styles.link}>Home</Nav.Link>
            <Nav.Link href="/AboutMe" eventKey="link-1" style={styles.link}>About Me</Nav.Link>
            <Nav.Link href="/Projects" eventKey="link-2" style={styles.link}>Projects</Nav.Link>
            <Nav.Link href="/Resume" eventKey="link-3" style={styles.link}>Resume</Nav.Link>
            <Nav.Link href="/Contact" eventKey="link-4" style={styles.link}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;