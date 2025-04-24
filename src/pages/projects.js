import { Container, Row, Col } from "react-bootstrap";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Charlee from "../Images/Charlee.png";
import Rocket from "../Images/Rocket.png";
import Duck from "../Images/Duck.png";
import Seaperch from "../Images/Seaperch.png";
import Guitar from "../Images/Guitar.png";
import Hackathon from "../Images/Hackathon.png";
import Lightsaber from "../Images/Lightsaber.JPG";
import PCB from "../Images/RPIShield.png";
import Poster from "../Images/Poster.png";

import Card from "../components/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

const StyledRow = styled(Row)`
  padding: 1rem;
`;

const StyledText = styled.h1`
  color: grey;
  font-size: 35px;
  text-align: center;
`;

function ProjectPage() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Container fluid>
      <StyledRow data-aos="fade-up" class="height= 2rem">
        <Col data-aos="flip-left">
          <Card
            title="Animatronic Dinosaur"
            src={Charlee}
            description="Tecnology Student Association state champion"
            buttonName="Read More"
            routeLink="/Charlee"
          ></Card>
        </Col>
        <Col data-aos="flip-left">
          <Card
            title="Embedded Systems Designs"
            src={PCB}
            description="A collection of my PCB and embedded system designs"
            buttonName="Read More"
            routeLink="/PCBs"
          />
        </Col>
        <Col data-aos="flip-left">
          <Card
            title="NeoPixel Lightsabers"
            src={Lightsaber}
            description="A project where my inner nerd met my inner engineer"
            buttonName="Read More"
            routeLink="/Lightsaber"
          />
        </Col>
        <Col data-aos="flip-left">
          <Card
            title="Drones for Space Vehicle Dynamics Simulation"
            src={Poster}
            description="My college Senior Design project"
            buttonName="Read More"
            routeLink="/drone"
          ></Card>
        </Col>
      </StyledRow>

      <StyledRow data-aos="fade-up" class="height= 2rem">
        <Col data-aos="flip-left">
          <Card
            title="Animatronic Duck"
            src={Duck}
            description="A great learning expirience with some laughs along the way"
            buttonName="Read More"
            routeLink="/duck"
          />
        </Col>
        <Col data-aos="flip-left">
          <Card
            title="Lockheed Martin Rocket"
            src={Rocket}
            description="A great example of how I push through failure and work under pressure..."
            buttonName="Read More"
            routeLink="/Rocket"
          />
        </Col>
        <Col data-aos="flip-left">
          <Card
            title="Personal Projects"
            src={Guitar}
            description="Things I do to keep my hands busy"
            buttonName="Read More"
            routeLink="/sideProjects"
          ></Card>
        </Col>
        <Col data-aos="flip-left">
          <Card
            title="Hackathon 2022"
            src={Hackathon}
            description="First ever hackathon, game made in c#"
            buttonName="Read More"
            routeLink="/hackathon22"
          ></Card>
        </Col>
      </StyledRow>

      <StyledRow data-aos="fade-up" class="height= 2rem">
        <Col data-aos="flip-left">
          <Card
            title="Underwater Robotics"
            src={Seaperch}
            description="My first ever tech competition making a revolutionary underwater robot for under $20"
            buttonName="Read More"
            routeLink="/seaperch"
          ></Card>
        </Col>
      </StyledRow>

      <StyledRow data-aos="fade-up">
        <StyledText>...and more to come!</StyledText>
      </StyledRow>
    </Container>
  );
}

export default ProjectPage;
