import Image from 'next/image';

import AuthImage from '../../../assets/images/auth-photo.png';
import InputAuth from '../../ui/input';
import { LoginBlock, LoginTitle, WrapperAuth } from './auth-page.styled';

const AuthPage = () => {
  return (
    <WrapperAuth>
      <Image alt="" src={AuthImage} />
      <LoginBlock>
        <LoginTitle>Login</LoginTitle>

        <InputAuth id="id" label="label" onChange="onChange" value="value" />
      </LoginBlock>
    </WrapperAuth>
  );
};

export default AuthPage;
