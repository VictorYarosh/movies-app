import styled from 'styled-components';

export const WrapperAuth = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 50px 0;
`;

export const LoginBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  width: 50%;
`;

export const LoginTitle = styled.h1`
  font-weight: 600;
  font-size: 64px;
  line-height: 80px;
  letter-spacing: -0.02em;
  color: #c3c8d4;
`;

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
