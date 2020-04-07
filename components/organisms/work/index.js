import React from 'react';
import styled, { css } from 'styled-components';
import { attributes, react as WorkContent } from '../../../public/static/content/sections/work.md';

import {
  Section,
  Container,
  Wrapper,
  H1,
  H2,
  H6,
  Text12,
  ButtonLink
} from '../../atoms';

import {
  Intro
} from '../../molecules';

export default function Work() {

  const {
    sectionName,
    smallTitle,
    title,
    dataWork
  } = attributes;

  return (
    <Section className={sectionName} backgroundColor='#f9f9f9' onTop >
      <Wrapper both>
        <Container lg>
          <DivRelative>
            {(dataWork && dataWork.length > 0) &&
              <>
                <Line top src='/static/images/linha_1.svg' />
                <Line bottom src='/static/images/linha_2.svg' />
              </>
            }
            <Intro
              smallTitle={smallTitle}
              title={title}
              titleSize='H3'
            />
            {(dataWork && dataWork.length > 0) &&
              <ContainerBox>
                {
                  dataWork.map((modal, index) => (
                    <DivBox key={String(index)}>
                      <Text12
                        color='#6F6F6E'
                        dangerouslySetInnerHTML={{ __html: `0${index + 1}.` }}
                      />
                      <DivIcon>
                        <Icon src={modal.img} />
                      </DivIcon>
                      <H6
                        maxWidth='244px'
                        dangerouslySetInnerHTML={{ __html: modal.title }}
                      />
                    </DivBox>
                  )
                  )}
              </ContainerBox>
            }
          </DivRelative>
        </Container>
      </Wrapper>
    </Section>
  )
}

const DivRelative = styled.div`
  width:100%;
  height:100%;
  position:relative;
`;
const ContainerBox = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  width:100%;
  height:100%;
  margin-top: calc(40px + (64 - 40) * ((100vw - 375px) / (1920 - 375)));
  position:relative;
  @media screen and (max-width:1200px){
    flex-flow: column;
    align-items:center;
  }
`;
const DivBox = styled.div`
  position:relative;
  background: #FFFFFF;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  margin-right:20px;
  box-sizing:border-box;
  width:33%;
  max-width:372px;
  min-width:311px;
  height:376px;
  padding:23px 30px 32px 30px;
  display:flex;
  flex-flow:column;
  justify-content:space-between;
  :last-child{
    margin-right:0;
  }
  :nth-child(2) {
    margin-top:72px;
  }
  :nth-child(3) { 
    margin-top:144px;
  }
  @media screen and (max-width:1200px){
    margin-right:0;
    margin-bottom:16px;
    :last-child{
      margin-bottom:0;
    }
    :nth-child(2) {
      margin-top:0;
    }
    :nth-child(3) { 
      margin-top:0;
    }
  }
`;
const DivIcon = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
`;
const Icon = styled.img`
`;
const Line = styled.img`
  position:absolute;
  z-index:1;
  ${({ top }) => top && css`
    left:18%;
    top:0;
    @media screen and (max-width:1200px){
      left:unset;
      right: 5%;
      top: 30%;
      transform: rotate(80deg);
      z-index: 0;
    }
    @media screen and (max-width:1024px){
      right: -5%;
    }
    @media screen and (max-width:768px){
      right: -15%;
    }
  `}
  ${({ bottom }) => bottom && css`
    right:20%;
    bottom:-22%;
    @media screen and (max-width:1200px){
      right: unset;
      left:5%;
      bottom: 20%;
      transform: rotate(80deg);
      z-index: 0;
    }
    @media screen and (max-width:1024px){
      left: -5%;
    }
    @media screen and (max-width:768px){
      left: -15%;
    }
  `}
  @media screen and (max-width:570px){
      display:none;
    }
`;