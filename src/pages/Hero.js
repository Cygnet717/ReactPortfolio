import Image from 'react-bootstrap/Image'
import selfie from './images/selfie3.jpg'
const Hero = () => {
  const styles = {
    hero: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    salutation: {
      background: '#592B02',
      borderRadius: '5px',
      fontSize: '20px',
      padding: '20px',
      color: 'white',
      width: '45vw',
      maxWidth: '500px'
    },
    image: {
      padding: '5% 10%',
      width: '50vw',
      maxWidth: '700px'
    }
  }
  return (
    <div style={styles.hero}>
      <Image src={selfie} style={styles.image} />
      <p style={styles.salutation}>I am a enjoy solving problems and hunting down solutions. I am an easy going and love learning new things.</p>
    </div>
  );
};

export default Hero;