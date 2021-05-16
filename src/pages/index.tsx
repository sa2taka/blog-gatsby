import * as React from 'react';
import { Link } from 'gatsby';

import { Layout } from '../components/layout/layout';
import { Seo } from '../components/layout/seo';
import { Posts } from '../components/posts';

const IndexPage = () => (
  <Layout>
    <Seo title="ホーム" />
    <Posts />
  </Layout>
);

export default IndexPage;
