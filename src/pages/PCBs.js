import { Container, Row, Col } from "react-bootstrap";

import STM from "../Images/STM.png";
import RP2040 from "../Images/rp2040.png";
import RPIShield from "../Images/RPIShield.png";
import MacroKeyboard from "../Images/MacroKeyboard.png";
import Schematic from "../Images/Schematic.png";
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
  width: 800px;
  height: 1300px;
  object-fit: cover;
  padding: 2rem;
`;

const FullWidthImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
  margin: 0 auto;
  border: 10px solid darkgrey;
`;

function PCBPage() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Container fluid>
      <Row data-aos="fade-down">
        <Styledh5>Embedded Systems Designs</Styledh5>
      </Row>
      <StyledRow>
        <Col data-aos="fade-right">
          <StyledImg src={RPIShield} />
        </Col>
        <Col data-aos="fade-left">
          <StyledText>
            These are some examples of some of my embedded systems designs. I
            have done multiple boards centered around STM32 microcontrollers,
            rp2040 microcontrollers, ATmega microcontrollers, and ESP32
            microcontrollers. My designs are all created in Altium Designer and
            are mostly assembled by hand. I have experience with both through
            hole and surface mount soldering, and have gained a lot of useful
            experience in the debugging and analysis process of embedded
            systems. The example above is a board designed around the rp2040 to
            act as a shield for a Raspberry Pi 5 that incorperates various
            sensors and interfaces that was used in a high altitude weather
            balloon to capture over 80,000 atmospheric and GPS data points.
          </StyledText>
        </Col>
      </StyledRow>
      <StyledRow data-aos="fade-up">
        <StyledText>
          A lot of my current projects involve STM32 microcontrolles. I have
          been working on designing a high speed development board that can
          interface with ethernet to other computers for high speed data
          transfer.
          <Col data-aos="fade-right">
            <FullWidthImg src={Schematic} />
          </Col>
        </StyledText>
      </StyledRow>
      <StyledRow data-aos="fade-up">
        <StyledText>
          This is a side by side comparison of my first ever PCB design from my
          senior year of high school to one of my designs from my junior year of
          college. The first was designed as a way to clean up the wiring of a
          project using an Arduino Due, and the second is for a programmable
          macro keyboard.
        </StyledText>
        <Col data-aos="fade-right">
          <FullWidthImg src={MacroKeyboard} />
        </Col>
      </StyledRow>
      <StyledRow data-aos="fade-up">
        <StyledText>
          This PCB was the first one that I developed around an STM32
          microcontroller. It is a low speed and robust development board that
          can be programmed with an ST-Link programmer. I have tested it with
          FreeRTOS and SEGGER System View to see how efficient the code for my
          processes can be.
        </StyledText>
        <Col data-aos="fade-right">
          <FullWidthImg src={STM} />
        </Col>
      </StyledRow>
      <StyledRow data-aos="fade-up">
        <StyledText>
          This was the first controller that I designed around the rp2040. In
          hind sight it probably wasnt the best choice to start with because the
          rp2040 is tiny and very difficult to solder by hand.
        </StyledText>
        <Col data-aos="fade-right">
          <FullWidthImg src={RP2040} />
        </Col>
      </StyledRow>
    </Container>
  );
}

export default PCBPage;
