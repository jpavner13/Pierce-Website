import { Container, Row, Col } from "react-bootstrap";

import Lightsaber from "../Images/Lightsaber.JPG";
import LightsaberVideo from "../Images/Lightsaber_video.MOV";
import Lightsaber_video2 from "../Images/fixed_Lightsaber2.mp4";
import Kestis from "../Images/Kestis.png";
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

const StyledImg = styled.img`
  border: 10px solid dark-grey;
  width: 800px;
  height: 1300px;
  object-fit: cover;
  padding: 2rem;
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

function LightsaberPage() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Container fluid>
      <Row data-aos="fade-down">
        <Styledh5>Neopixel Lightsabers</Styledh5>
      </Row>
      <StyledRow>
        <Col data-aos="fade-right">
          <StyledImg src={Lightsaber} />
        </Col>
        <Col data-aos="fade-left">
          <StyledText>
            This project was an ambitious summer project. I wanted to make the
            most realistic Lightsaber I could. It had to look good aesthetically
            while still having all of the electronics to controll 544 Neopixel
            LED's in the blade. The biggest challenge was to fit all of the
            electronics into such a small space.
          </StyledText>
        </Col>
      </StyledRow>
      <StyledRow data-aos="fade-up">
        <StyledText>
          The processor is a proffieboard V2 with a built in acclerometer and
          gyroscope. The software was written in c#.
        </StyledText>
      </StyledRow>
      <StyledRow data-aos="fade-up">
        <StyledText>
          After about two months of work, I finally finished the first
          prototype!
        </StyledText>
        <video data-aos="fade-up" width="600" height="500" controls>
          <source src={LightsaberVideo} type="video/mp4" />
        </video>
      </StyledRow>
      <StyledRow data-aos="fade-up">
        <Col xs={12} md={6}>
          <VerticalVideoWrapper>
            <UprightVideo controls>
              <source src={Lightsaber_video2} type="video/mp4" />
            </UprightVideo>
          </VerticalVideoWrapper>
        </Col>
        <Col xs={12} md={6}>
          <StyledText>
            After I made the first, the second went much smoother. I adjusted
            the fit of the internal components and added more refined control
            settings through software. Each saber now has its own unique sound
            font and blade style, and they both use motion controls to activate
            effects like blaster deflection or lockup. The second build took
            half the time and turned out way cleaner.
          </StyledText>
        </Col>
      </StyledRow>
      <StyledRow data-aos="fade-up">
        <StyledText>
          These projects are always a blast because I am able to connect my
          inner nerd with my engineering skills.
        </StyledText>
      </StyledRow>
      <StyledRow data-aos="fade-up">
        <StyledText>
          My most recent one is a replica of Cal Kestis' lightsaber from the
          game Star Wars Jedi: Fallen Order. This project gave me an excuse to
          use more SLA printing which can have a lot more detail than FDM
          printing. The entire inner casing is resin printed with real crystals
          to enhance the authenticity and appearance of the lightsaber. I also
          integrated bluetooth so I can control it from my phone and has
          removable compoents to make it more immersive of a design.
        </StyledText>
        <Col data-aos="fade-right">
          <FullWidthImg src={Kestis} />
        </Col>
      </StyledRow>
    </Container>
  );
}

export default LightsaberPage;
