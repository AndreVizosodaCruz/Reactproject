import React, {useEffect, useState} from 'react';
import styled, { css } from 'styled-components';
import Ink from 'react-ink';
import { Modal, Text12, H4 } from '../../../atoms';
import { setCookie, checkCookie } from '../../../../lib/cookies';

export default function ModalCookies(props) {

  const {
    title,
    description,
    buttonText
  } = props.cookies;

  const [open, setOpen] = useState(false);
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    const cookies = checkCookie('cookies');
    if(!cookies){
      setOpen(true);
    }
  }, [])

  const afterOpenModal = () => {
    setAnimation(true);
  }

  const cookiesAgree = () => {
    setCookie('cookies', 'agree', 365);
    setAnimation(false);
    setTimeout(() => {
      setOpen(false);
    }, 500)
  }

  return(
    <Modal isOpen={open} afterOpenModal={afterOpenModal}>
      <Overlay animation={animation} />
      <Content animation={animation}>
        <Structure>
          <Texts>
            <Title color='#E3000F'>{title}</Title>
            <Description font='Montserrat-Medium' dangerouslySetInnerHTML={{ __html: description }}/>
          </Texts>
          <Button onClick={cookiesAgree}>
            <Ink style={{ color: 'black' }} />
            <Text>{buttonText}</Text>
            <Icon src='/static/icons/icon_angleright.svg'/>
          </Button>
        </Structure>
      </Content>
    </Modal>
  )
}

const Overlay = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0);
  transition: all 0.5s ease;

  ${({ animation }) => animation && css`
    background-color: rgba(0,0,0,0.5);
  `}
`;
const Structure = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 60px 125px;
  background-color: #fff;
  transform: translateY(100%);
  transition: all 0.5s ease;
  justify-content: space-between;
  @media screen and (max-width: 1280px) {
    padding: 60px 90px;
  }
  @media screen and (max-width: 768px) {
    padding: 60px 60px;
    flex-direction: column;
  }
  @media screen and (max-width: 578px) {
    padding: 45px 30px;
    flex-direction: column;
  }
`;
const Texts = styled.div`
  margin-right: 100px;
  flex:1;
  @media screen and (max-width: 768px) {
    margin-right: 0;
  }
`;
const Title = styled(H4)`
`;
const Description = styled(Text12)`
  a {
    color: white;
    text-decoration: underline;
  }
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
`;
const Icon = styled.img`
  height:8px;
  object-fit:contain;
  transition: all 0.5s ease;
  transform: translateX(0);
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
    ${Icon}{
      transform: translateX(5px);
    }
  }
  @media screen and (max-width: 768px) {
    margin-top: 50px;
    align-self: flex-start;
  }
`;
const Content = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  opacity: 0;
  transition: all 0.5s ease;

  ${({ animation }) => animation && css`
    opacity: 1;

    ${Structure} {
      transform: translateY(0);
    }
  `};
`;