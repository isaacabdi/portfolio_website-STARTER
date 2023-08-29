
import React from 'react';
import Link from 'next/link';
import { Section, SectionText, SectionText2, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { SocialIcons } from '../Header/HeaderStyles';


  const handleClick = () => {
    window.open("/isaacresume.pdf");
  };

const Hero = (props) => (
  <>
  
    <Section row nopadding>
      <LeftSection>
        <br></br><br></br><br></br>
        <SectionTitle main center>
          Hi, I'm Isaac Abdi <br />
        </SectionTitle>
        <SectionText>
        University Student and Junior Developer
        </SectionText>
          <a href="/isaacresume.pdf" target="_blank">  
            <Button>Learn More</Button>
          </a>
          
      </LeftSection>
    </Section>
  </>
);

export default Hero;