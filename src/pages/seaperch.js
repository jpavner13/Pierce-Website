import { Container, Row, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

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

function SeaPerchPage() {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
  return (
    <Container fluid>
      <Styledh5 data-aos="fade-down">Underwater Robotic Submarine</Styledh5>
      <StyledRow data-aos="fade-up">
        <StyledText>
          This was my first ever tech competition. It was hosted by the US Navy. I worked on a team with my brother. A Navy recruiter said we were the first team to 
          place in the international top 10 from the Rocky Mountiain Region. We were also the first team ever to incorporate a working claw onto the submarine within 
          the $20 budget limitation.
        </StyledText>
      </StyledRow>
      <StyledRow data-aos="fade-up">
        <StyledText>
          Documentation:
        </StyledText>
      </StyledRow>
      <StyledRow data-aos="fade-up">
        <iframe src={documentation} title="SeaPerch Documentation" width="600" height="800"/>
      </StyledRow>
      <StyledRow data-aos="fade-up">
        <StyledText>
          The documentation for this project was my first applied experience of tecnical writing.
        </StyledText>
      </StyledRow>
    </Container>
  );
}

export default SeaPerchPage;
