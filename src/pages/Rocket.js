import { Container, Row, Col } from 'react-bootstrap';

import Rocket from '../Images/Rocket.png'
import RocketVideo from '../Images/Rocket_Video.mp4'
import RocketWork from '../Images/RocketWork.mp4'
import styled from 'styled-components';
import React, {useEffect} from "react";
import Aos from 'aos';
import "aos/dist/aos.css";

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
  font-size: 50px;
  text-align: center;
`;

const StyledImg = styled.img`
  border: 10px solid dark-grey;
  width: 600px;
  height: 500px;
  object-fit: cover;
  padding: 2rem;
`;

function RocketPage() {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
  return (
    <Container fluid>
      <Row data-aos="fade-down">
        <Styledh5>Lockheed Martin Rocket Competition</Styledh5>
      </Row>
      <StyledRow>
        <Col data-aos="fade-right">
          <StyledImg src={Rocket} />
        </Col>
        <Col data-aos="fade-left">
          <StyledText>
            For this project, my brother and I were challenged to design and manufacture a rocket that is capable of atmospheric readings 
            (pressure, humidity, temperature, altitude, etc) as well as identify targets that were placed randomly on the ground.
          </StyledText>
        </Col>
      </StyledRow>
      <StyledRow data-aos="fade-up">
        <StyledText>
          I spent months creating and programming an Arudino module that worked like a dream.
        </StyledText>
      </StyledRow>
      <StyledRow data-aos="fade-up">
        <StyledText>
          Due to poor weather for the weeks prior to the launch, we were left to test the rocket the day before... What could go wrong?
        </StyledText>
        <video data-aos="fade-up" width="600" height="500" controls>
          <source src={RocketVideo} type="video/mp4"/>
        </video>
        <Col>
          <StyledText>It didn't quite work as expected.</StyledText>
        </Col>
      </StyledRow>
      <StyledRow data-aos="fade-up">
        <StyledText>
          ...But with some scrap micro controllers and sensors from my bin of scrap parts, we were able to completely rebuild a rocket overnight to launch the 
          following day.
        </StyledText>
      </StyledRow>
      <StyledRow data-aos="fade-up">
        <video width="600" height="500" controls>
          <source src={RocketWork} type="video/mp4"/>
        </video>
      </StyledRow>
      <StyledRow data-aos="fade-up">
        <StyledText>
          This project taught me that I can do anything if I refuse to quit.
        </StyledText>
      </StyledRow>
      <StyledRow data-aos="fade-up">
        <StyledText>
          The code for the project, some custom parts, and the footage that we captured from the rocket can be found in my project portfolio found on the "Portfolio" page.
        </StyledText>
      </StyledRow>
    </Container>
  );
}

export default RocketPage;
