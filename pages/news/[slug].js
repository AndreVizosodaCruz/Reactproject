import React from 'react';
import dynamic from 'next/dynamic';

const Layout = dynamic(() => import('../../components/layout'))
const NewsPageDetail = dynamic(() => import('../../components/organisms/newsPageDetail'));

function News() {

  return (
    <Layout>
      <NewsPageDetail/>
    </Layout>
  )
}

export default News;