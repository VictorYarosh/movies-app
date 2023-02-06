import React from "react";
import { Links, LinksPage, Navbar } from "./navbar.styled";
import Logo from "../logo";

const NavBar = () => {
  return (
    <Navbar>
      <Logo />
      <Links>
        <LinksPage>Movies</LinksPage>
        <LinksPage>TV Shows</LinksPage>
        <LinksPage>Suggest me</LinksPage>
      </Links>
    </Navbar>
  );
};

export default NavBar;
