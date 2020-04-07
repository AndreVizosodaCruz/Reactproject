import React from 'react';
import dynamic from 'next/dynamic';

const Layout = dynamic(() => import('../components/layout'))
const LegalInformation = dynamic(() => import('../components/organisms/legalInformation'));

function Legal() {

  return (
    <Layout>
      <LegalInformation/>
    </Layout>
  )
}

export default Legal;