import styled, { css } from 'styled-components';

const Container = styled.div`
  ${({ sm }) => sm && css`
    width: 962px;
    margin-left: auto;
    margin-right: auto;
    @media screen and (max-width: 1200px) {
      width: calc(100% - 180px);
      margin-left: 90px;
      margin-right: 90px;
    }
    @media screen and (max-width: 768px) {
      width: calc(100% - 120px);
      margin-left: 60px;
      margin-right: 60px;
    }
    @media screen and (max-width: 578px) {
      width: calc(100% - 60px);
      margin-left: 30px;
      margin-right: 30px;
    }
  `}
  ${({ md }) => md && css`
    width: 1156px;
    margin-left: auto;
    margin-right: auto;
    @media screen and (max-width: 1200px) {
      width: calc(100% - 180px);
      margin-left: 90px;
      margin-right: 90px;
    }
    @media screen and (max-width: 768px) {
      width: calc(100% - 120px);
      margin-left: 60px;
      margin-right: 60px;
    }
    @media screen and (max-width: 578px) {
      width: calc(100% - 60px);
      margin-left: 30px;
      margin-right: 30px;
    }
  `}
  ${({ lg }) => lg && css`
    width: 1352px;
    margin-left: auto;
    margin-right: auto;
    @media screen and (max-width: 1440px) {
      width: 1156px;
    }
    @media screen and (max-width: 1200px) {
      width: calc(100% - 180px);
      margin-left: 90px;
      margin-right: 90px;
    }
    @media screen and (max-width: 768px) {
      width: calc(100% - 120px);
      margin-left: 60px;
      margin-right: 60px;
    }
    @media screen and (max-width: 578px) {
      width: calc(100% - 60px);
      margin-left: 30px;
      margin-right: 30px;
    }
  `}
  ${({ lgLeft }) => lgLeft && css`
    width: 1352px;
    margin-left: auto;
    @media screen and (max-width: 1440px) {
      width: 1156px;
    }
    @media screen and (max-width: 1200px) {
      width: calc(100% - 90px);
      margin-left: 90px;
    }
    @media screen and (max-width: 768px) {
      width: calc(100% - 60px);
      margin-left: 60px;
    }
    @media screen and (max-width: 578px) {
      width: calc(100% - 30px);
      margin-left: 30px;
    }
  `}
`;

export default Container;