import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  position:relative;
  ${({ top }) => top && css`
    padding-top: calc(70px + (130 - 70) * ((100vw - 375px) / (1920 - 375)));
  `}
  ${({ bottom }) => bottom && css`
    padding-bottom: calc(70px + (130 - 70) * ((100vw - 375px) / (1920 - 375)));
  `}
  ${({ both }) => both && css`
    padding-top: calc(70px + (130 - 70) * ((100vw - 375px) / (1920 - 375)));
    padding-bottom: calc(70px + (130 - 70) * ((100vw - 375px) / (1920 - 375)));
  `}
`;

export default Wrapper;