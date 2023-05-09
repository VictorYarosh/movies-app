import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import ArrowNavbar from '../../../assets/images/icons/arrow-right.png';
import Logo from '../logo';
import { Links, LinksPage, NavbarWrapper } from './navbar.styled';

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Logo />
      <Links>
        <LinksPage>
          <Link href="/movies" passHref>
            Movies
          </Link>
        </LinksPage>
        <LinksPage>
          <Link href="/tv-shows" passHref>
            TV Shows
          </Link>
        </LinksPage>
        <LinksPage>
          <Link href="/" passHref>
            Suggest me
          </Link>
        </LinksPage>
        <LinksPage>
          <Image src={ArrowNavbar} alt="arrowNavbar" />
        </LinksPage>
      </Links>
    </NavbarWrapper>
  );
};

export default Navbar;
