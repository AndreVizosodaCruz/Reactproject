import styled, { css } from 'styled-components';

const Text12 = styled.div`
  font-family: ${({ font }) => font ? font : 'Montserrat-SemiBold'};
  font-size: 12px;
  line-height:${({ height }) => height ? 24 : 16}px;
  text-align: ${({ align }) => align ? align : 'left'};
  color: ${({ color }) => color ? color : 'black'};
  column-count:${({ withCols }) => withCols ? 2 : 1};

  ${({ maxWidth }) => maxWidth && css`
    max-width: ${maxWidth};
  `}
  @media screen and (max-width: 768px) {
    column-count:1;
  }
`;

export default Text12;