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
      <Styledh5>Hackathon 2022</Styledh5>
      <StyledText>
        This was my project for my first ever hackathon. I competed with a friend and we had 24 hours to make whatever we wanted. We both wanted to hearn how to make 
        games, so we learned c# and Unity in 24 hours to make this game.
      </StyledText>
      <StyledRow data-aos="fade-up">
        <video width="600" height="500" controls>
          <source src={Game} type="video/mp4"/>
        </video>
      </StyledRow>
      <StyledRow>
        <StyledText>
          Besides not sleeping for over 30 hours, I had a great time and I impressed myself with how much I was able to learn and do in 24 hours. 
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
