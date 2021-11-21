import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Contact = () => {
  const styles ={
    form: {
      width: '80%',
      margin: '0 auto'
    },
    
  }

  return (
    <div  className="outerDiv">
      <h1>Contact</h1>
      <Form style={styles.form}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Control type="email" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="message">
          <Form.Control as="textarea" rows={3} placeholder="Message" />
        </Form.Group>
        <Button variant="dark">Submit</Button>
      </Form>
    </div>
  );
};

export default Contact;