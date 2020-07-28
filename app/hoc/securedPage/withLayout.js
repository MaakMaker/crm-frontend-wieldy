import React from 'react';
import Layout from '../../core/Layout';

export default ComposedComponent => props => (
  <Layout>
    <ComposedComponent {...props} />
  </Layout>
);
