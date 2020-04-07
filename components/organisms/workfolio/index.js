import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import { attributes, react as WeAreContent } from '../../../public/static/content/sections/workfolio.md';

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

const importWorks = async () => {
  const markdownFiles = require
    .context('../../../public/static/content/works', false, /\.md$/)
    .keys()
    .map(relativePath => relativePath.substring(2));
  return Promise.all(
    markdownFiles.map(async path => {
      const markdown = await import(`../../../public/static/content/works/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
};

export default function Workfolio() {

  const {
    sectionName,
    smallTitle,
    title,
    dataWorks,
    buttonTextMore
  } = attributes;

  const [limit, setLimit] = useState(4);

  const loadMore = () => {
    setLimit(limit + 4);
  }

  const [dataWork, setDataWork] = useState([]);

  const getData = async () => {
    const data = await importWorks();
    setDataWork(data);
  }

  useEffect(() => {
    getData();
  }, []);

  let workFolio = [];
  let viewMore = true;

  if (dataWork && dataWork.length > 0) {
    workFolio = dataWork.slice(0, limit);
    viewMore = dataWork.length > limit;
  }
  
  const [show, setShow] = useState(false);

  return (
    <Section className={sectionName} twoColors  >
      <Wrapper top>
        <Container lg>
          <DivIntro>
            <Intro
              centerContainer
              smallTitle={smallTitle}
              smallTitleAlign='center'
              title={title}
              titleTextAlign='center'
              titleSize='H3'
              titleMaxWidth='568px'
              titleColor='white'
            />
          </DivIntro>
          {(workFolio && workFolio.length > 0) &&
            <DivWork>
              {workFolio.map((work, index) => (
                <ItemWork key={String(index)}>
                  <DivImage onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} href={'works/' + work.slug}>
                    <ImageItem show={show} src={work.attributes.imgBanner} />
                    <OverlayImage show={show}>
                      <img src='/static/icons/icon_plus.svg' />
                      <TitleWork 
                        show={show}
                        color='#fff'
                        dangerouslySetInnerHTML={{ __html: work.attributes.titleBanner }}
                      />
                    </OverlayImage>
                  </DivImage>
                </ItemWork>
              ))}
            </DivWork>
          }
          {viewMore &&
            <DivButton>
              <Button onClick={() => loadMore()}>
                <Text>{buttonTextMore}</Text>
                <Icon src='/static/icons/icon_plus.svg' />
              </Button>
            </DivButton>
          }
        </Container>
      </Wrapper>
    </Section>
  )
}

const DivIntro = styled.div`
  margin-top:72px;
`;
const DivWork = styled.div`
  margin-top: calc(72px + (120 - 72) * ((100vw - 375px) / (1920 - 375)));
  display:flex;
  flex-flow:row wrap;
  margin-right: -10px;
  margin-left: -10px;
  @media screen and (max-width: 600px) {
    margin-right:0;
    margin-left:0;
  }
`;
const ItemWork = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  width: calc(50% - 20px);
  margin-right:10px;
  margin-bottom:20px;
  margin-left:10px;
  box-sizing:border-box;
  height:320px;
  overflow:hidden;
  @media screen and (max-width:768px){
    width:100%;
    height:288px;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    margin-right:0;
    margin-left:0;
  }
`;
const DivImage = styled.a`
  position:relative;
  height:100%;
  width:100%;
  :hover{
    cursor:pointer;
  }
`;
const ImageItem = styled.img`
  height:100%;
  width:100%;
  transition: all 0.5s ease; 
  ${({ show }) => show && css`
    transform: scale(1.5);
  `};
`;
const OverlayImage = styled.div`
  position:absolute;
  top:0;
  right:0;
  bottom:0;
  left:0;
  opacity:0;
  background-color: rgba(0,0,0,0.5);
  transition: all 0.5s ease;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-flow:column;
  ${({ show }) => show && css`
    opacity:1;
  `};
  img{
    transition: all 0.4s ease;
    transition-delay:0.2s
    ${({ show }) => show && css`
      transform: scale(2);
    `};
  }
`;
const TitleWork = styled(H6)`
  margin-top:16px;
  opacity:0;
  transition: all 0.5s ease;
  display:flex;
  align-items:center;
  justify-content:center;
  transition-delay:0.2s
  ${({ show }) => show && css`
    opacity:1;
  `};
`;

//BUTTON SHOW MORE
const DivButton = styled.div`
  margin-top: 56px;
  display:flex;
  align-items:center;
  justify-content:center;
`;
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
  transform:rotate(0deg);
  transition: all 0.3s ease;
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
      transform:rotate(90deg);
    }
  }
`;