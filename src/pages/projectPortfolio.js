import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

import React, {useEffect} from "react";
import Aos from 'aos';
import "aos/dist/aos.css";

import { TouchableOpacity, Linking } from "react-native";
const googleDrive = "https://drive.google.com/drive/u/0/folders/15oNCRlxgaRJGQ7ES3Zfb9ziCp28WumuO"

const StyledRow = styled(Row)`
  padding: 1rem;
  background-color: dark-grey;
`;

const Styledh5 = styled.h5`
  color: dark-grey;
  font-size: 80px;
  text-align: center;
  text-decoration: underline;
  text-shadow: 2px 2px 5px white;
`;

function ProjectPortfolioPage() {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
  return (
    <Container fluid>
      <Styledh5 data-aos="fade-down">Project Portfolio</Styledh5>
      <StyledRow data-aos="fade-up">
        <iframe src="https://drive.google.com/embeddedfolderview?id=15oNCRlxgaRJGQ7ES3Zfb9ziCp28WumuO#grid" title="Project Drive" width="100%" height="500" frameborder="0"></iframe>
      </StyledRow>
      <StyledRow data-aos="fade-up">
          <TouchableOpacity onPress={() => Linking.openURL(googleDrive)}>
            <p class="hover-underline-animation"> Google Drive Link </p>     
          </TouchableOpacity>
      </StyledRow>
    </Container>
  );
}

export default ProjectPortfolioPage;
