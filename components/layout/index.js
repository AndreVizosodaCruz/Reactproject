import React, {useEffect, useState} from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import { ParallaxProvider } from 'react-scroll-parallax';

import { ModalCookies } from '../molecules';
const ModalMenu = dynamic(() => import('../molecules/modals/modalMenu'));
const Footer = dynamic(() => import('../organisms/footer'));
const Loading = dynamic(() => import('../molecules/loading'));

import { attributes, react as GeneralContent } from '../../public/static/content/generalContent/general.md';

export default function Layout(props) {

  const {
    children
  } = props;

  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [])
  
  return (
    <Wrapper>
      <Main>
        <Loading isLoading={isLoading}/>
        <ModalCookies {...attributes}/>
        <ModalMenu {...attributes}/>
        <ParallaxProvider>
          {children}
        </ParallaxProvider>
        <Footer {...attributes}/>
      </Main>
    </Wrapper>
  )
}

const Wrapper = styled.div``;
const Main = styled.main`
  overflow-x: hidden;
`;
