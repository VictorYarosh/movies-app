import Image from 'next/image';

import AuthImage from '../../../assets/images/auth-photo.png';
import IconKey from '../../../assets/images/icons/key-square.png';
import IconLater from '../../../assets/images/icons/sms.png';
import {
  ButtonAuth,
  InputContainer,
  InputIconAuth,
  LoginBlock,
  LoginTitle,
  WrapperAuth,
  WrapperInputContainer,
} from './auth-page.styled';

const AuthPage = () => {
  return (
    <WrapperAuth>
      <Image alt="" src={AuthImage} />
      <LoginBlock>
        <LoginTitle>Login</LoginTitle>

        <WrapperInputContainer>
          <InputIconAuth src={IconLater} alt="" />
          <InputContainer placeholder="Email" />
        </WrapperInputContainer>
        <WrapperInputContainer>
          <InputIconAuth src={IconKey} alt="" />
          <InputContainer placeholder="Password" />
        </WrapperInputContainer>

        <ButtonAuth>Login</ButtonAuth>
      </LoginBlock>
    </WrapperAuth>
  );
};

export default AuthPage;
