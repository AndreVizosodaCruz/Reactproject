import styled, { css } from 'styled-components';

const H6 = styled.h6`
  font-family: ${({ font }) => font ? font : 'Montserrat-Bold'};
  font-size: 16px;	
  text-align: ${({ align }) => align ? align : 'left'};
  line-height: ${({ height }) => height ? height : '24'}px;
  color: ${({ color }) => color ? color : 'black'};
  column-count:${({ withCols }) => withCols ? 2 : 1};

  ${({ maxWidth }) => maxWidth && css`
    max-width: ${maxWidth};
  `}
  @media screen and (max-width: 768px) {
    column-count:1;
    line-height:24px;
  }
`;

export default H6;