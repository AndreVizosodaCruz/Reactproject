import React from 'react';
import styled, { css } from 'styled-components';
import Scroll from 'react-scroll';

let scroll = Scroll.animateScroll;

import {
  Section,
  Container,
  CheckBox,
  Text12,
  Text10
} from '../../atoms';

import {
  Intro
} from '../../molecules';

export default function Footer(props) {

  const {
    logo,
    hi,
    network,
    legal,
    goUpText
  } = props.footer;

  const {
    followText,
    linkDribbble,
    linkInstagram,
    linkFacebook,
    linkLinkedin,
  } = props;

  let optionScroll = {
    spy: true,
    duration: 500,
    smooth: true,
    delay: 100
  }

  const ScrollTop = () => {
    scroll.scrollToTop(optionScroll);
  }

  return (
    <Section backgroundColor='#F9F9F9' noFade>
      <DivContainerFooter>
        <DivLogo>
          <img src={logo} />
        </DivLogo>
        <Wrapper>
          <Container sm>
            <DivContent className="desktop">
              <BoxContent>
                <Title
                  color='#202020'
                  dangerouslySetInnerHTML={{ __html: hi.title }}
                />
                <Margin />
                <a href={'mailto:' + hi.email} target='_blank'>
                  <Text12
                    color='#6F6F6E'
                    maxWidth='163px'
                    dangerouslySetInnerHTML={{ __html: hi.email }}
                  />
                </a>
                <a href={'tel:' + hi.number} target='_blank'>
                  <Text12
                    color='#6F6F6E'
                    maxWidth='163px'
                    dangerouslySetInnerHTML={{ __html: hi.number }}
                  />
                </a>
                <Margin />
                <Text10
                  color='#6F6F6E'
                  maxWidth='233px'
                  dangerouslySetInnerHTML={{ __html: hi.address }}
                />
                <Margin />
                <a href={hi.linkMaps} target='_blank'>
                  <Text10
                    className='maps'
                    color='#E3000F'
                    maxWidth='163px'
                    dangerouslySetInnerHTML={{ __html: hi.textMaps }}
                  />
                </a>
              </BoxContent>
              <BoxContent>
                <Title
                  color='#202020'
                  dangerouslySetInnerHTML={{ __html: network.title }}
                />
                <Margin />
                {network.data.map((network, index) => (
                  <Margin small key={String(index)}>
                    <a href={network.link} target='_blank'>
                      <Text12
                        color='#6F6F6E'
                        maxWidth='163px'
                        dangerouslySetInnerHTML={{ __html: network.text }}
                      />
                    </a>
                  </Margin>
                ))}
              </BoxContent>
              <BoxContent>
                <Title
                  color='#202020'
                  dangerouslySetInnerHTML={{ __html: followText }}
                />
                <Margin />
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
              </BoxContent>
              <BoxContent>
                <Title
                  color='#202020'
                  dangerouslySetInnerHTML={{ __html: legal.title }}
                />
                <Margin />
                <Margin small>
                  <LinkPage>
                    <a href='legal#PrivacyPolicy'>
                      <Text12
                        color='#6F6F6E'
                        maxWidth='163px'
                        dangerouslySetInnerHTML={{ __html: legal.privacyText }}
                      />
                    </a>
                  </LinkPage>
                </Margin>
                <Margin small>
                  <LinkPage>
                    <a href='legal#Cookies'>
                      <Text12
                        color='#6F6F6E'
                        maxWidth='163px'
                        dangerouslySetInnerHTML={{ __html: legal.cookiesText }}
                      />
                    </a>
                  </LinkPage>
                </Margin>
                <LinkPage>
                  <a href='legal#TermsOfUse'>
                    <Text12
                      color='#6F6F6E'
                      maxWidth='163px'
                      dangerouslySetInnerHTML={{ __html: legal.termsText }}
                    />
                  </a>
                </LinkPage>
              </BoxContent>
            </DivContent>
            <DivContent className="mobile">
              <DivLogoMob>
                <img src={logo} />
              </DivLogoMob>
              <Margin big />
              <BoxContent>
                <Title
                  color='#202020'
                  dangerouslySetInnerHTML={{ __html: hi.title }}
                />
                <Margin />
                <a href={'mailto:' + hi.email} target='_blank'>
                  <Text12
                    color='#6F6F6E'
                    maxWidth='163px'
                    dangerouslySetInnerHTML={{ __html: hi.email }}
                  />
                </a>
                <a href={'tel:' + hi.number} target='_blank'>
                  <Text12
                    color='#6F6F6E'
                    maxWidth='163px'
                    dangerouslySetInnerHTML={{ __html: hi.number }}
                  />
                </a>
                <Margin />
                <Text10
                  color='#6F6F6E'
                  maxWidth='233px'
                  dangerouslySetInnerHTML={{ __html: hi.address }}
                />
                <Margin />
                <a href={hi.linkMaps} target='_blank' style={{ maxWidth: '163px' }}>
                  <Text10
                    className='maps'
                    color='#E3000F'
                    maxWidth='163px'
                    dangerouslySetInnerHTML={{ __html: hi.textMaps }}
                  />
                </a>
              </BoxContent>
              <Margin big />
              <DivBoxMob>
                <BoxContent>
                  <Title
                    color='#202020'
                    dangerouslySetInnerHTML={{ __html: network.title }}
                  />
                  <Margin />
                  {network.data.map((network, index) => (
                    <Margin small key={String(index)}>
                      <a href={network.link} target='_blank'>
                        <Text12
                          color='#6F6F6E'
                          maxWidth='163px'
                          dangerouslySetInnerHTML={{ __html: network.text }}
                        />
                      </a>
                    </Margin>
                  ))}
                </BoxContent>
                <BoxContent>
                  <Title
                    color='#202020'
                    dangerouslySetInnerHTML={{ __html: followText }}
                  />
                  <Margin />
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
                </BoxContent>
              </DivBoxMob>
              <Margin big />
              <BoxContent>
                <Title
                  color='#202020'
                  dangerouslySetInnerHTML={{ __html: legal.title }}
                />
                <Margin />
                <Margin small>
                  <LinkPage>
                    <a href='legal#PrivacyPolicy'>
                      <Text12
                        color='#6F6F6E'
                        maxWidth='163px'
                        dangerouslySetInnerHTML={{ __html: legal.privacyText }}
                      />
                    </a>
                  </LinkPage>
                </Margin>
                <LinkPage>
                  <a href='legal#Cookies'>
                    <Text12
                      color='#6F6F6E'
                      maxWidth='163px'
                      dangerouslySetInnerHTML={{ __html: legal.cookiesText }}
                    />
                  </a>
                </LinkPage>
              </BoxContent>
            </DivContent>
          </Container>
        </Wrapper>
        <DivGoUp>
          <Button onClick={ScrollTop}>
            <Icon src='/static/icons/icon_angleright.svg' />
            <Text>{goUpText}</Text>
          </Button>
        </DivGoUp>
      </DivContainerFooter>
    </Section>
  )
}

const DivContainerFooter = styled.div`
  position:relative;
`;
const Margin = styled.div`
  margin-bottom:8px;
  ${({ big }) => big && css`
    margin-top:32px;
  `}
  ${({ small }) => small && css`
    margin-bottom:2px;
  `}
`;
const DivLogo = styled.div`
  position:absolute;
  top: 72px;
  left: calc(63px + (124 - 62) * ((100vw - 570px) / (1920 - 570)));
  @media screen and (max-width:800px){
    display:none;
  }
`;
const DivLogoMob = styled.div`

`;
const Wrapper = styled.div`
  padding-top: 72px;
  padding-bottom: calc(48px + (177 - 48) * ((100vw - 375px) / (1920 - 375)));
`;
const DivContent = styled.div`
  display:none;
  flex-flow:row;
  justify-content:center;
  @media screen and (min-width:801px){
    &.desktop{
      display:flex;
    }
  }
  @media screen and (max-width:1200px){
    &.desktop{
      justify-content:flex-end;
    }
  }
  @media screen and (max-width:800px){
    flex-flow:column;
    &.desktop{
      display:none;
    }
    &.mobile{
      display:flex;
    }
  }
`;
const BoxContent = styled.div`
  display:flex;
  flex-flow:column;
  width:20%;
  .maps{
    text-decoration:underline;
  }
  :first-of-type{
    width:40%;
  }
  @media screen and (max-width:1280px){
    :first-of-type{
      width:35%;
    }
  }
  @media screen and (max-width:1200px){
    width:20%;
    :first-of-type{
      width:25%;
    }
    :last-of-type{
      margin-left:2%;
    }
  }
  @media screen and (max-width:1024px){
    :first-of-type{
      width:30%;
    }
  }
  @media screen and (max-width:800px){
    width:25%;
    :first-of-type{
      width:40%;
    }
    :last-of-type{
      margin-left:unset;
    }
    ${({ half }) => half && css`
      width:50%;
    `}
  }
  @media screen and (max-width:600px){
    width:100%;
    :first-of-type{
      width:100%;
    }
  }
`;
const DivBoxMob = styled.div`
  display:flex;
  flex-flow:row;
`;
const Title = styled(Text10)`
  text-transform: uppercase;
`;
const LinkPage = styled.a`
  max-width:163px;
  :hover{
    cursor:pointer;
  }
`;
const DivSocial = styled.div`
  display:flex;
  flex-flow:row;
  align-items:center;
`;
const ButtonSocial = styled.a`
  margin-right:20px;
  :last-of-type{
    margin-right:0;
  }
`;
const IconSocial = styled.img`

`;

const DivGoUp = styled.div`
  position:absolute;
  top:-32px;
  right: calc(63px + (124 - 62) * ((100vw - 570px) / (1920 - 570)));
`;
//BUTTON
const Text = styled.div`    
  writing-mode: vertical-rl;
  text-orientation: mixed;
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
   transform: rotate(-90deg);
  transition: all 0.5s ease;
`;
const Button = styled.div`
  position: relative;
  background: #D9DADA;
  border-radius: 6px;
  width:48px;
  height:112px;
  padding:24px 14px;
  box-sizing:border-box;
  display:flex;
  flex-flow:column;
  align-items:center;
  justify-content:space-between;
  transition: all 0.5s ease;
  :hover{
    background: #6F6F6E;
    cursor:pointer;
    ${Icon}{
      transform: translateY(-5px) rotate(-90deg);
    }
  }
`;