import Button from 'react-bootstrap/Button'
const Footer = () => {
  const styles = {
    footer: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: 0,
      height: '5vh',
      background: '#D8A113',
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    link: {
      color: '#592B0',

      border: '1px solid black'
    }
  }
  return (
    <div className="" style={styles.footer}>
      <Button  href='https://github.com/Cygnet717' variant="outline-dark">Git Hub</Button>
      <Button  href='https://www.linkedin.com/in/kathy-bradt-1796a9191/' variant="outline-dark">Linked In</Button>
      <Button  href='https://stackoverflow.com/users/13035422/kathyb' variant="outline-dark">Stack Overflow</Button>
     
    </div>
  );
};

export default Footer;