import Image from 'next/image';

import AuthImage from '../../../assets/images/auth-photo.png';
import { Layout } from '../../containers/layout';
import { LoginBlock, LoginTitle, WrapperAuth } from './auth.styled';

const Auth = () => {
  return (
    <Layout>
      <WrapperAuth>
        <Image alt="" src={AuthImage} />
        <LoginBlock>
          <LoginTitle>Login</LoginTitle>
          <input />
          <input />
          <button>Login</button>
        </LoginBlock>
      </WrapperAuth>
    </Layout>
  );
};
export default Auth;
