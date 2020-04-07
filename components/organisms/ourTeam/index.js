import React from 'react';
import styled, { css } from 'styled-components';
import Slider from "react-slick";
import { Parallax } from 'react-scroll-parallax';

import { attributes, react as WeAreContent } from '../../../public/static/content/sections/ourTeam.md';

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

export default function OurTeam() {

  const {
    sectionName,
    smallTitle,
    title,
    description,
    dataPeople
  } = attributes;

  let settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    variableWidth: true,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  return (
    <Section className={sectionName} >
      <Ball left>
        <Parallax y={[-50, 50]}>
          <img src='/static/icons/ball.svg' />
        </Parallax>
      </Ball>
      <Wrapper both>
        <Container md>
          <DivIntro>
            <Intro
              centerContainer
              smallTitle={smallTitle}
              smallTitleAlign='center'
              title={title}
              titleTextAlign='center'
              titleSize='H3'
              titleMaxWidth='470px'
              description={description}
              descriptionColor='#6F6F6E'
              descriptionTextAlign='center'
              descriptionSize={12}
            />
          </DivIntro>
        </Container>
        <Container lg>
          <ContainerPeople>
            {(dataPeople && dataPeople.length > 0) &&
              <Slider {...settings}>
                {dataPeople.map((people, index) => (
                  <ItemPeople key={String(index)}>
                    <DivIcon>
                      <Icon src={people.avatar} />
                    </DivIcon>
                    <Title
                      align='center'
                      dangerouslySetInnerHTML={{ __html: people.name }}
                    />
                    <Description
                      align='center'
                      color='#6F6F6E'
                      dangerouslySetInnerHTML={{ __html: people.role }}
                    />
                    <Margin />
                    {(people.linkLinkedin || people.email) &&
                      <DivSocial>
                        {people.linkLinkedin &&
                          <IconSocial href={people.linkLinkedin} target='_blank'>
                            <img src='/static/icons/icon_linkedin.svg' />
                          </IconSocial>
                        }
                        {people.email &&
                          <IconSocial href={"mailto:" + people.email} target='_blank'>
                            <img src='/static/icons/icon_email.svg' />
                          </IconSocial>
                        }
                      </DivSocial>
                    }
                  </ItemPeople>
                ))}
              </Slider>
            }
          </ContainerPeople>
        </Container>
      </Wrapper>
    </Section>
  )
}

const Ball = styled.div`
  position:absolute;
  z-index:1;
  ${({ left }) => left && css`
    top:0;
    left:20%;
    transform:translateX(-20%);
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
const ContainerPeople = styled.div`
  margin-top:65px;
  width:100%;
  box-sizing:border-box;
  .slick-track{
    display:flex;
  }
`;
const ItemPeople = styled.div`
  display:flex !important;
  flex-flow:column;
  background: #FFFFFF;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  height:320px;
  width:270px !important;
  padding:23px 30px;
  box-sizing:border-box;
  margin-right:20px;
`;
const DivIcon = styled.div`
  height:200px;
  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
`;
const Icon = styled.img`
`;
const Title = styled(H6)`
  height:24px;
  overflow:hidden;
`;
const Description = styled(Text10)`
  overflow:hidden;
`;
const Margin = styled.div`
  margin-bottom:12px;
`;
const DivSocial = styled.div`
  display:flex;
  flex-flow:row;
  justify-content:center;
  align-items:center;
`;
const IconSocial = styled.a`
  width:12px;
  height:24px;
  margin-right:16px;
  display:flex;
  justify-content:center;
  align-items:center;
  img{
    object-fit: contain;
  }
  :last-of-type{
    margin-right:0;
  }
`;