import MoviesPage from '../componets/complex/movies-page';
import { Layout } from '../componets/containers/layout';

const Home = () => {
  return (
    <Layout>
      {/*<AuthPage />*/}
      <MoviesPage />
    </Layout>
  );
};

export default Home;
