import { Button, Container, Card, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled, { css } from 'styled-components';

import React, {useEffect} from "react";
import Aos from 'aos';
import "aos/dist/aos.css";

import Pierce from '../Images/Pierce.JPG'
import Resume from '../Images/Resume.pdf'
import Pro from '../Images/Pro.png'
import Am from '../Images/ADD.png'
import As from '../Images/AS.png'

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

const StyledText1 = styled.h1`
  color: ForestGreen;
  font-size: 35px;
  text-align: left;
`;

const StyledText2 = styled.h1`
  color: white;
  font-size: 35px;
  text-align: left;
`;

const StyledImg = styled.img`
  border: 10px solid dark-grey;
  width: 600px;
  height: 800px;
  object-fit: cover;
  padding: 2rem;
`;

const StyledImg2 = styled.img`
  border: 10px solid dark-grey;
  width: 300px;
  height: 300px;
  object-fit: cover;
  padding: 2rem;
`;

function AboutPage() {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
  return (
    <Container fluid>
      <StyledRow>
        <Col data-aos="fade-right" >
          <StyledImg src={Pierce}/>
        </Col>
        <Col>
          <Styledh5 data-aos="fade-down">About</Styledh5>
          <StyledText data-aos="fade-left">
          Second year computer science student at the University of Colorado Boulder. After moving back to the US from the Netherlands my eyes were opened to the world of possibilities, especially in engineering. I started playing around with mechanical and electrical engineering obtaining multiple professional certifications along the way. Shortly thereafter I developed a love for designing, integrating, and programming circuit boards. I always need to keep my hands busy weather it be on personal projects, school, or work. I like to work fast and diligently, and I want to use my skills and ambition to make a positive impact on the world.
          </StyledText>
        </Col>
      </StyledRow>
      <StyledRow data-aos="fade-up">
        <StyledText1>
          Skills:
        </StyledText1>
      </StyledRow>
      <StyledRow data-aos="fade-up">
        <StyledText1>
          Languages: 
        </StyledText1>
        <StyledText2>
          c++, c#, Java, HTML, CSS, Javascript, Ruby, React JS, Verilog, Arduino, and command line control.
        </StyledText2>
      </StyledRow>
      <StyledRow data-aos="fade-up">
        <StyledText1>
          Software:
        </StyledText1>
        <StyledText2>
          Solidworks, Adobe Illustrator, Cura, Meshmixer, Excel, Google applications, Github, etc.
        </StyledText2>
      </StyledRow>
      <StyledRow data-aos="fade-up">
        <Col>
          <StyledText1>
            Cirtifications:
          </StyledText1>
        </Col>
        <Col>
          <StyledImg2 src={Pro}/>
        </Col>
        <Col>
          <StyledImg2 src={Am}/>
        </Col>
        <Col>
          <StyledImg2 src={As}/>
        </Col>
      </StyledRow>
      <StyledRow data-aos="fade-up">
        <StyledText2>
          Quick learner, Interpersonal, Strong communicator, Problem solver.
        </StyledText2>
      </StyledRow>
      <StyledRow data-aos="fade-up">
        <iframe src={Resume} width="600" height="800"/>
      </StyledRow>
    </Container>
  );
}

export default AboutPage;
