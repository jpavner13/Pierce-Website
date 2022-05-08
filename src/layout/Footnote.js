import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import '../components/CSS Files/underlineHover.css'

import { TouchableOpacity, Linking } from "react-native";

const linkedIn = "https://www.linkedin.com/in/j-pierce-avner-25a797198/"
const Twitter = "https://twitter.com/AvnerPierce"
const Instagram = "https://www.instagram.com/jpavner/?hl=en"

const StyledContainer = styled(Container)`
  width: 100%;
  height: 8rem;
  align-items: center;
  align-content: center;
  background-color: #363636;
  padding: 0 10%;
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
            <p className="hover-underline-animation"> Twitter </p>     
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
