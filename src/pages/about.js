import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Pierce from "../Images/Pierce.JPG";
import Resume from "../Images/Resume.pdf";
import Pro from "../Images/Pro.png";
import Am from "../Images/ADD.png";
import As from "../Images/AS.png";

import "../components/CSS Files/wrapImage.css";

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
  padding: 3rem;
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
  box-shadow: 0 6px 8px rgba(000, 200, 000, 0.8);
`;

function AboutPage() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Container fluid>
      <StyledRow>
        <Col data-aos="fade-right">
          <StyledImg id="tv" src={Pierce} />
        </Col>
        <Col>
          <Styledh5 data-aos="fade-down">About</Styledh5>
          <StyledText data-aos="fade-left">
            I am a fourth year honors Engineering student majoring in Computer
            Science with a minor in computer engineering and a focus in real
            time operating systems at the University of Colorado Boulder. I've
            been obsessed with mechanical and electrical engineering projects
            ever since middle school. Now embedded systems is my passion. I've
            obtained multiple professional certifications, gained expirience
            from internships and co-ops, and won numerous technology and
            engineering competitions. I work fast and diligently, and I want to
            use my skills and ambition to make a positive impact on the world.
          </StyledText>
        </Col>
      </StyledRow>
      <StyledRow data-aos="fade-up">
        <StyledText1>Skills:</StyledText1>
      </StyledRow>
      <StyledRow data-aos="fade-up">
        <StyledText1>Programming Languages:</StyledText1>
        <StyledText2>
          c++, Python, Java, c#, c, Javascript, React JS, CSS, HTML, SQL, Ruby,
          Scala, RISC-V, Assembly
        </StyledText2>
      </StyledRow>
      <StyledRow data-aos="fade-up">
        <StyledText1>Software:</StyledText1>
        <StyledText2>
          Altium Designer, SOLIDWORKS, STM Cube IDE, Adobe Illustrator, Adobe
          Photoshop, Docker, Firebase, GitHub, GitLab, AWS, Command Line
          Control, Linux development, Segger System View, Zephyr RTOS, ESP IDF,
          Free RTOS, MeshMixer, Cura, MarkForged, Excel, Google Applications,
          Jira, Multiple 3D printing slicers
        </StyledText2>
      </StyledRow>
      <StyledRow data-aos="fade-up">
        <Col>
          <StyledText1>Certifications:</StyledText1>
        </Col>
        <Col>
          <StyledImg2 src={Pro} />
        </Col>
        <Col>
          <StyledImg2 src={Am} />
        </Col>
        <Col>
          <StyledImg2 src={As} />
        </Col>
      </StyledRow>
      <StyledRow data-aos="fade-up">
        <iframe src={Resume} title="Resume" width="600" height="800" />
      </StyledRow>
    </Container>
  );
}

export default AboutPage;
