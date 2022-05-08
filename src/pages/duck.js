import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

import React, {useEffect} from "react";
import Aos from 'aos';
import "aos/dist/aos.css";

import Duck from '../Images/Duck.MOV'

const StyledRow = styled(Row)`
  padding: 1rem;
`;

const Styledh5 = styled.h5`
  color: dark-grey;
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

function DuckPage() {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
  return (
    <Container fluid>
        <StyledRow data-aos="fade-down" id="top">
            <Styledh5>Animatronic Duck</Styledh5>
        </StyledRow>
        <StyledRow data-aos="fade-up">
            <video width="600" height="500" controls>
            <source src={Duck} type="video/mp4"/>
            </video>
        </StyledRow>
        <StyledRow data-aos="fade-up">
            <StyledText>
                This creepy project was my first animatronic. I packed all of my circuitry and actuators into a real taxidermied duck. This led
                to some very creepy moments when the code didn't work quite as expected...
            </StyledText>
        </StyledRow>
        <StyledRow data-aos="fade-up">
            <StyledText>
                For this project I used an Arduino Nano and c# to write the software. The parts were designed and 3D printed in Solidworks and can be found in my project
                porfolio on the 'Portfolio' page. 
            </StyledText>
        </StyledRow>
    </Container>
  );
}

export default DuckPage;
