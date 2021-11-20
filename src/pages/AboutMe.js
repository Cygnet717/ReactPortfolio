import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const AboutMe = () => {

  return (
    <div  className="outerDiv">
      <h1 >About Me</h1>
      <Container>
        <Row>
          <Card style={{ width: '18rem', margin: '20px auto' }}>
            <Card.Img variant="top" src="./images/glass.jpg" />
            <Card.Body>
              <Card.Title>Glass Half Full</Card.Title>
              <Card.Text>
              I am a very positive person and always look on the bright side. I always try to see the good in every situation and the good in every person.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem', margin: '20px auto' }}>
            <Card.Img variant="top" src="./images/Victory-Baby.jpg" />
            <Card.Body>
              <Card.Title>Self Starter</Card.Title>
              <Card.Text>
              When I decide to do something I do it, life is to short to procrastinate. I thrive on new challenges and working out how to tackle them, especially when it requires me to learn something new.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem', margin: '20px auto' }}>
            <Card.Img variant="top" src="./images/spock.jpg" />
            <Card.Body>
              <Card.Title>Detail-oriented</Card.Title>
              <Card.Text>
              The devil is in the deails, especially in programming. I like making all the little details correct and uniform because capitalizaion or a single "," can stop code from working.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem', margin: '20px auto' }}>
            <Card.Img variant="top" src="./images/team.jpg" />
            <Card.Body>
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