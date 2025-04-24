import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import logo from '../Images/logo.png';
import styled from 'styled-components';

import '../components/CSS Files/PagesLink.css'

const Header = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  align-items: center;
  background-color: #363636;
  padding: 0 10%;
  box-shadow: 0 6px 8px rgba(000, 200, 000, 0.8);
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
  width: auto;
  padding = 2rem;
`;

const StyledLink = styled(Link)`
  text-shadow: 2px 2px 5px white;
  color: black;
  font-size: 3vw;
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
            <Link to="/">
              <button className="but">
                <span>About</span>
              </button>
            </Link>
          </Li>
          <Li>
            <StyledLink to="/projects">
              <button className="but">
                <span>Projects</span>
              </button>
            </StyledLink>
          </Li>
          <Li>
            <StyledLink to="/projectPortfolio">
              <button className="but">
                <span>Portfolio</span>
              </button>
            </StyledLink>
          </Li>
          <Li>
            <StyledLink to="/contact">
              <button className="but">
                <span>Contact</span>
              </button>
            </StyledLink>
          </Li>
        </Ul>
      </Nav>
    </Header>
  );
}

export default MainNavigation;
