import React from 'react';
import styled, { css } from 'styled-components';
import Slider from "react-slick";
import { Parallax } from 'react-scroll-parallax';

import { attributes, react as WeAreContent } from '../../../public/static/content/sections/services.md';

import {
  Section,
  Container,
  Wrapper,
  H6,
  Text10,
} from '../../atoms';

import {
  Intro
} from '../../molecules';

export default function Services() {

  const {
    sectionName,
    smallTitle,
    title,
    description,
    dataServices
  } = attributes;

  let settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    variableWidth: true,
    swipeToSlide: true,
  };

  return (
    <Section className={sectionName} onTop >
      <Ball right>
        <Parallax y={[-90, 90]}>
          <img src='/static/icons/ball.svg' />
        </Parallax>
      </Ball>
      <Wrapper top>
        <Container md>
          <DivIntro>
            <Intro
              smallTitle={smallTitle}
              title={title}
              titleSize='H3'
              titleMaxWidth='372px'
              description={description}
              descriptionColor='#6F6F6E'
              descriptionSize={12}
            />
          </DivIntro>
        </Container>
        <Container lg>
          <ContainerServices>
            {(dataServices && dataServices.length > 0) &&
              <Slider {...settings}>
                {dataServices.map((service, index) => (
                  <ItemService key={String(index)}>
                    <DivIcon>
                      <Icon src={service.icon} />
                    </DivIcon>
                    <Title
                      dangerouslySetInnerHTML={{ __html: service.title }}
                    />
                    <Margin />
                    <Description
                      dangerouslySetInnerHTML={{ __html: service.description }}
                    />
                  </ItemService>
                ))}
              </Slider>
            }
          </ContainerServices>
        </Container>
      </Wrapper>
    </Section>
  )
}

const Ball = styled.div`
  position:absolute;
  z-index:1;
  ${({ right }) => right && css`
    top:20%;
    right:20%;
    transform:translateY(-20%);
  `}
  @media screen and (max-width:767px){
    display:none;
  }
`;
const DivIntro = styled.div`
  margin-top:60px;
  @media screen and (max-width:1200px){
    margin-top:0;
  }
`;
const ContainerServices = styled.div`
  margin-top:65px;
  margin-bottom:-72px;
  z-index: 1;
  position: relative;
  .slick-track{
    display:flex;
  }
`;
const ItemService = styled.div`
  display:flex;
  flex-flow:column;
  background: #FFFFFF;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  height:368px;
  width:270px !important;
  padding:23px 30px;
  box-sizing:border-box;
  margin-right:20px;
`;
const DivIcon = styled.div`
  height:208px;
  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
`;
const Icon = styled.img`
`;
const Title = styled(H6)`
  height:48px;
  overflow:hidden;
`;
const Description = styled(Text10)`
  height:48px;
  overflow:hidden;
`;
const Margin = styled.div`
  margin-bottom:8px;
`;