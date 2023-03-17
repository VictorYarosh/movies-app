import Image from 'next/image';
import React from 'react';

import LogoSrc from '../../../assets/images/logo.svg';
import { LogoContainer } from './logo.styled';

const Logo = () => {
  return (
    <LogoContainer>
      <Image src={LogoSrc} alt="logo" />
    </LogoContainer>
  );
};

export default Logo;
