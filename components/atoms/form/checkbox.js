import React from 'react';
import styled, { css } from 'styled-components';

const Checkbox = ({ className, checked, value, error, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} value={value} {...props}/>
    <StyledCheckbox checked={checked} error={error}>
      <Icon viewBox="0 0 24 24">
        <polyline points="18 6 9 17 4 12"/>
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
)

export default Checkbox;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox'}) `
  visibility:hidden;
  border: 0;
  clip: react(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
const CheckboxContainer = styled.div`
  display:inline-block;
  vertical-align:middle;
  :hover{
    cursor: pointer;
  }
`;
const Icon = styled.svg`
  fill: none;
  stroke-width: 2px;
  color: rgba(78,93,197,0.5);
  height:16px;
  width:16px;
  transition:all 0.5s ease;
`;
const StyledCheckbox = styled.div`
  border-radius: 5px;
  border: 1px solid rgba(217, 218, 218, 0.5);
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 0.75px #D9DADA;
  }
  display:inline-block;
  width:16px;
  height:16px;
  background:transparent;
  display:flex;
  align-items:center;
  transition:all 0.5s ease;
  ${Icon} {
    opacity: ${props => props.checked ? 1 : 0};
  }
  ${({error}) => error && css`
    ${({checked}) => !checked && css`
      border-color:red;
    `};
  `};
  ${({checked}) => checked && css`
    border-color:#202020;
    ${Icon} {
      stroke:#202020;
    }
  `};
`;
