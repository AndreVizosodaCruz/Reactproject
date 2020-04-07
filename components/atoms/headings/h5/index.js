import styled, { css } from 'styled-components';

let fontMax = 24;
let fontMin = 16;

const H5 = styled.h5`
  font-family: ${({ font }) => font ? font : 'Montserrat-Bold'};
  font-size: calc(${fontMin}px + (${fontMax} - ${fontMin}) * ((100vw - 375px) / (1920 - 375)));	
  text-align: ${({ align }) => align ? align : 'left'};
  line-height: ${({ height }) => height ? height : '32'}px;
  color: ${({ color }) => color ? color : 'black'};
  column-count:${({ withCols }) => withCols ? 2 : 1};

  ${({ maxWidth }) => maxWidth && css`
    max-width: ${maxWidth};
  `}
  @media screen and (max-width: 768px) {
    column-count:1;
    line-height:24px;
  }
  @media screen and (min-width: 1920px) {
    font-size: ${fontMax}px;
  }
`;

export default H5;