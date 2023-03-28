import Image from 'next/image';
import styled from 'styled-components';

export const AuthForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  width: 100%;
`;

export const WrapperInputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #121829;
`;

export const Input = styled.input.attrs((props) => ({
  type: 'text',
  size: props.size || '1em',
}))`
  height: 65px;
  border: 1px solid #323b54;
  background-color: #121829;
  border-radius: 12px;
  margin: 8px 0;
  width: 100%;
  text-decoration-color: white;
  padding: 0 60px;
  color: white;
`;

export const PasswordInput = styled(Input).attrs({
  type: 'password',
})`
  height: 65px;
  border: 1px solid #323b54;
  background-color: #121829;
  border-radius: 12px;
  margin: 8px 0;
  width: 100%;
  text-decoration-color: white;
  padding: 0 60px;
  color: white;
`;

export const WrapperEyeIcon = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;
export const InputIconAuth = styled(Image)`
  position: absolute;
  width: 24px;
  height: 24px;
  margin: 0 20px;
`;
