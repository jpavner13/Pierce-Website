import { Button, Container, Card, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { TouchableOpacity, Linking } from "react-native";
import styles from '../components/CSS Files/underlineHover.css'

const linkedIn = "https://www.linkedin.com/in/j-pierce-avner-25a797198/"
const Twitter = "https://twitter.com/AvnerPierce"
const Instagram = "https://www.instagram.com/jpavner/?hl=en"

const Footer = styled.div`
  width: 100%;
  height: 8rem;
  align-items: center;
  align-content: center;
  background-color: #363636;
  padding: 0 10%;
`;

const FootText = styled.div`
  margin: 0.2rem;
  font-size: 1rem;
  color: rgb(255, 255, 255);
  text-align: center;
  align-content: center;
`;

const StyledLink = styled(Link)`
  margin: 0.2rem;
  font-size: 1rem;
  color: rgb(255, 255, 255);
  display: block;
  display: grid;
  justify-content: center;
  align-content: center;
`;

const StyledContainer = styled(Container)`
  width: 100%;
  height: 8rem;
  align-items: center;
  align-content: center;
  background-color: #363636;
  padding: 0 10%;
`;

const Styledp = styled.p`
  margin: 0.2rem;
  font-size: 1rem;
  color: rgb(255, 255, 255);
  text-align: center;
  align-content: center;
`;

function Footnote() {
  return (
    <StyledContainer fluid>
      <Row class="w-100">
        <Col>
          <TouchableOpacity onPress={() => Linking.openURL(linkedIn)}>
            <p class="hover-underline-animation"> LinkedIn </p>     
          </TouchableOpacity>
        </Col>
      </Row>
      <Row class="w-100">
        <Col>
          <TouchableOpacity onPress={() => Linking.openURL(Twitter)}>
            <p class="hover-underline-animation"> Twitter </p>     
          </TouchableOpacity>
        </Col>
      </Row>
      <TouchableOpacity onPress={() => Linking.openURL(Instagram)}>
        <p class="hover-underline-animation"> Instagram </p>     
      </TouchableOpacity>
    </StyledContainer>
  );
}

export default Footnote;
