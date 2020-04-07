import styled from 'styled-components';

const AntTitle = styled.div`
  font-family: ${({ font }) => font ? font : 'Montserrat-Bold'};
  font-size: 10px;
  text-align: ${({ align }) => align ? align : 'left'};
  color: ${({ color }) => color ? color : '#E3000F'};
  text-transform:uppercase;
  ${({ maxWidth }) => maxWidth && css`
    max-width: ${maxWidth};
  `}
`;

export default AntTitle;