import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import Guitar from '../Images/Guitar.png'
import Pens from '../Images/Pens.jpeg'
import Gearbox from '../Images/Gearbox.mov'
import Ball from '../Images/Ball.PNG'

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

const StyledImg = styled.img`
  border: 10px solid dark-grey;
  width: 600px;
  height: 800px;
  object-fit: cover;
  padding: 2rem;
`;

const StyledText1 = styled.h1`
  color: grey;
  font-size: 50px;
  text-align: left;
  padding-top: 150px;
`;

function SideProjects() {
  return (
    <Container fluid>
      <Row data-aos="fade-down">
        <Styledh5>Personal Projects</Styledh5>
      </Row>
      <StyledRow>
        <Col data-aos="fade-right" >
          <StyledImg src={Guitar}/>
        </Col>
        <Col>
          <StyledText1 data-aos="fade-left">
            During Covid, I built an electric guitar from scratch. It was a challenge with my very limited tool collection.
          </StyledText1>
        </Col>
      </StyledRow>
      <StyledRow>
        <Col data-aos="fade-right">
          <StyledText1>
            Ever since I got my first mini lathe in middle school, it has been a hobby of mine to make and sell hand turned luxury wooden and acrylic pens.
          </StyledText1>
        </Col>
        <Col data-aos="fade-left">
          <StyledImg src={Pens}/>
        </Col>
      </StyledRow>
      <StyledRow>
        <Col data-aos="fade-right">
          <video width="500" height="700" controls>
            <source src={Gearbox} type="video/mp4"/>
          </video>
        </Col>
        <Col>
          <StyledText1 data-aos="fade-left">
            When I learned about cycloids in Calculus, I put theory into practice and designed my first hypocycloid gearbox. I later used this gearbox for the
            body joint of Charlee (My Animatronic Dilophosaurus).
          </StyledText1>
        </Col>
      </StyledRow>
      <StyledRow>
        <Col data-aos="fade-right">
          <StyledText1>
            I like to use my woodworking skills to create sculptures. This burl and resin piece won a Gold Key in the Colorado Scholastic Art and Writing competition.
          </StyledText1>
        </Col>
        <Col data-aos="fade-left">
          <StyledImg src={Ball}/>
        </Col>
      </StyledRow>
    </Container>
  );
}

export default SideProjects;
