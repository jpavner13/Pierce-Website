import { Container, Row, Col } from "react-bootstrap";

import DRM1_video from "../Images/DRM1.mp4";
import Square_video from "../Images/Square.mp4";
import Simulation_video from "../Images/Simulation.mov";
import Poster from "../Images/Poster.png";
import styled from "styled-components";
import React, { useEffect } from "react";
import Aos from "aos";
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

const FullWidthImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
  margin: 0 auto;
  border: 10px solid darkgrey;
`;

const VerticalVideoWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const UprightVideo = styled.video`
  width: 100%;
  height: auto;
  object-fit: cover;
  border: 10px solid darkgrey;
`;

function DronePage() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Container fluid>
      <Row data-aos="fade-down">
        <Styledh5>Drones for Space Vehicle Dynamics Simulation</Styledh5>
      </Row>
      <StyledRow>
        <Col data-aos="fade-left">
          <StyledText>
            For my senior design project, my team and I were tasked with
            creating a drone that can simulate the dynamics of a satellite in
            orbit in an affordable and accessible way. The goal was to create a
            drone that can be configured to model a given satellite and thruster
            configuration and execute movement commands in the form of a thrust
            matrix (what thrusters are active at what time). The drone would
            then move as if it were the satellite executing that thrust matrix.
            This would allow for a more realistic simulation of satellite
            dynamics during rendezvous and proximity operations(RPO's).
          </StyledText>
          <video
            data-aos="fade-up"
            width="1000"
            height="670"
            controls
            style={{
              display: "block",
              margin: "0 auto",
              border: "10px solid darkgrey",
            }}
          >
            <source src={Square_video} type="video/mp4" />
          </video>
        </Col>
      </StyledRow>
      <StyledRow data-aos="fade-up">
        <StyledText>
          We then presented our project at the 2025 University of Colorado
          Boulder Senior Design Expo to a group of judges and the Boulder
          community.
        </StyledText>
        <Col data-aos="fade-right">
          <FullWidthImg src={Poster} />
        </Col>
      </StyledRow>
      <StyledRow data-aos="fade-up">
        <StyledText>
          Below is a video of one of our design reference missions (DRM's), a
          way of demonstrating the drone's capabilities in simulating satellite
          maneuvers. This is a simple x translation. The LED arrows on the drone
          are positioned in an orientation of a cube satellite, a standard
          formfactor of a satellite used in the aerospace industry. The LED's
          turn on when that thruster is active and the drone will model the
          respective movement.
        </StyledText>
        <video data-aos="fade-up" width="600" height="500" controls>
          <source src={DRM1_video} type="video/mp4" />
        </video>
      </StyledRow>
      <StyledRow data-aos="fade-up">
        <Col xs={12} md={6}>
          <VerticalVideoWrapper>
            <UprightVideo controls>
              <source src={Simulation_video} type="video/mp4" />
            </UprightVideo>
          </VerticalVideoWrapper>
        </Col>
        <Col xs={12} md={6}>
          <StyledText>
            Here is a video of a simulation of the drone in a 3D environment.
            This was used to test the software that would translate the thrust
            matrix into movement commands into drone acceleration commands.
          </StyledText>
        </Col>
      </StyledRow>
    </Container>
  );
}

export default DronePage;
