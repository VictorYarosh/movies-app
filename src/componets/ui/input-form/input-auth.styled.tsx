import Image from 'next/image';
import styled from 'styled-components';

export const InputBlock = styled.div`
  width: 100%;
`;
export const WrapperInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const LabelInput = styled.label`
  position: absolute;
`;
export const InputIconAuth = styled(Image)`
  position: absolute;
  width: 24px;
  height: 24px;
  margin: 28px 0 0 20px;
`;
export const Input = styled.input.attrs((props) => ({
  type: 'text',
  size: props.size || '1em',
}))`
  height: 60px;
  border: 1px solid #323b54;
  background-color: #121829;
  border-radius: 12px;
  width: 100%;
  color: white;

  margin: 10px 0;
  padding: 0 60px;
`;
export const InputPassword = styled(Input).attrs({
  type: 'password',
})``;

export const ButtonAuth = styled.button`
  background-color: #7b6ef6;
  width: 100%;
  height: 65px;
  border-radius: 12px;
  color: white;
  margin: 40px 0;

  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;
