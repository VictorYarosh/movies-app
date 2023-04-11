import Image from 'next/image';

import AuthImage from '../../../assets/images/auth-photo.png';
import InputForm from '../../ui/input-form';
import { LoginBlock, LoginTitle, WrapperAuth } from './auth-page.styled';

const AuthPage = () => {
  return (
    <WrapperAuth>
      <Image alt="" src={AuthImage} />
      <LoginBlock>
        <LoginTitle>Login</LoginTitle>
        <InputForm />
      </LoginBlock>
    </WrapperAuth>
  );
};

export default AuthPage;
