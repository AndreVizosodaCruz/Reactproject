import styled, { css } from 'styled-components';

const Text10 = styled.div`
  font-family: ${({ font }) => font ? font : 'Montserrat-SemiBold'};
  font-size: 10px;
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
  a{
    color:#6F6F6E;
    :hover{
      color:#E3000F;
    }
  }
`;

export default Text10;