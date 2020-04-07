import React from 'react';
import dynamic from 'next/dynamic';

const Layout = dynamic(() => import('../../components/layout'))
const WorkPageDetail = dynamic(() => import('../../components/organisms/workPageDetail'));

function Works() {

  return (
    <Layout>
      <WorkPageDetail/>
    </Layout>
  )
}

export default Works;