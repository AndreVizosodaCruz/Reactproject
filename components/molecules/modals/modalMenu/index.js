import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Ink from 'react-ink';
import { Link, animatedScroll as scroll, scrollSpy, scroller } from 'react-scroll';

import { attributes, react as TestimonialsContent } from '../../../../public/static/content/sections/testimonials.md';

import {
  Modal,
  ButtonLink,
  Text10,
  H5
} from '../../../atoms';

export default function ModalMenu(props) {

  const {
    linkDribbble,
    linkInstagram,
    linkFacebook,
    linkLinkedin,
    followText,
    navbar
  } = props;

  const {
    enabledSection
  } = attributes;

  // OPEN MODAL
  const [open, setOpen] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    if (!open) {
      setAnimation(false);
    }
  }, [open])

  const afterOpenModal = () => {
    setAnimation(true);
  }
  const afterCloseModal = () => {
    setAnimation(false);
  }
  const openModal = () => {
    setOpen(true);
  }
  const onRequestClose = () => {
    setAnimation(false);
    setOpen(false);
  }

  // SHOW FULL NAVBAR
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  })

  const handleScroll = () => {
    let scrollY = window.scrollY;
    if (scrollY >= (window.innerHeight)) {
      if (!show) {
        setShow(true);
      }
    }
    else {
      if (show) {
        setShow(false);
      }
    }
  }

  const handleChange = () => {
    setAnimation(false);
    setOpen(false);
  }

  const [path, setPath] = useState('');

  useEffect(() => {
    const path = window.location.pathname;
    const splited = path.split('/', 3);
    setPath(splited[1]);
  }, []);


  useEffect(() => {
    if(enabledSection == true){
      setSections(navbar.sections);
    } else {
      let temp = [];
      temp = navbar.sections;
      temp = temp.filter(function(obj) {
        return obj.title !== "Testemunhos"
      });
      setSections(temp);
    }
  }, [enabledSection]);

  return (
    <>
      <DivNav>
        <NavbarMenu>
          <a href='/'>
            <Logo src={navbar.image} />
          </a>
          <ButtonModal onClick={() => openModal()}>
            <img src='/static/icons/icon_menuham.svg' />
          </ButtonModal>
        </NavbarMenu>
        <NavbarSocial show={show}>
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
          <ButtonLink
            text={navbar.buttonTextSpeak}
            href={navbar.buttonLinkSpeak}
          />
        </NavbarSocial>
      </DivNav>
      <Modal isOpen={open} afterOpenModal={afterOpenModal} afterCloseModal={afterCloseModal}>
        <Overlay animation={animation} />
        <Content animation={animation}>
          <Structure>
            <ButtonClose onClick={() => onRequestClose()}>
              <img src='/static/icons/close.svg' />
            </ButtonClose>
            <LogoRed>
              <img src={navbar.image} />
            </LogoRed>
            <DivContent>
              {path == '' &&
                <DivSections>
                  {sections.map((section, index) => (
                    <DivSection key={String(index)}>
                      <TitleSections
                        activeClass='active'
                        to={section.link}
                        spy={true}
                        smooth={true}
                        duration={500}
                        delay={100}
                        onClick={() => handleChange()}
                      >
                        <H5
                          font='Montserrat-Medium'
                          color='#6F6F6E'
                          dangerouslySetInnerHTML={{ __html: section.title }}
                        />
                      </TitleSections>
                    </DivSection>
                  ))}
                </DivSections>
              }
              {path !== '' &&
                <DivSections>
                  {sections.map((section, index) => (
                    <DivSection key={String(index)}>
                      <a
                        href={'/#' + section.link}
                      >
                        <H5
                          font='Montserrat-Medium'
                          color='#6F6F6E'
                          dangerouslySetInnerHTML={{ __html: section.title }}
                        />
                      </a>
                    </DivSection>
                  ))}
                </DivSections>
              }
              <DivContentSocial>
                <DivFollow>
                  <TextFollow
                    font='Montserrat-Bold'
                    color='#6F6F6E'
                    dangerouslySetInnerHTML={{ __html: followText }}
                  />
                  {linkDribbble &&
                    <FollowItems href={linkDribbble} target='_blank'>
                      <IconSocial src='/static/icons/icon_dribbble.svg' />
                    </FollowItems>
                  }
                  {linkInstagram &&
                    <FollowItems href={linkInstagram} target='_blank'>
                      <IconSocial src='/static/icons/icon_instagram.svg' />
                    </FollowItems>
                  }
                  {linkFacebook &&
                    <FollowItems href={linkFacebook} target='_blank'>
                      <IconSocial src='/static/icons/icon_facebook.svg' />
                    </FollowItems>
                  }
                  {linkLinkedin &&
                    <FollowItems href={linkLinkedin} target='_blank'>
                      <IconSocial src='/static/icons/icon_linkedin.svg' />
                    </FollowItems>
                  }
                </DivFollow>
                <ButtonLink
                  text={navbar.buttonTextSpeak}
                  href={navbar.buttonLinkSpeak}
                />
              </DivContentSocial>
            </DivContent>
          </Structure>
        </Content>
      </Modal>
    </>
  )
}

const Overlay = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0);
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  ${({ animation }) => animation && css`
    background-color: rgba(0,0,0,0.5);
  `}
`;
const Structure = styled.div`
  width: 100%;
  height:100%;
  display: flex;
  flex-flow:column;
  box-sizing: border-box;
  padding: 60px 60px;
  background-color: #fff;
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform: translateX(-100%);
  @media screen and (max-width: 578px) {
    padding: 45px 45px;
    flex-direction: column;
  }
`;
const Content = styled.div`
  position: relative;
  z-index: 2;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  opacity: 0;
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  ${({ animation }) => animation && css`
    opacity: 1;
    ${Structure} {
      transform: translateX(0%);
    }
  `};
  @media screen and (max-width: 1200px){
    width:100%;
  }
`;
const ButtonClose = styled.div`
  position:absolute;
  top:60px;
  right:60px;
  font-family: Montserrat-Bold;
  :hover{
    cursor:pointer;
  }
  @media screen and (max-width: 578px) {
    top:45px;
    right:45px;
  }
`;
const LogoRed = styled.div`
  margin-bottom:64px;
`;
const DivContent = styled.div`
  display:flex;
  flex-flow:column;
  justify-content:space-between;
  height:100%;
`;
const DivSections = styled.div`
  display:flex;
  flex-flow:column;
`;
const DivSection = styled.div`
  margin-bottom:16px;
  :last-of-type{
    margin-bottom:0;
  }
`;
const TitleSections = styled(Link)`
  :hover{
    cursor:pointer;
  }
  &.active{
    h5{
      font-family: Montserrat-Bold;
      color: #000000;
    }
  }
`;
const DivContentSocial = styled.div`
  display:flex;
  flex-flow:column;
`;
const DivFollow = styled.div`
  display:flex;
  flex-flow:row;
  margin-bottom:32px;
`;
const TextFollow = styled(Text10)`
  text-transform:uppercase;
`;
const FollowItems = styled.a`
  margin-left:16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

//DIV SHOWN IN PAGES
const DivNav = styled.div`
  z-index:3;
  position: fixed;
  top:0;
  padding: 24px 26px 0 26px;
  width:100%;
  box-sizing:border-box;
  display:flex;
  justify-content:space-between;
  @media screen and (max-width: 768px) {
    padding: 4px 0 0 0;
    width:unset;
  }
`;
const NavbarMenu = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  padding: 10px 18px 10px 13px;
  width:184px;
  height:48px;
  box-sizing:border-box;
  display:flex;
  justify-content:space-between;
  align-items:center;
  @media screen and (max-width: 768px) {
    padding: 20px 30px 20px 26px;
    width:302px;
    height:72px;
  }
`;
const Logo = styled.img`
`;
const ButtonModal = styled.div`
  :hover{
    cursor:pointer;
  }
`;
const NavbarSocial = styled.div`
  display:flex;
  flex-flow:row;
  transform:translateY(-200%);
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  ${({ show }) => show && css`
    transform: translateY(0);
  `};
  @media screen and (max-width: 768px) {
    display:none;
  }
`;
const DivSocial = styled.div`
  display:flex;
  flex-direction:row;
  margin-right:16px;
  @media screen and (max-width: 768px) {
    display:none;
    margin-right:0;
  }
`;
const ButtonSocial = styled.a`
  width: 48px;
  height: 48px;
  background: #FFFFFF;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  margin-right:8px;
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