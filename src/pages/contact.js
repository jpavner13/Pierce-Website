import { Container, Row, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

import React, {useEffect} from "react";
import Aos from 'aos';
import "aos/dist/aos.css";

const StyledCard = styled.div`
  padding: 1rem;
  height: 41rem;
  width: auto;
  background-color: #363636;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(200, 200, 200, 0.8);
`;

const StyledRow = styled(Row)`
  padding: 1rem;
`;

const Styledh5 = styled.h5`
  color: black;
  font-size: 80px;
  text-align: center;
  text-decoration: underline;
  text-shadow: 2px 2px 5px white;
`;

function ContactPage() {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
  return (
    <StyledCard data-aos="fade-up">
      <Container>
        <StyledRow>
          <Styledh5>
            Contact Form
          </Styledh5>
        </StyledRow>
        <StyledRow>
        <Form
          action="https://formspree.io/f/xjvlpnny"
          method="POST"
          >
          <Form.Group className="mb-3 input-group-lg" controlId="formBasicText">
              <Form.Label className="text-muted">Name</Form.Label>
              <Form.Control type="paragraph" name="name" placeholder="Name (First Last)" />
            </Form.Group>

            <Form.Group className="mb-3 input-group-lg" controlId="formBasicEmail">
              <Form.Label className="text-muted">Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3 input-group-lg" controlId="formBasicParagraph">
              <Form.Label className="text-muted">Message</Form.Label>
              <Form.Control height="20rem" name="message" type="paragraph" placeholder="Enter message here" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                className="text-muted"
                type="checkbox"
                label="I am not a robot"
              />
            </Form.Group>
            <button class="button" variant="primary" type="submit">
              <span>Submit</span>
            </button>
          </Form>
        </StyledRow>
      </Container>
    </StyledCard>
  );
}

export default ContactPage;
