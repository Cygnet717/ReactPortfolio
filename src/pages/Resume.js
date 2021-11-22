import Container from 'react-bootstrap/Container'

import reactLogo from './images/logos/React.png';
import nodeLogo from "./images/logos/NodeJs.png";
import reacrRouterLogo from "./images/logos/ReactRouter.jpg";
import htmlLogo from './images/logos/HTML.png';
import cssLogo from "./images/logos/CSS.png";
import jqueryLogo from "./images/logos/jQuery.png";
import handlebarsLogo from './images/logos/Handlebars.png';
import sequelizeLogo from "./images/logos/Sequelize.png";
import mongoLogo from "./images/logos/Mongo.png";

const Resume = () => {
  const styles = {
    main: {
      background: '#03838cf1',
      margin: '10px auto',
      width: '90%',
      maxWidth: '800px',
      padding: '15px',
    },
    collection: {
      marginBottom: '30px',
    },
    logos: {
      height: '90px'

    }
  }

  return (
    <div  className="outerDiv" >
      <div style={styles.main}>
        <h3 className='whiteColor'>Education</h3>
        <div style={styles.collection}>
          <h4 className='whiteColor'>U of M Bootcamp</h4>
          <p className='whiteColor'>Completed December 2021</p>
          <p className='whiteColor'>-Fast paced, indepth, full stack web development course</p>
        </div>
        <div style={styles.collection}>
          <h4 className='whiteColor'>Thinkful</h4>
          <p className='whiteColor'>Completed February 2020</p>
          <p className='whiteColor'>-Self-paced program working with a mentor to learn full stack web development</p>
          <p className='whiteColor'>-Halted job search due to pandemic and childcare</p>
        </div>

        <h3 className='whiteColor'>Work History</h3>
        <div style={styles.collection}>
          <h4 className='whiteColor'>Certified Veteranary Technician</h4>
        </div>
        <div style={styles.collection}>
          <h4 className='whiteColor'>Red River Zoo Zookeeper</h4>
        </div>
      
        <h3 className='whiteColor'>Skills</h3>
        <Container style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
          <img src={reactLogo} alt='' style={styles.logos}></img>
          <img src={nodeLogo} alt='' style={styles.logos}></img>
          <img src={reacrRouterLogo} alt='' style={styles.logos}></img>
          <img src={htmlLogo} alt='' style={styles.logos}></img>
          <img src={cssLogo} alt='' style={styles.logos}></img>
          <img src={jqueryLogo} alt='' style={styles.logos}></img>
          <img src={handlebarsLogo} alt='' style={styles.logos}></img>
          <img src={sequelizeLogo} alt='' style={styles.logos}></img>
          <img src={mongoLogo} alt='' style={styles.logos}></img>
        </Container>
      </div>
    </div>
  );
};

export default Resume;