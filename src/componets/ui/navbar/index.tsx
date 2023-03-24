import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

import ArrowNavbar from '../../../assets/images/icons/arrow-right.png';
import Logo from '../logo';
import { Links, LinksPage, Navbar } from './navbar.styled';

const NavBar = () => {
  const router = useRouter();
  return (
    <Navbar>
      <Logo />
      <Links>
        <LinksPage onClick={() => router.push('/movies-list')}>Movies</LinksPage>
        <LinksPage onClick={() => router.push('/tv-shows')}>TV Shows</LinksPage>
        <LinksPage>Suggest me</LinksPage>
        <LinksPage>
          <Image src={ArrowNavbar} alt="arrowNavbar" />
        </LinksPage>
      </Links>
    </Navbar>
  );
};

export default NavBar;
