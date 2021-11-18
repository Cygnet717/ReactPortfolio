import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'

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
          <Button variant="primary">Repo</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ReactComponent;