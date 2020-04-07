import React from 'react';
import dynamic from 'next/dynamic';

const Layout = dynamic(() => import('../components/layout'))
const Home = dynamic(() => import('../components/templates/home'));

function Index() {
  return (
    <Layout>
      <Home />
    </Layout>
  )
}
export default Index;