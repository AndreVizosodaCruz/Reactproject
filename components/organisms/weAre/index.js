import React from 'react';
import styled, { css } from 'styled-components';
import { Parallax } from 'react-scroll-parallax';

import { attributes, react as WeAreContent } from '../../../public/static/content/sections/weAre.md';

import {
  Section,
  Container,
  Wrapper,
  H1,
  H2,
  Text12,
} from '../../atoms';

import {
  Intro
} from '../../molecules';

export default function WeAre() {

  const {
    sectionName,
    smallTitle,
    title,
    textRed,
    textAdviser
  } = attributes;

  return (
    <Section className={sectionName} noFade>
      <Ball left>
        <Parallax y={[-80, 80]}>
          <img src='/static/icons/ball.svg' />
        </Parallax>
      </Ball>
      <Ball right>
        <Parallax y={[-80, 80]}>
          <img src='/static/icons/ball_blur.svg' />
        </Parallax>
      </Ball>
      <Wrapper both>
        <DivParallax>
          <Parallax x={[-20, 20]}>
            <DivImgLeft>
              <ImgText src={textRed} />
            </DivImgLeft>
          </Parallax>
          <Parallax x={[5, -20]}>
            <DivImgRight>
              <ImgText src={textAdviser} />
            </DivImgRight>
          </Parallax>
        </DivParallax>
        <DivText>
          <Container sm>
            <DivIntro>
              <Intro
                smallTitle={smallTitle}
                title={title}
                titleSize='H4'
                titleWithCols={true}
                titleFontFamily='Montserrat-Regular'
              />
            </DivIntro>
          </Container>
        </DivText>
      </Wrapper>
    </Section>
  )
}

const Ball = styled.div`
  position:absolute;
  z-index:1;
  ${({ left }) => left && css`
    bottom:0;
    left:20%;
    transform:translateX(-20%);
  `}
  ${({ right }) => right && css`
    top:50%;
    right:20%;
    transform:translateY(-50%);
  `}
  @media screen and (max-width:767px){
    display:none;
  }
`;
const DivParallax = styled.div`
  position:relative;
  /* @media screen and (max-width: 768px){
    position:absolute;
    top: calc(70px + (130 - 70) * ((100vw - 375px) / (1920 - 375)));
    right:0;
    bottom: calc(70px + (130 - 70) * ((100vw - 375px) / (1920 - 375)));
    left:0;
    display:flex;
    flex-flow:column;
    justify-content:space-evenly;
  } */
`;
const DivImgLeft = styled.div`
  display:flex;
`;
const DivImgRight = styled.div`
  display:flex;
  justify-content:flex-end;
  margin-top:50px;
  @media screen and (max-width: 578px){
    margin-top:0;
  }
`;
const ImgText = styled.img`
  height:230px;
  max-width:100%;
  @media screen and (max-width: 1200px){
    height:140px;
  }
  @media screen and (max-width: 578px){
    height:80px;
  }
`;
const DivText = styled.div`
  position:absolute;
  top: calc(70px + (130 - 70) * ((100vw - 375px) / (1920 - 375)));
  right:0;
  bottom: calc(70px + (130 - 70) * ((100vw - 375px) / (1920 - 375)));
  left:0;
  display:flex;
  justify-content:center;

  /* @media screen and (max-width: 768px){
    position:relative;
    top: unset;
    right: unset;
    bottom: unset;
    left: unset;
  } */
`;
const DivIntro = styled.div`
  display:flex;
  align-items:center;
  height:100%;
`;