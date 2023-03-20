import AllPageMovies from '../componets/complex/movies-page';
// import Auth from '../componets/complex/auth';
import { Layout } from '../componets/containers/layout';

const MoviesList = () => {
  return (
    <Layout>
      {/*<Auth />*/}
      <AllPageMovies />
    </Layout>
  );
};

export default MoviesList;
