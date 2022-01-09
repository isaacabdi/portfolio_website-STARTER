import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineFilePdf } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';



import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>Isaac Abdi</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="/#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="/#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/isaacabdi" target="_blank">
          <AiFillGithub size="4rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/isaac-abdi/" target="_blank">
          <AiFillLinkedin size="4rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/isaac_abdii/?hl=en" target="_blank">
          <AiFillInstagram size="4rem"/>
        </SocialIcons>
        <SocialIcons href="/isaacresume.pdf" target="_blank">
          <AiOutlineFilePdf size="4rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
