import MainNavigation from './MainNavigation';
import Footnote from './Footnote';
import styled from 'styled-components';

const Main = styled.div`
  margin: 3rem auto;
  width: 90%;
  background-color: #000000;
`;

function Layout(props) {
  return (
    <div class="bg-black">
      <MainNavigation />
      <Main>{props.children}</Main>
      <Footnote />
    </div>
  );
}

export default Layout;
