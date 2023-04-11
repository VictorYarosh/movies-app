import { Form } from 'react-uforms';

import IconKey from '../../../assets/images/icons/key-square.png';
import IconLater from '../../../assets/images/icons/sms.png';
import {
  ButtonAuth,
  Input,
  InputBlock,
  InputIconAuth,
  InputPassword,
  WrapperInputContainer,
} from './input-auth.styled';
import useInputForm from './use-input-form';

const InputForm = () => {
  const { handleFormSubmit, handleEmailChange, handlePasswordChange, password, email } = useInputForm();
  return (
    <InputBlock>
      <Form onSubmit={handleFormSubmit}>
        <WrapperInputContainer>
          <InputIconAuth src={IconLater} alt="" />
          <Input id="email" value={email} onChange={handleEmailChange} required placeholder="Email" />
        </WrapperInputContainer>
        <WrapperInputContainer>
          <InputIconAuth src={IconKey} alt="" />
          <InputPassword
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
            placeholder="Password"
          />
        </WrapperInputContainer>

        <ButtonAuth type="submit">Login</ButtonAuth>
      </Form>
    </InputBlock>
  );
};

export default InputForm;
