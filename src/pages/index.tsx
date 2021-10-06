import React from 'react';
import { jsx } from '@emotion/react';
import tw from 'twin.macro';

import Layout from 'components/Layout';

const Home = (): JSX.Element => (
  <Layout>
    <h1 tw="text-6xl font-bold text-center">Events</h1>
  </Layout>
);

export default Home;
