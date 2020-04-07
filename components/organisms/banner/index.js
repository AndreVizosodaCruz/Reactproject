import React from 'react';
import styled, { css } from 'styled-components';
import { Parallax } from 'react-scroll-parallax';

import { attributes, react as BannerContent } from '../../../public/static/content/sections/banner.md';

import {
  Section,
  Container,
  H1,
  H2,
  H5,
  Text12,
  ButtonLink
} from '../../atoms';

export default function Banner() {

  const {
    sectionName,
    title,
    secTitle,
    textScroll,
    linkDribbble,
    linkInstagram,
    linkFacebook,
    linkLinkedin,
    box
  } = attributes;

  return (
    <Section className={sectionName} backgroundColor='#f9f9f9' >
      <Ball center>
        <Parallax y={[-150, 150]}>
          <img src='/static/icons/ball.svg' />
        </Parallax>
      </Ball>
      <Ball left>
        <Parallax y={[-100, 100]}>
          <img src='/static/icons/ball.svg' />
        </Parallax>
      </Ball>
      <Ball right>
        <Parallax y={[-100, 100]}>
          <img src='/static/icons/ball_blur.svg' />
        </Parallax>
      </Ball>
      <Container md >
        <Wrapper>
          <Titles>
            <H1
              maxWidth='956px'
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <H2
              maxWidth='956px'
              font='Montserrat-Medium'
              dangerouslySetInnerHTML={{ __html: secTitle }}
            />
          </Titles>
        </Wrapper>
      </Container>
      <DivFloatText>
        <TextFloat
          color='#6F6F6E'
        >
          {textScroll}
        </TextFloat>
        <IconArrow src='/static/icons/icon_seta.svg' />
      </DivFloatText>
      <DivSocial>
        {linkDribbble &&
          <ButtonSocial href={linkDribbble} target='_blank'>
            <IconSocial src='/static/icons/icon_dribbble.svg' />
          </ButtonSocial>
        }
        {linkInstagram &&
          <ButtonSocial href={linkInstagram} target='_blank'>
            <IconSocial src='/static/icons/icon_instagram.svg' />
          </ButtonSocial>
        }
        {linkFacebook &&
          <ButtonSocial href={linkFacebook} target='_blank'>
            <IconSocial src='/static/icons/icon_facebook.svg' />
          </ButtonSocial>
        }
        {linkLinkedin &&
          <ButtonSocial href={linkLinkedin} target='_blank'>
            <IconSocial src='/static/icons/icon_linkedin.svg' />
          </ButtonSocial>
        }
      </DivSocial>
      <DivFloatBox className='desktop'>
        <Parallax y={[60, -30]}>
          <DivBox>
            <H5
              dangerouslySetInnerHTML={{ __html: box.title }}
            />
            <Margin text>
              <Text12
                dangerouslySetInnerHTML={{ __html: box.description }}
              />
            </Margin>
            <Margin button>
              <ButtonLink
                text={box.buttonText}
                href={box.buttonLink}
              />
            </Margin>
          </DivBox>
        </Parallax>
      </DivFloatBox>
      <DivFloatBox className='mobile'>
        <Parallax y={[30, -30]}>
          <DivBox>
            <H5
              dangerouslySetInnerHTML={{ __html: box.title }}
            />
            <Margin text>
              <Text12
                dangerouslySetInnerHTML={{ __html: box.description }}
              />
            </Margin>
            <Margin button>
              <ButtonLink
                text={box.buttonText}
                href={box.buttonLink}
              />
            </Margin>
          </DivBox>
        </Parallax>
      </DivFloatBox>
    </Section>
  )
}

const Ball = styled.div`
  position:absolute;
  z-index:1;
  ${({ center }) => center && css`
    top:10%;
    left:50%;
    transform:translateX(-50%);
  `}
  ${({ left }) => left && css`
    bottom:0;
    left:20%;
    transform:translateX(-20%);
  `}
  ${({ right }) => right && css`
    top:40%;
    right:20%;
    transform:translateX(20%);
  `}
`;
const Wrapper = styled.div`
  height:100vh;
  display:flex;
  flex-flow:column;
  justify-content:center;
  position:relative;

  @media screen and (max-width: 768px) {
    padding-bottom:50px;
  }
`;
const Titles = styled.div`
  display:flex;
  flex-flow:column;
`;
const DivFloatText = styled.div`
  position:absolute;
  bottom:66px;
  left:calc(16px + (49 - 16) * ((100vw - 375px) / (1920 - 375)));
  display:flex;
  flex-flow:column;
`;
const TextFloat = styled(Text12)`
  transform:rotate(270deg);
  box-sizing:border-box;
  transform-origin: 0 0;
  line-height:31px;
`;
const IconArrow = styled.img`
  animation: jump 1s linear alternate infinite;
  max-width:31px;
  @keyframes jump {
    0% {
      transform: translateY(-15px);
    }
    50% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-15px);
    }
  }
`;
const DivSocial = styled.div`
  position:absolute;
  top:0;
  right:calc(13px + (26 - 13) * ((100vw - 375px) / (1920 - 375)));
  bottom:0;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  @media screen and (max-width: 768px) {
    display:none;
  }
`;
const ButtonSocial = styled.a`
  width: 48px;
  height: 48px;
  background: #FFFFFF;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  margin-bottom:8px;
  padding:17px;
  box-sizing:border-box;
  display:flex;
  align-items:center;
  justify-content:center;
  transition: all 0.7s ease;
  :last-of-type{
    margin-bottom:0;
  }
  :hover{
    cursor:pointer;
    background-color:#D9DADA;
  }
`;
const IconSocial = styled.img``;
const DivFloatBox = styled.div`
  z-index:2;
  right:calc(13px + (104 - 13) * ((100vw - 375px) / (1920 - 375)));
  /* margin-top: -328px; */
  bottom:0;
  position:absolute;
  justify-content:flex-end;
  /* position:relative; */
  @media screen and (min-width:768px){
    &.desktop{
      display:flex;
    }
    &.mobile{
      display:none;
    }
  }
  @media screen and (max-width:767px){
    &.desktop{
      display:none;
    }
    &.mobile{
      display:flex;
    }
  }
`;
const DivBox = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  padding:32px 30px;
  display:flex;
  flex-flow: column;
  box-sizing:border-box;
  max-height:328px;
  width:280px;
  @media screen and (max-width: 768px) {
    width:229px;
    max-height:288px;
  }
`;
const Margin = styled.div`
  ${({ text }) => text && css`
    margin-top:8px;
  `}
  ${({ button }) => button && css`
    margin-top:40px;
    @media screen and (max-width: 1200px) {
      margin-top:32px;
    }
  `}
`;