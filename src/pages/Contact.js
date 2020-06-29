import React from 'react';
import Navbar from './../components/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

function Contact() {
  return (
    <Container>
      <Navbar />

      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
      </Form>
    </Container>

  )
}

export default Contact;