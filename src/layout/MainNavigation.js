import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import logo from '../Images/logo.png';
import styled, { css } from 'styled-components';

const Header = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  align-items: center;
  background-color: #363636;
  padding: 0 10%;
`;

const Nav = styled.div`
  width: 100%;
`;

const Ul = styled.div`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: baseline;
`;

const Li = styled.div`
  margin-left: 12%;
`;

const StyledLink = styled(Link)`
  text-decoration: underline;
  text-shadow: 2px 2px 5px white;
  color: black;
  font-size: 3rem;
`;

function MainNavigation() {
  return (
    <Header>
      <Image
        src={logo}
        class="img-fluid"
        alt="Responsive image"
        width="110"
        height="110"
        roundedCircle
      />
      <Nav>
        <Ul>
          <Li>
            <StyledLink to="/about">About</StyledLink>
          </Li>
          <Li>
            <StyledLink to="/projects">Projects</StyledLink>
          </Li>
          <Li>
            <StyledLink to="/projectPortfolio">Portfolio</StyledLink>
          </Li>
          <Li>
            <StyledLink to="/contact">Contact</StyledLink>
          </Li>
        </Ul>
      </Nav>
    </Header>
  );
}

export default MainNavigation;
