import { FC } from 'react';

import IconEye from '../../../assets/images/icons/eye.png';
import IconKey from '../../../assets/images/icons/key-square.png';
import IconLater from '../../../assets/images/icons/sms.png';
import {
  AuthForm,
  Input,
  InputIconAuth,
  PasswordInput,
  WrapperEyeIcon,
  WrapperInputContainer,
} from './auth-input.styled';
import { AuthInputProps } from './types';

const AuthInput: FC<AuthInputProps> = ({ id, onChange, value, type }) => {
  return (
    <AuthForm>
      <WrapperInputContainer>
        <InputIconAuth src={IconLater} alt="" />
        <Input size="2em" id={id} type={type} onChange={onChange} />
        <label htmlFor="email">Email</label>
      </WrapperInputContainer>
      {/*<WrapperInputContainer>*/}
      {/*  <InputIconAuth src={IconKey} alt="" />*/}
      {/*  <PasswordInput placeholder="Password" size="2em" id={id} />*/}
      {/*  <WrapperEyeIcon>*/}
      {/*    <InputIconAuth src={IconEye} alt="" />*/}
      {/*  </WrapperEyeIcon>*/}
      {/*</WrapperInputContainer>*/}
    </AuthForm>
  );
};
export default AuthInput;
