import Button from 'react-bootstrap/Button'
import resume from './resume/Kathy Bradt-Resume.docx.pdf'
const Footer = () => {
  const styles = {
    footer: {
      position: 'absolute',
      bottom: '-20px',
      right: 0,
      left: 0,
      background: '#D8A113',
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    link: {
      color: '#592B02',
      fontWeight: 700,
      border: '1px solid #592B02',
      margin: '3px auto'
    }
  }
  return (
    <div className="" style={styles.footer}>
      <Button style={styles.link} target="_blank" href='https://github.com/Cygnet717' variant="outline-dark">Git Hub</Button>
      <Button style={styles.link} target="_blank" href='https://www.linkedin.com/in/kathy-bradt-1796a9191/' variant="outline-dark">Linked In</Button>
      <Button style={styles.link} target="_blank" href='https://stackoverflow.com/users/13035422/kathyb' variant="outline-dark">Stack Overflow</Button>
      <Button style={styles.link} target="_blank" href={resume} variant="outline-dark">Resume</Button>
    </div>
  );
};

export default Footer;