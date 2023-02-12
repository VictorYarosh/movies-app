import React, { FC } from "react";

import { LayoutProps } from "./types";
import { LayoutStyled } from "./layout.styled";
import Navbar from "../../ui/navbar";
import Image from "next/image";
import BackgroundImage from "../../../assets/images/background.png";

export const Layout: FC<LayoutProps> = ({ children }) => (
  <LayoutStyled>
    <Navbar />
    {children}
    <Image src={BackgroundImage} alt="bgImage" />
  </LayoutStyled>
);
