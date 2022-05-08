import styled from 'styled-components';
import { Button, Container, Row } from 'react-bootstrap';
import React from 'react';

const StyledCard = styled.div`
  padding: 1rem;
  height: 31rem;
  width: 15rem;
  background-color: #363636;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(200, 200, 200, 0.8);
`;

const StyledImg = styled.img`
  border-style: solid;
  border-color: black;
  padding: 0;
  width: 475px;
  height: 300px;
  object-fit: cover;
`;

const Styledh5 = styled.h5`
  color: black;
  font-size: 30px;
  text-align: center;
  text-decoration: underline;
  text-shadow: 2px 2px 5px white;
`;

const Card = (props) => {
  return (
    <StyledCard>
      <Container>
        <Row>
          <StyledImg src={props.src} />
        </Row>
        <Row>
          <div class="card-body">
            <Styledh5 class="card-title color:white">{props.title}</Styledh5>
          </div>
        </Row>
        <Row>
          <div class="col d-flex justify-content-center">
            <button class="button">
              <span>{props.buttonName} </span>
            </button>
          </div>
        </Row>
      </Container>
    </StyledCard>
  );
};

export default Card;
