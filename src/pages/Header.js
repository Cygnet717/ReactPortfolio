import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

const Header = () => {
  let location = window.location.pathname;

  const styles = {
    bar: {
      background: '#D8A113',
      border: 'none',
      
    },
    link: {
      color: '#592B02',
      fontWeight: 700,
      fontSize: '130%',
      margin: '0 5px',
      fontFamily: 'Playfair Display, serif'
    },
    name: {
      fontSize: '3rem',
      fontFamily: 'Playfair Display, serif'
    }
  }
  
  return (
    <Navbar collapseOnSelect expand="lg" style={styles.bar}>
      <Container>
        <Navbar.Brand href="/" style={styles.name}>Kathy Bradt</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link 
              href="/" 
              className={location === '/'? 'activeLink' : null} 
              style={styles.link}
            >Home</Nav.Link>
            <Nav.Link 
              className={location === '/AboutMe'? 'activeLink' : null} 
              href="/AboutMe" 
              eventKey="link-1" 
              style={styles.link}
            >About Me</Nav.Link>
            <Nav.Link 
              href="/Projects" 
              className={location === '/Projects'? 'activeLink' : null}  
              eventKey="link-2" 
              style={styles.link}
            >Projects</Nav.Link>
            <Nav.Link 
              href="/Resume" 
              className={location === '/Resume'? 'activeLink' : null} 
              eventKey="link-3" 
              style={styles.link}
            >Resume</Nav.Link>
            <Nav.Link 
              href="/Contact" 
              className={location === '/Contact'? 'activeLink' : null} 
              eventKey="link-4" 
              style={styles.link}
            >Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;