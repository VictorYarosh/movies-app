import React from "react";
import Image from "next/image";

import { LogoContainer } from "./logo.styled";
import LogoSrc from "../../../assets/images/logo.svg";

const Logo = () => {
  return (
    <LogoContainer>
      <Image src={LogoSrc} alt="logo" />
    </LogoContainer>
  );
};

export default Logo;
