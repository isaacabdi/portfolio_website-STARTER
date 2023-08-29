import React from 'react';

import { DiPython, DiReact, DiEclipse, DiJavascript, DiDatabase, DiCss3} from 'react-icons/di';
import { SiCsharp, SiCplusplus, SiJava, SiCss3, SiRstudio, SiPython, SiVisualstudiocode, SiEclipseide, SiAndroidstudio, SiReact, SiGit, SiMysql, SiMicrosoftexcel, SiDiscord, SiUnity, SiArduino, SiUbuntu, SiGooglecloud  } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { Section, SectionDivider, SectionSubText, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { SocialIcons } from '../Header/HeaderStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider /> 
    <SectionTitle>Technologies</SectionTitle>
    <br></br>
    <ListTitle>
      I've worked with a range a technologies, here are some of the languages I am familiar with.
    </ListTitle>
    <List>
      <ListItem>
        <picture>
        <FaJava size="5rem" />
        </picture>
        <ListContainer>
          <ListParagraph>Java</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiPython size="5rem" />
        </picture>
        <ListContainer>
          <ListParagraph>Python</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiCsharp size="5rem" />
        </picture>
        <ListContainer>
          <ListParagraph>C Sharp</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <List>
      <ListItem>
        <picture>
        <SiCplusplus size="5rem" />
        </picture>
        <ListContainer>
          <ListParagraph>C++</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiJavascript size="5rem" />
        </picture>
        <ListContainer>
          <ListParagraph>Javascript</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiCss3 size="5rem" />
        </picture>
        <ListContainer>
          <ListParagraph>CSS</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <List>
      <ListItem>
        <picture>
        <DiDatabase size="5rem" />
        </picture>
        <ListContainer>
          <ListParagraph>SQL</ListParagraph>
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
    <ListTitle>Frameworks/Technologies</ListTitle>
    <List>
      <ListItem>
        <picture>
        <SiReact size="5rem" />
        </picture>
        <ListContainer>
          <ListParagraph>React</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiGit size="5rem" />
        </picture>
        <ListContainer>
          <ListParagraph>Git</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiMysql size="7rem" />
        </picture>
        <ListContainer>
          <ListParagraph>MySQL</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <List>
      <ListItem>
        <picture>
        <SiMicrosoftexcel size="5rem" />
        </picture>
        <ListContainer>
          <ListParagraph>Excel VBA</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiDiscord size="5rem" />
        </picture>
        <ListContainer>
          <ListParagraph>Discord Java Bot API</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiUnity size="5rem" />
        </picture>
        <ListContainer>
          <ListParagraph>Unity</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <List>
      <ListItem>
        <picture>
        <SiArduino size="5rem" />
        </picture>
        <ListContainer>
          <ListParagraph>Arduino</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiUbuntu size="5rem" />
        </picture>
        <ListContainer>
          <ListParagraph>Ubuntu</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiGooglecloud size="5rem" />
        </picture>
        <ListContainer>
          <ListParagraph>Google Cloud Platform</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <ListTitle>My Workflow</ListTitle>
    <List>
      <ListItem>
        <picture>
        <SiVisualstudiocode size="5rem" />
        </picture>
        <ListContainer>
          <ListParagraph>VisualStudioCode</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiEclipseide size="5rem" />
        </picture>
        <ListContainer>
          <ListParagraph>Eclipse</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiAndroidstudio size="5rem" />
        </picture>
        <ListContainer>
          <ListParagraph>Android Studio</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
  </Section>
  
);

export default Technologies;
