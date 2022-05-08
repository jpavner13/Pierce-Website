import styled from 'styled-components';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React from 'react';

import '../components/CSS Files/Button.css'

const StyledCard = styled.div`
  padding: 1rem;
  height: 100%;
  width: 100%;
  background-color: #363636;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(200, 200, 200, 0.8);
`;

const StyledImg = styled.img`
  border-style: solid;
  border-color: black;
  padding: 0;
  height: 20rem;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  object-fit: cover;
  image-align: center;
`;

const Styledh5 = styled.h5`
  color: black;
  font-size: auto;
  text-align: center;
  text-decoration: underline;
  text-shadow: 2px 2px 5px white;
`;

const StyledP = styled.p`
  color: white;
  text-align: center;
  font-size: auto;
`;

const Card = (props) => {
    console.log(props.routeLink)
  return (
    <StyledCard>
      <Container>
        <Row>
          <StyledImg src={props.src} />
        </Row>
        <Row>
          <div class="card-body">
            <Styledh5 class="card-title color:white">{props.title}</Styledh5>
            <StyledP class="card-text">{props.description}</StyledP>
          </div>
        </Row>
        <Row>
          <div class="col d-flex justify-content-center">
            <Link to={props.routeLink}>
              <button className="button">
                <span>{props.buttonName} </span>
              </button>
            </Link>
          </div>
        </Row>
      </Container>
    </StyledCard>
  );
};

export default Card;
