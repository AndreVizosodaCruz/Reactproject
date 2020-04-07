import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Slider from "react-slick";
import { Parallax } from 'react-scroll-parallax';

import { attributes, react as NewsContent } from '../../../public/static/content/sections/news.md';

import {
  Section,
  Container,
  Wrapper,
  H5,
  Text12,
  Text10,
  ButtonSlug,
} from '../../atoms';

import {
  Intro
} from '../../molecules';

const importBlogPosts = async () => {
  const markdownFiles = require
    .context('../../../public/static/content/posts', false, /\.md$/)
    .keys()
    .map(relativePath => relativePath.substring(2));
  return Promise.all(
    markdownFiles.slice(0, 5).map(async path => {
      const markdown = await import(`../../../public/static/content/posts/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
};

export default function News() {
  const {
    sectionName,
    smallTitle,
    title,
    buttonText
  } = attributes;

  const [news, setNews] = useState([]);

  const getData = async () => {
    const data = await importBlogPosts();
    setNews(data);
  }

  useEffect(() => {
    getData();
  }, []);

  let settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    variableWidth: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <Section className={sectionName} backgroundColor='#F9F9F9' >
      <Ball left>
        <Parallax y={[-50, 50]}>
          <img src='/static/icons/ball.svg' />
        </Parallax>
      </Ball>
      <Wrapper both>
        <Container md>
          <DivContainer>
            <DivIntro>
              <Intro
                smallTitle={smallTitle}
                title={title}
                titleSize='H3'
                titleMaxWidth='372px'
              />
            </DivIntro>
            <DivSlider>
              <Slider {...settings}>
                {news.map((data, index) => (
                  <Item key={String(index)}>
                    <SmallTitle>
                      <Text10
                        color='#fff'
                        dangerouslySetInnerHTML={{ __html: data.attributes.categoryNews }}
                      />
                    </SmallTitle>
                    <Title
                      maxWidth='274px'
                      font='Montserrat-Medium'
                      dangerouslySetInnerHTML={{ __html: data.attributes.titleBanner }}
                    />
                    <Date
                      color='#E3000F'
                      dangerouslySetInnerHTML={{ __html: data.attributes.date }}
                    />
                    <Excerpt
                      color='#6F6F6E'
                      font='Montserrat-Medium'
                      maxWidth='274px'
                      dangerouslySetInnerHTML={{ __html: data.attributes.excerpt }}
                    />
                    <DivButton>
                      <ButtonSlug
                        text={buttonText}
                        slug={'news/' + data.slug}
                      />
                    </DivButton>
                  </Item>
                ))}
              </Slider>
            </DivSlider>
          </DivContainer>
        </Container>
      </Wrapper>
    </Section>
  )
}

const Ball = styled.div`
  position:absolute;
  z-index:1;
  ${({ left }) => left && css`
    bottom:5%;
    left:20%;
    transform:translateX(-20%);
  `}
  @media screen and (max-width:767px){
    display:none;
  }
`;
const DivContainer = styled.div`
  display:flex;
  flex-flow:row;
  justify-content:space-between;
  @media screen and (max-width:1200px){
    flex-flow:column;
  }
`;
const DivIntro = styled.div`
  width:372px;
  min-width:372px;
  @media screen and (max-width:1200px){
    margin-bottom:64px;
    max-width:312px;
    min-width:unset;
  }
`;
const DivSlider = styled.div`
  width:50%;
  box-sizing:border-box;
  .slick-slider{
    display:flex;
    flex-flow:column;
  }
  .slick-list{
    overflow:hidden;
  }
  @media screen and (max-width:1200px){
    width:100%;
  }
`;
const Item = styled.div`
  display:flex;
  flex-flow:column;
  margin-right:24px;
  width:274px !important;
  box-sizing: border-box;
`;
const SmallTitle = styled.div`
  padding: 0 8px;
  background: #D9DADA;
  border-radius: 2px;
  box-sizing:border-box;
  display:inline-block;
`;
const Title = styled(H5)`
  margin-top:16px;
  min-height:96px;
  max-height:96px;
`
const Date = styled(Text10)`
  margin-top:16px;
  min-height:16px;
  max-height:16px;
`;
const Excerpt = styled(Text12)`
  margin-top:16px;
  min-height:50px;
  max-height:50px;
`;
const DivButton = styled.div`
  margin-top:24px;
`;

//BUTTON
const Text = styled.div`
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
  transition: all 0.5s ease;
`;
const Icon = styled.img`
  height:8px;
  object-fit:contain;
  transition: all 0.5s ease;
`;
const Button = styled.div`
  position: relative;
  background: #E3000F;
  border-radius: 6px;
  width:176px;
  height:48px;
  padding:14px 24px;
  box-sizing:border-box;
  display:flex;
  align-items:center;
  justify-content:space-between;
  transition: all 0.5s ease;
  :hover{
    background: #C5000D;
    cursor:pointer;
    ${Icon}{
      transform: translateX(5px);
    }
  }
`;