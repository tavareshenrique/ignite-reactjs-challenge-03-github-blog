import { Helmet } from 'react-helmet';

import { Posts, ProfileBar } from '../../components';

export function Home() {
  return (
    <>
      <Helmet>
        <title>Github Blog | Home</title>
      </Helmet>

      <ProfileBar />

      <Posts />
    </>
  );
}
