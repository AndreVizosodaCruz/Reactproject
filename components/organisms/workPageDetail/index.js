import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Slider from "react-slick";

import {
  Text10,
  H1,
  H4,
  H5,
  H6,
  Container,
  Wrapper
} from '../../atoms';

export default function WorkPageDetail() {

  const [data, setData] = useState({});

  const getData = async (id) => {
    const blogpost = await import(`../../../public/static/content/works/${id}.md`).catch(error => null);
    setData(blogpost.default.attributes);
    document.title = blogpost.default.attributes.titleBanner;
  }

  useEffect(() => {
    const path = window.location.pathname;
    const splited = path.split('/', 3);
    getData(splited[2]);
  }, []);

  const [slide, setSlide] = useState(0);

  let settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    variableWidth: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    afterChange: current => setSlide(current)
  };

  return (
    <Structure>
      <ButtonClose href='/#Workfolio'>
        <img src='/static/icons/icon_cross.svg' />
      </ButtonClose>
      <Banner background={data.imgBanner}>
        <Container lg>
          <H1
            dangerouslySetInnerHTML={{ __html: data.titleBanner }}
          />
          <H4
            font='Montserrat-Medium'
            dangerouslySetInnerHTML={{ __html: data.descriptionBanner }}
          />
        </Container>
      </Banner>
      {data.sections &&
        <Wrapper top>
          {data.sections.map((sections, i) => (
            <DataContent key={String(i)}>
              <Container md>
                {(sections.type == 'textBlock') &&
                  <>
                    {sections.type == 'titleBlock' &&
                      <Margin small />
                    }
                    {sections.type !== 'titleBlock' &&
                      <Margin />
                    }
                    <H6
                      withCols
                      color='#6F6F6E'
                      font='Montserrat-Medium'
                      dangerouslySetInnerHTML={{ __html: sections.textBlock }}
                    />
                  </>
                }
                {(sections.type == 'imgContent') &&
                  <Margin>
                    <ImageContent src={sections.imgContent} />
                  </Margin>
                }
                {(sections.type == 'firstTitle') &&
                  <Margin>
                    <H4
                      color='#6F6F6E'
                      font='Montserrat-Medium'
                      dangerouslySetInnerHTML={{ __html: sections.firstTitle }}
                    />
                  </Margin>
                }
                {sections.type == 'titleBlock' &&
                  <Margin>
                    <H5
                      dangerouslySetInnerHTML={{ __html: sections.titleBlock }}
                    />
                  </Margin>
                }
                {sections.type == 'dataSlider' &&
                  <Margin>
                    <ContentSlider>
                      <Slider {...settings}>
                        {sections.data.map((slider, index) => (
                          <img key={String(index)} src={slider.image} />
                        ))}
                      </Slider>
                      {sections.data.map((text, index) => (
                        <DescriptionFloat className={index == slide ? 'show' : 'hide'}>
                          <Text10
                            color='#6F6F6E'
                            maxWidth='274px'
                            dangerouslySetInnerHTML={{ __html: text.description }}
                          />
                        </DescriptionFloat>
                      ))}
                    </ContentSlider>
                  </Margin>
                }
                {sections.type == 'textSecBlock' &&
                  <Margin>
                    <H6
                      color='#6F6F6E'
                      font='Montserrat-Medium'
                      dangerouslySetInnerHTML={{ __html: sections.textSecBlock }}
                    />
                  </Margin>
                }
                {sections.type == 'dataWorks' &&
                  <Margin>
                    <DivItemInfo size={sections.data.length}>
                      {sections.data.map((info, index) => (
                        <ItemInfo key={String(index)} >
                          <TitleItemInfo
                            color='#E3000F'
                            font='Montserrat-Bold'
                            dangerouslySetInnerHTML={{ __html: info.title }}
                          />
                          <Margin smaller />
                          <DivItemInfoOp>
                            {info.dataContent.map((contentInfo, index) => (
                              <>
                                {(contentInfo && contentInfo.link) &&
                                  <a key={String(index)} href={contentInfo.link} target='_blank'>
                                    <H6
                                      font='Montserrat-Medium'
                                      maxWidth='274px'
                                      dangerouslySetInnerHTML={{ __html: contentInfo.text }}
                                    />
                                  </a>
                                }
                                {(contentInfo && !contentInfo.link) &&
                                  <H6
                                    key={String(index)}
                                    font='Montserrat-Medium'
                                    maxWidth='274px'
                                    dangerouslySetInnerHTML={{ __html: contentInfo.text }}
                                  />
                                }
                              </>
                            ))}
                          </DivItemInfoOp>
                        </ItemInfo>
                      ))}
                    </DivItemInfo>
                  </Margin>
                }
              </Container>
              {(sections.type == 'imgFooter') &&
                <Margin>
                  <ImageFooter src={sections.imgFooter} />
                </Margin>
              }
            </DataContent>
          ))
          }
        </Wrapper>
      }
    </Structure>
  )
}

const Structure = styled.div`
  position: relative;
  min-height:100%;
  width:100%;
`;
const ButtonClose = styled.a`
  position:absolute;
  top:60px;
  right:60px;
  font-family: Montserrat-Bold;
  background: #E3000F;
  border-radius: 6px;
  padding:20px 20px;
  height:48px;
  width:48px;
  box-sizing: border-box;
  display:flex;
  align-items:center;
  justify-content:center;
  :hover{
    cursor:pointer;
  }
  @media screen and (max-width: 578px) {
    top:5px;
    right:5px;
  }
`;
const Margin = styled.div`
  margin-top:96px;
  ${({ small }) => small && css`
    margin-top:24px;
  `};
  ${({ smaller }) => smaller && css`
    margin-top:16px;
  `};
`;
const Banner = styled.div`
  height:70vh;
  display:flex;
  align-items:center;
  background: ${({ background }) => background ? 'url(' + background + ')' : '#D9DADA'};
  background-repeat: no-repeat;
  background-size:cover;
`;
const DataContent = styled.div`
  display:flex;
  flex-flow:column;
`;
const DivItemInfo = styled.div`
  display:flex;
  flex-flow:row;
  flex-wrap: wrap;
  > div{
    width: ${({ size }) => size ? 'calc(100% / ' + size + ')' : '100%'};
    @media screen and (max-width: 1024px) {
      width: ${({ size }) => size ? 'calc(100% / ' + (size / 2) + ')' : '100%'};
      margin-bottom:24px;
    }
    @media screen and (max-width: 600px) {
      width: 100%;
    }
  }
`;
const ItemInfo = styled.div`

`;
const TitleItemInfo = styled(Text10)`
  text-transform:uppercase;
`;
const DivItemInfoOp = styled.div`
  display:flex;
  flex-flow:column;
`;
const ImageContent = styled.img`
  max-height:600px;
  width: 100%;
  object-fit: cover;
`;
const ContentSlider = styled.div`
  width:100%;
  position:relative;
  div{
    max-height:600px;
  }
  .slick-list{
    overflow:hidden;
  }
  .slick-slider{
    display:flex;
    flex-flow:column;
  }
  .slick-dots{
    margin-top:20px;
  }
`;
const DescriptionFloat = styled.div`
  position:absolute;
  bottom:0;
  right:0;
  transition: 0.5s all ease;
  &.show{
    opacity:1;
  }
  &.hide{
    opacity:0;
  }
`;
const ImageFooter = styled.img`
  max-height:600px;
  width: 100%;
  object-fit: cover;
`;