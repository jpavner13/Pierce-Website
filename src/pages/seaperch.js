import { Button, Container, Card, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled, { css } from 'styled-components';

import React, {useEffect} from "react";
import Aos from 'aos';
import "aos/dist/aos.css";

import documentation from '../Images/SeaDoc.pdf'

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

function SeaPerchPage() {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
  return (
    <Container fluid>
      <Styledh5 data-aos="fade-down">SeaPerch</Styledh5>
      <StyledRow data-aos="fade-up">
        <StyledText>
          This was my first ever tech competition. It was hosted by the US Navy. I worked on a team with my brother and we were the first ones ever to place top 10 in the world
          from a land locked state, Colorado. We were also the first group ever that were able to make a working claw within the $20 budget.
        </StyledText>
      </StyledRow>
      <StyledRow data-aos="fade-up">
        <StyledText>
          Documentation:
        </StyledText>
      </StyledRow>
      <StyledRow data-aos="fade-up">
        <iframe src={documentation} width="600" height="800"/>
      </StyledRow>
      <StyledRow data-aos="fade-up">
        <StyledText>
          The documentation for this project was also my first ever applied expirience of tecnical writing.
        </StyledText>
      </StyledRow>
    </Container>
  );
}

export default SeaPerchPage;
