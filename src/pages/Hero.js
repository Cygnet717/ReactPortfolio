import { Image } from 'react-bootstrap'
const Hero = () => {
  const styles = {
    hero: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '85%',
    },
    picture: {

    }
  }
  return (
    <div className="" style={styles.hero}>
      <Image src="./images/selfie3.jpg" style={styles.picture} fluid />
    </div>
  );
};

export default Hero;