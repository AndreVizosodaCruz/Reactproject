import styled from 'styled-components';
import Ink from 'react-ink';
import { Link } from '../../../../routes';

export default function ButtonSlug(props) {
  const {
    slug,
    text,
  } = props;

  return (
    <a href={slug}>
      <Button>
        <Ink style={{ color: 'black' }} />
        <Text>{text}</Text>
        <Icon src='/static/icons/icon_angleright.svg' />
      </Button>
    </a>
  )
}

const Text = styled.div`
  font-family: Montserrat-Bold;
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
    ${Icon}{
      transform: translateX(5px);
    }
  }
`;