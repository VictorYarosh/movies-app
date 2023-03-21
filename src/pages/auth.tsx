import AuthPage from '../componets/complex/auth-page';
import { Layout } from '../componets/containers/layout';
import { Wrapper } from './styled';

const Auth = () => {
  return (
    <Layout>
      <Wrapper>
        <AuthPage />
      </Wrapper>
    </Layout>
  );
};

export default Auth;
