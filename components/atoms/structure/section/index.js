import styled, { css } from 'styled-components';
import Fade from 'react-reveal/Fade';

export default function Section(props) {

  const {
    className,
    backgroundColor,
    twoColors,
    children,
    noFade,
    onTop
  } = props;

  return (
    <DivSection className={className} backgroundColor={backgroundColor} twoColors={twoColors} onTop={onTop}>
      {noFade &&
        <>
          {children}
        </>
      }
      {!noFade &&
        <Fade bottom cascade ssrFadeout>
          {children}
        </Fade>
      }
    </DivSection>
  )
}


const DivSection = styled.div`
  position: relative;
  background-color: ${({ backgroundColor }) => backgroundColor ? backgroundColor : 'white'};
  ${({ twoColors }) => twoColors && css`
    background: linear-gradient(180deg, #202020 65%, #ffffff 35%);
  `};
  ${({ onTop }) => onTop && css`
    div{
      z-index:1;
    }
  `};
`;