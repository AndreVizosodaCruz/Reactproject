import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Select from 'react-select';

import { attributes, react as LegalContent } from '../../../public/static/content/legal/legal.md';

import {
  Section,
  Container,
  Wrapper,
  H3,
  H5,
  Text12,
  Text10,
  ButtonLink,
} from '../../atoms';

import {
  Intro
} from '../../molecules';

export default function LegalInformation() {

  const {
    sectionName,
    titleBanner,
    dataLegal
  } = attributes;

  const dataTabs = [];
  if (dataLegal) {
    for (let i = 0; i < dataLegal.length; i++) {
      dataTabs.push({
        value: dataLegal[i].sectionName,
        label: dataLegal[i].title
      });
    }
  }
  const [active, setActive] = useState(0);

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && hash !== '') {
      const index = dataLegal.findIndex((line) => line.sectionName === hash);
      if (index != -1) {
        setActive(index);
        location.hash = '';
      }
    }
  }, [])

  return (
    <Section className={sectionName} noFade>
      <Banner>
        <Container lg>
          <H3
            color='white'
            dangerouslySetInnerHTML={{ __html: titleBanner }}
          />
        </Container>
      </Banner>
      <ContainerLegal>
        {(dataLegal && dataLegal.length > 0) &&
          <TabsContainer className='desktop'>
            <Tabs selectedIndex={active} onSelect={(index) => setActive(index)}>
              <WrapperTab>
                <Container lg>
                  <TabInnerPannel>
                    <TabList>
                      {dataTabs.map((value, index) => (
                        <AllTabs key={String(index)}>
                          <Text10>
                            {value.label}
                          </Text10>
                        </AllTabs>
                      ))}
                    </TabList>
                  </TabInnerPannel>
                </Container>
              </WrapperTab>
              <Wrapper both>
                <Container md>
                  {dataLegal.map((value, index) => (
                    <TabPanel key={String(index)}>
                      <TabInnerPannel>
                        <H5
                          color='#E3000F'
                          dangerouslySetInnerHTML={{ __html: value.title }}
                        />
                        <Margin />
                        <Text
                          font='Montserrat-Medium'
                          dangerouslySetInnerHTML={{ __html: value.text }}
                        />
                      </TabInnerPannel>
                    </TabPanel>
                  ))}
                </Container>
              </Wrapper>
            </Tabs>
          </TabsContainer>
        }
        {(dataLegal && dataLegal.length > 0) &&
          <TabsContainer className='mobile'>
            <WrapperTab>
              <Container lg>
                <DropdownContainer>
                  <Dropdown
                    onChange={options => setActive(options.value)}
                    defaultValue={dataTabs[0]}
                    value={dataTabs[active]}
                    classNamePrefix='dropdown'
                    options={dataTabs}
                  />
                </DropdownContainer>
              </Container>
            </WrapperTab>
            <Wrapper both>
              <Container md>
                {dataLegal.map((value, index) => (
                  <TabInnerPannel
                    key={String(index)}
                    className={value.sectionName === active || index === active ? 'show' : 'hide'}
                  >
                    <H5
                      color='#E3000F'
                      dangerouslySetInnerHTML={{ __html: value.title }}
                    />
                    <Margin />
                    <Text
                      font='Montserrat-Medium'
                      dangerouslySetInnerHTML={{ __html: value.text }}
                    />
                  </TabInnerPannel>
                ))}
              </Container>
            </Wrapper>
          </TabsContainer>
        }
      </ContainerLegal>
    </Section>
  )
}

const Banner = styled.div`
  height:50vh;
  background-color:#E3000F;
  display: flex;
  align-items:center;
`
const ContainerLegal = styled.div`
  position:relative;

`;
const TabsContainer = styled.div`
  @media screen and (min-width:768px){
    &.desktop{
      display:block;
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
      display:block;
    }
  }
`;
const WrapperTab = styled.div`
  position:relative;
  background-color: #E3000F;
`;
const TabInnerPannel = styled.div`
  &.show {
    display:block;
  }
  &.hide {
    display:none;
  }
`;
const AllTabs = styled(Tab)`
  display:inline-flex;
  margin-right:31px;
  margin-top:25px;
  margin-bottom: 25px;
  cursor:pointer;
  >div{
    transition: all 0.5s ease;
    color: rgba(0,0,0, 0.5);
  }
  &:hover,
  &.react-tabs__tab--selected {
    >div{
      color: #fff;
    }
  }
`;
const Margin = styled.div`
  margin-bottom: 8px;
  ${({ medium }) => medium && css`
    margin-bottom: 16px;
  `};
`;
const DropdownContainer = styled.div`
  flex:100%;
  display:flex;
  flex-direction:column;
`;
const Dropdown = styled(Select)`
  flex: 1;
  z-index:2 !important;
  font-family: Montserrat-Medium;
  font-size: calc(10px + (12 - 10) * ((100vw - 540px) / (1920 - 540)));
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.29;
  letter-spacing: normal;
  color: #000;
  border-radius: 0;
  margin-bottom: 25px;
  .dropdown__control {
    border-radius: 27px;
    background-color: transparent;
    padding: 0 calc(14px + (29 - 14) * ((100vw - 540px) / (1920 - 540)));
    height: 100%;
    border: 1px solid #000;
    box-shadow: 0 0 0 0px #000;

    :hover {
      border-color: inherit !important;
    }
  }
  .dropdown__indicator {
    padding: 0px;
    width: 15px;
    color: #000;
  }
  .dropdown__indicator-separator {
    width: 0px;
  }
  .dropdown__placeholder,
  .dropdown__single-value {
    font-family: Montserrat-Medium;
    font-size: calc(10px + (12 - 10) * ((100vw - 540px) / (1920 - 540)));
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.29;
    letter-spacing: normal;
    color: #000;
  }

  .dropdown__menu {
    & div {
      .css-1n7v3ny-option {
        background-color: transparent;
      }
    }
  }
`;
const Text = styled(Text12)`
  p{
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  ul{
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }
  li{
    display: list-item;
  }
`;