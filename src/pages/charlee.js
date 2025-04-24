import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

import React, {useEffect} from "react";
import Aos from 'aos';
import "aos/dist/aos.css";

import CharleeMov from '../Images/CharleeMov.mp4'
import Foam from '../Images/NoSkinFoam.mov'
import Circuitry from '../Images/Circuitry.mov'

import documentation from '../Images/documentation.pdf'

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

const StyledText = styled.h1`
  color: grey;
  font-size: 35px;
  text-align: center;
`;

function Charlee() {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
  return (
    <Container fluid>
      <Row data-aos="fade-down">
        <Styledh5>Charlee: The animatronic dilophosaurus</Styledh5>
      </Row>
      <StyledRow data-aos="fade-up">
        <StyledText>
          My team and I were challenged to make a museum exhibit for a natural history museum. I was in charge of doing all of the circuitry 
          and electronic design, as well as programming all of the FPGA's to control the motion of the animatronic.
        </StyledText>
      </StyledRow>
      <StyledRow data-aos="fade-up">
        <video width="600" height="500" controls>
          <source src={Circuitry} type="video/mp4"/>
        </video>
        <video width="600" height="500" controls>
          <source src={Foam} type="video/mp4"/>
        </video>
      </StyledRow>
      <StyledRow data-aos="fade-up">
        <StyledText>
          For this project, I used Arudino, Raspberry Pi, and an ESP32 DevKit board for the circuitry. I used c++, Python, and NodeRed to write the software. The 
          animatronic was connected to my WiFi network so it could be controlled from anywhere in the world with a phone app (yes, I tested this) or the touch screen
          on the front of the exhibit. It used stepper motors, servos, phnumatics, and multiple mechanical systems to move.
        </StyledText>
      </StyledRow>
      <StyledRow data-aos="fade-up">
        <video width="600" height="500" controls>
          <source src={CharleeMov} type="video/mp4"/>
        </video>
      </StyledRow>
      <StyledRow>
        <StyledText>
          Documentation:
        </StyledText>
      </StyledRow>
      <StyledRow data-aos="fade-up">
        <iframe src={documentation} title="charlee documentation" width="600" height="800"/>
      </StyledRow>
      <StyledRow data-aos="fade-up">
        <StyledText>
          The code for the project, custom parts, and extra files can be found in my project portfolio on the 'Portfolio' page.
        </StyledText>
      </StyledRow>
      <StyledRow>
        
      </StyledRow>
    </Container>
  );
}

export default Charlee;
