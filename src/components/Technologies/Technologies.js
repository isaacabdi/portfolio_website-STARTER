import React from 'react';

import { DiPython, DiReact, DiEclipse, DiJavascript, DiDatabase, DiCss3} from 'react-icons/di';
import { SiCsharp, SiCplusplus, SiJava, SiCss3, SiRstudio, SiPython  } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { Section, SectionDivider, SectionSubText, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies, here are some of the languages I am familiar with.
    </SectionText>
    <List>
      <ListItem>
        <picture>
        <FaJava size="5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Java</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiPython size="5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Python</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiCsharp size="5rem" />
        </picture>
        <ListContainer>
          <ListTitle>C Sharp</ListTitle>
        </ListContainer>
      </ListItem>
    </List>
    <List>
      <ListItem>
        <picture>
        <SiCplusplus size="5rem" />
        </picture>
        <ListContainer>
          <ListTitle>C++</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiJavascript size="5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Javascript</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiCss3 size="5rem" />
        </picture>
        <ListContainer>
          <ListTitle>CSS</ListTitle>
        </ListContainer>
      </ListItem>
    </List>
    <List>
      <ListItem>
        <picture>
        <DiDatabase size="5rem" />
        </picture>
        <ListContainer>
          <ListTitle>SQL</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiJavascript size="5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Javascript</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiRstudio size="5rem" />
        </picture>
        <ListContainer>
          <ListTitle>R</ListTitle>
        </ListContainer>
      </ListItem>
    </List>
    <SectionText>Here are some of the frameworks/technologies I have also learned.</SectionText>
    <SectionText>My Workflow</SectionText>
  </Section>
);

export default Technologies;
