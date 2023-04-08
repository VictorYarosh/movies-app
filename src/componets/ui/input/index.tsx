import { FC } from 'react';

import IconKey from '../../../assets/images/icons/key-square.png';
import IconLater from '../../../assets/images/icons/sms.png';
import { ButtonAuth, Input, InputIconAuth, InputPassword, WrapperInputContainer } from './input-auth.styled';
import { useInputAuthProps } from './types';

const InputAuth: FC<useInputAuthProps> = () => {
  return (
    <>
      <WrapperInputContainer>
        <InputIconAuth src={IconLater} alt="" />
        <Input id="email" placeholder="Email" />
      </WrapperInputContainer>
      <WrapperInputContainer>
        <InputIconAuth src={IconKey} alt="" />
        <InputPassword id="password" placeholder="Password" />
      </WrapperInputContainer>

      <ButtonAuth>Login</ButtonAuth>
    </>
  );
};

export default InputAuth;
