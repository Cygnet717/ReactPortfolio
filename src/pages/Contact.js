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
    <div>
      <h1 style={{color: 'black'}}>Contact</h1>
      <Form className='contactForm' style={styles.form}  acceptCharset="utf-8" action="https://formspree.io/f/mjvjrrag" method="POST">
        <Form.Group className="mb-3" controlId="name">
          <Form.Control type="text" name="name" placeholder="Name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Control type="email" name="_replyto" placeholder="Email" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="message">
          <Form.Control as="textarea" name="message" rows={3} placeholder="Message" required/>
        </Form.Group>
        <Form.Control type="hidden" name="_subject" id="email-subject" value="Portfolio Contact Form"/>
        <Button variant="dark" type="submit">Send</Button>
      </Form>
    </div>
  );
};

export default Contact;