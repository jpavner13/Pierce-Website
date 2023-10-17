import { Container, Row, Col } from "react-bootstrap";

import Lightsaber from "../Images/Lightsaber.JPG";
import LightsaberVideo from "../Images/Lightsaber_video.MOV";
import Lightsaber_video2 from "../Images/Lightsaber2.MOV";
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

const StyledImg = styled.img`
  border: 10px solid dark-grey;
  width: 600px;
  height: 1000px;
  object-fit: cover;
  padding: 2rem;
`;

function LightsaberPage() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Container fluid>
      <Row data-aos="fade-down">
        <Styledh5>Neopixel Lightsaber</Styledh5>
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
        <StyledText>
          After I made the first, the second went much smoother.
        </StyledText>
      </StyledRow>
      <StyledRow data-aos="fade-up">
        <video width="600" height="500" controls>
          <source src={Lightsaber_video2} type="video/mp4" />
        </video>
      </StyledRow>
      <StyledRow data-aos="fade-up">
        <StyledText>
          This was a blast because I was able to connect my inner nerd with my
          engineering skills.
        </StyledText>
      </StyledRow>
    </Container>
  );
}

export default LightsaberPage;
