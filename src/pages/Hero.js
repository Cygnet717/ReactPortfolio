import { Image } from 'react-bootstrap'
const Hero = () => {
  const styles = {
    heroBg: {
      backgroundImage: 'url("./images/background.jpg")',
      height: '100vh',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
    picture: {
      border: '3px solid purple'
    }
  }
  return (
    <div className="" style={styles.heroBg}>
      <Image src="./images/selfie3.jpg" style={styles.picture} fluid />
    </div>
  );
};

export default Hero;