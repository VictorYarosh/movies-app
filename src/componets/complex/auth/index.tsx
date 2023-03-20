import Image from 'next/image';
import { FC } from 'react';

import AuthImage from '../../../assets/images/auth-photo.png';
import { InputContainer, LoginBlock, LoginTitle, WrapperAuth } from './auth.styled';
import { AuthProps } from './types';

const Auth: FC<AuthProps> = () => {
  return (
    <WrapperAuth>
      <Image alt="" src={AuthImage} />
      <LoginBlock>
        <LoginTitle>Login</LoginTitle>
        <InputContainer id="email" />
        <InputContainer />
        <button>Login</button>
      </LoginBlock>
    </WrapperAuth>
  );
};
export default Auth;
