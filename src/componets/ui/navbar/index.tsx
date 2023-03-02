import React from "react";

import Image from "next/image";
import { Links, LinksPage, Navbar } from "./navbar.styled";
import Logo from "../logo";

import ArrowNavbar from "../../../assets/images/icons/arrow-right.png";

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
