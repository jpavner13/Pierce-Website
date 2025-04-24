import { Container, Row, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

import React, {useEffect} from "react";
import Aos from 'aos';
import "aos/dist/aos.css";

import Game from '../Images/Game.mp4'

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

function HackathonPage() {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
  return (
    <Container fluid>
      <Styledh5>CU Boulder Hackathon 2022</Styledh5>
      <StyledText>
        This project was for my first ever hackathon, and my first attempt at programming a computer game. My teammate and I had 24 hours to make whatever computer 
        science project we wanted. We learned c# and Unity in less than a day to make this game.
      </StyledText>
      <StyledRow data-aos="fade-up">
        <video width="600" height="500" controls>
          <source src={Game} type="video/mp4"/>
        </video>
      </StyledRow>
      <StyledRow>
        <StyledText>
          We didn't sleep for 30 hours and the game turned out great. 
        </StyledText>
      </StyledRow>
      <StyledRow>
        <StyledText>
          The project files can be found on the 'Portfolio' page. 
        </StyledText>
      </StyledRow>
    </Container>
  );
}

export default HackathonPage;
