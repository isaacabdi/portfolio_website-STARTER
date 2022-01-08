
import React from 'react';
import Link from 'next/link';
import { Section, SectionText, SectionText2, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I'm Isaac Abdi <br />
        </SectionTitle>
        <SectionText>
        University Student and Junior Developer
        </SectionText>
        <Link href="#tech">
          <Button>Learn More</Button>
        </Link>
        
      </LeftSection>
    </Section>
  </>
);

export default Hero;