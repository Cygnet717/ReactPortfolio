import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import{ v4 as uuid }from 'uuid'

const ReactComponent = (props) => {
  const proj = props.projData;

  return (
    <Col>
      <Card style={{ width: '18rem' , border: '2px solid blue'}}>
        <Card.Img variant="top" src={proj.imageLocation} />
        <Card.Body>
          <Card.Title>{proj.title}</Card.Title>
          <Card.Text>
            {proj.text}
          </Card.Text>
          <Container>
            <Row>
              {proj.technologies.map(tech => {
                return (<Col key={uuid()} xs={6} md={4}>
                <Image src={tech} thumbnail />
              </Col>)
              })}
            </Row>
          </Container>
          <Button variant="primary">Repo</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ReactComponent;