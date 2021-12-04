import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import glass from "./images/glass.jpg";
import selfStarter from "./images/Victory-Baby.jpg";
import details from "./images/spock.jpg";
import team from "./images/team.jpg";

const AboutMe = () => {
  const styles = {
    content: {
      background: '#422001',
      color: '#D8A113'
    },
    card: {
      width: '80vw',
      maxWidth: '300px',
      margin: '20px auto',
      boxShadow: '5px 5px 5px #4a4538',
      border: '1px solid #422001',
      padding: '0'
    },
  }
  return (
    <div  className="outerDiv">
      <h1 style={{color: 'black'}}>About Me</h1>
      <Container>
        <Row>
          <Card className='card' style={styles.card}>
            <Card.Img variant="top" src={glass} />
            <Card.Body style={styles.content}>
              <Card.Title>Glass Half Full</Card.Title>
              <Card.Text>
              I am a very positive person and always look on the bright side. I always try to see the good in every situation and the good in every person.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={styles.card}>
            <Card.Img variant="top" src={selfStarter} />
            <Card.Body style={styles.content}>
              <Card.Title>Self Starter</Card.Title>
              <Card.Text>
              When I decide to do something I do it, life is to short to procrastinate. I thrive on new challenges and working out how to tackle them, especially when it requires me to learn something new.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={styles.card}>
            <Card.Img variant="top" src={details} />
            <Card.Body style={styles.content}>
              <Card.Title>Detail-oriented</Card.Title>
              <Card.Text>
              The devil is in the deails, especially in programming. I like making all the little details correct and uniform because capitalizaion or a single "," can stop code from working.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={styles.card}>
            <Card.Img variant="top" src={team} />
            <Card.Body style={styles.content}>
              <Card.Title>Team Player</Card.Title>
              <Card.Text>
              Communication is the key to successful teamwork, it keeps people from doubling up on work or missing items entirely. I enjoy being able to bounce ideas off other people and working together toward a goal.
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>

    </div>
  );
};

export default AboutMe;