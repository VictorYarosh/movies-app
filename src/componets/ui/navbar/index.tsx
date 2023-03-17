import Image from 'next/image';
import React from 'react';

import ArrowNavbar from '../../../assets/images/icons/arrow-right.png';
import Logo from '../logo';
import { Links, LinksPage, Navbar } from './navbar.styled';

const NavBar = () => {
  return (
    <Navbar>
      <Logo />
      <Links>
        <LinksPage>Movies</LinksPage>
        <LinksPage>TV Shows</LinksPage>
        <LinksPage>Suggest me</LinksPage>
        <LinksPage>
          <Image src={ArrowNavbar} alt="arrowNavbar" />
        </LinksPage>
      </Links>
    </Navbar>
  );
};

export default NavBar;
