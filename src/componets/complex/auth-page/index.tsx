import Image from 'next/image';
import { SetStateAction, useState } from 'react';

import AuthImage from '../../../assets/images/auth-photo.png';
import AuthInput from '../../ui/auth-input';
import { ButtonAuth, LoginBlock, LoginTitle, WrapperAuth } from './auth-page.styled';

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <WrapperAuth>
      <Image alt="" src={AuthImage} />
      <LoginBlock>
        <LoginTitle>Login</LoginTitle>

        <AuthInput
          label="Email"
          id="id"
          onChange={(ev: { target: { value: SetStateAction<string> } }) => setEmail(ev.target.value)}
          value={email}
          type="Email"
        />
        <AuthInput
          label="Password"
          id="password"
          onChange={(ev: { target: { value: SetStateAction<string> } }) => setPassword(ev.target.value)}
          value={password}
          type="password"
        />

        <ButtonAuth>Login</ButtonAuth>
      </LoginBlock>
    </WrapperAuth>
  );
};

export default AuthPage;
