import React from 'react';
import styled, { css } from 'styled-components';
import Slider from "react-slick";
import Rating from 'react-rating';

import { attributes, react as TestimonialsContent } from '../../../public/static/content/sections/testimonials.md';


import {
  Section,
  Container,
  Wrapper,
  H6,
  Text12,
} from '../../atoms';

import {
  Intro
} from '../../molecules';

export default function Testimonials() {

  const {
    enabledSection,
    sectionName,
    smallTitle,
    title,
    dataTestimonials
  } = attributes;

  let settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    variableWidth: true,
    swipeToSlide: false
  };

  return (
    <>
      {enabledSection &&
        <Section className={sectionName} backgroundColor='#202020' >
          <Wrapper both>
            <Container sm>
              <Intro
                centerContainer
                smallTitle={smallTitle}
                smallTitleAlign='center'
                title={title}
                titleColor='#fff'
                titleTextAlign='center'
                titleSize='H3'
                titleMaxWidth='566px'
              />
              <DivSlider>
                <Slider {...settings}>
                  {dataTestimonials.map((testimonials, index) => (
                    <Item key={String(index)}>
                      <Rating
                        initialRating={testimonials.rating}
                        emptySymbol={<img src="/static/icons/icon_star.svg" className="icon" />}
                        fullSymbol={<img src="/static/icons/icon_starfull.svg" className="icon" />}
                        readonly
                      />
                      <Description
                        color='#6F6F6E'
                        height='true'
                        dangerouslySetInnerHTML={{ __html: testimonials.description }}
                      />
                      <DivPerson>
                        <IconPerson>
                          <img src={testimonials.picture} />
                        </IconPerson>
                        <DivNameTitle>
                          <H6
                            color='#000'
                            dangerouslySetInnerHTML={{ __html: testimonials.name }}
                          />
                          <Text12
                            color='#6F6F6F'
                            font='Montserrat-Medium'
                            dangerouslySetInnerHTML={{ __html: testimonials.role }}
                          />
                        </DivNameTitle>
                      </DivPerson>
                    </Item>
                  ))}
                </Slider>
              </DivSlider>
            </Container>
          </Wrapper>
        </Section>
      }
    </>
  )
}

const DivSlider = styled.div`
  margin-top:72px;
  .slick-track{
    display:flex;
  }
  .slick-list{    
    overflow: hidden;
    padding-bottom: 20px;
  }
  .slick-dots{
    text-align:center;
  }
`;
const Item = styled.div`
  position:relative;
  width:470px !important;
  height:272px;
  background: #FFFFFF;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  margin-right:20px;
  box-sizing:border-box;
  padding:40px 30px 30px 30px;
  display:flex;
  flex-flow:column;
  ::after{
    content:'';
    position:absolute;
    bottom:-20px;
    left:20px;
    width:0;
    height:0;
    border-color:#ffffff transparent transparent #ffffff;
    border-width:10px;
    border-style:solid;
  }
  @media screen and (max-width:1024px){
    width:311px !important;
    height:336px;
  }
`;
const Description = styled(Text12)`
  margin-top:18px;
`;
const DivPerson = styled.div`
  margin-top:47px;
  display:flex;
  flex-flow:row;
  @media screen and (max-width:1024px){
    margin-top:64px;
  }
`;
const IconPerson = styled.div`
  margin-right:16px;
  width: 48px;
  height: 48px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  img {
    display: inline;
    margin: 0 auto;
  }
`;
const DivNameTitle = styled.div`
  display:flex;
  flex-flow:column;
  justify-content:space-between;
`;