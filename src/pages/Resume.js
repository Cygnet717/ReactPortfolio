import Container from 'react-bootstrap/Container'

import reactLogo from './images/logos/React.png';
import nodeLogo from "./images/logos/NodeJs.png";
import reacrRouterLogo from "./images/logos/ReactRouter.jpg";
import jqueryLogo from "./images/logos/jQuery.png";
import sequelizeLogo from "./images/logos/Sequelize.png";
import mongoLogo from "./images/logos/Mongo.png";
import gitLogo from './images/logos/GitLogo.png';
import postgresLogo from './images/logos/postgresql.png';
import sassLogo from './images/logos/sassLogo.png';

const Resume = () => {
  const styles = {
    main: {
      background: '#03838cf1',
      margin: '10px auto',
      width: '90%',
      maxWidth: '800px',
      padding: '15px'
    },
    collection: {
      marginBottom: '30px'
    },
    logos: {
      height: '90px',
      margin: '10px 0'
    },
    mongoLogo: {
      height: '90px',
      margin: '10px 0',
      width: '240px'
    }
  }

  return (
    <div  className="outerDiv" >
      <div style={styles.main}>
        <h3>Work History</h3>
        <div style={styles.collection}>
          <h4>Associate Software Engineer</h4>
          <h4>Optum</h4>
          <p>July 2022 - Present</p>
          <p>Worked on a scrum team to create and upkeep ETL pipelines, REST APIs, and Azure services to implement and optimize data workflows, leveraging Kafka topics for efficient data processing and integration.</p>
        </div>

        <h3>Education</h3>
        <div style={styles.collection}>
          <h4>TekSystems Training</h4>
          <p>Completed July 2022</p>
          <p>-Training course leading to a contract position at Optum.</p>
          <p>-Worked closely with teammates to build quality projects and solidify my knowledge.</p>
        </div>
        <div style={styles.collection}>
          <h4>U of M Bootcamp</h4>
          <p>Completed December 2021</p>
          <p>-Fast paced, indepth, full stack web development course</p>
        </div>
        <div style={styles.collection}>
          <h4>Thinkful</h4>
          <p>Completed February 2020</p>
          <p>-Self-paced program working with a mentor to learn full stack web development</p>
          <p>-Halted job search due to pandemic and childcare</p>
        </div>

       
      
        <h3>Skills</h3>
        <Container style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
          <img src={reactLogo} alt='' style={styles.logos}></img>
          <img src={nodeLogo} alt='' style={styles.logos}></img>
          <img src={reacrRouterLogo} alt='' style={styles.logos}></img>
          <img src={gitLogo} alt='' style={styles.logos}></img>
          <img src={postgresLogo} alt='' style={styles.logos}></img>
          <img src={jqueryLogo} alt='' style={styles.logos}></img>
          <img src={sassLogo} alt='' style={styles.logos}></img>
          <img src={sequelizeLogo} alt='' style={styles.logos}></img>
          <img src={mongoLogo} alt='' style={styles.mongoLogo}></img>
        </Container>
      </div>
    </div>
  );
};

export default Resume;