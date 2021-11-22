import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Contact = () => {
  const styles ={
    form: {
      width: '80%',
      maxWidth: '800px',
      margin: '10vh auto',
    },
    
  }

  return (
    <div  className="outerDiv">
      <h1>Contact</h1>
      <Form style={styles.form}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Control type="text" placeholder="Name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Control type="email" placeholder="Email" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="message">
          <Form.Control as="textarea" rows={3} placeholder="Message" reuqired/>
        </Form.Group>
        <Button variant="dark">Submit</Button>
      </Form>
    </div>
  );
};

export default Contact;