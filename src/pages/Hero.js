import { Image } from 'react-bootstrap'
const Hero = () => {
  const styles = {
    hero: {
   
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      height: '85vh',
      
    },
    salutation: {
      
    }
  }
  return (
    <div  className="outerDiv" style={styles.hero}>
      <Image src="./images/selfie3.jpg" fluid />
      <p className="salutation" style={styles.salutation}>I am a enjoy solving problems and hunting down solutions. I am an easy going and love learning new things.</p>
    </div>
  );
};

export default Hero;