import React from 'react';
import styled, { css } from 'styled-components';

import {
  AntTitle,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Text12,
  Text10,
  ButtonLink
} from '../../atoms'

export default function Intro(props) {
  const {
    // CENTER CONTAINER
    centerContainer,

    // SMALL TITLE
    smallTitle,
    smallTitleColor,
    smallTitleFontFamily,
    smallTitleAlign,

    // TITLE
    titleSize,
    title,
    titleFontFamily,
    titleTextAlign,
    titleLineHeight,
    titleColor,
    titleMaxWidth,
    titleWithCols,

    // DESCRIPTION
    descriptionSize,
    description,
    descriptionFontFamily,
    descriptionTextAlign,
    descriptionLineHeight,
    descriptionColor,
    descriptionMaxWidth,
    descriptionWithCols,

    // BUTTON
    buttonText,
    buttonLink,
  } = props;

  const renderAntTitle = () => {
    if (smallTitle) {
      return (
        <AntTitle
          color={smallTitleColor}
          align={smallTitleAlign}
          font={smallTitleFontFamily}
        >
          {smallTitle}
        </AntTitle>
      )
    }
  }

  const renderTitle = () => {
    if (title) {
      if (titleSize === 'H1') {
        return (
          <>
            <Margin />
            <H1
              dangerouslySetInnerHTML={{ __html: title }}
              font={titleFontFamily}
              align={titleTextAlign}
              height={titleLineHeight}
              color={titleColor}
              maxWidth={titleMaxWidth}
              withCols={titleWithCols}
            />
          </>
        )
      }
      else if (titleSize === 'H2') {
        return (
          <>
            <Margin />
            <H2
              dangerouslySetInnerHTML={{ __html: title }}
              font={titleFontFamily}
              align={titleTextAlign}
              height={titleLineHeight}
              color={titleColor}
              maxWidth={titleMaxWidth}
              withCols={titleWithCols}
            />
          </>
        )
      }
      else if (titleSize === 'H3') {
        return (
          <>
            <Margin />
            <H3
              dangerouslySetInnerHTML={{ __html: title }}
              font={titleFontFamily}
              align={titleTextAlign}
              height={titleLineHeight}
              color={titleColor}
              maxWidth={titleMaxWidth}
              withCols={titleWithCols}
            />
          </>
        )
      }
      else if (titleSize === 'H4') {
        return (
          <>
            <Margin />
            <H4
              dangerouslySetInnerHTML={{ __html: title }}
              font={titleFontFamily}
              align={titleTextAlign}
              height={titleLineHeight}
              color={titleColor}
              maxWidth={titleMaxWidth}
              withCols={titleWithCols}
            />
          </>
        )
      }
      else if (titleSize === 'H5') {
        return (
          <>
            <Margin />
            <H5
              dangerouslySetInnerHTML={{ __html: title }}
              font={titleFontFamily}
              align={titleTextAlign}
              height={titleLineHeight}
              color={titleColor}
              maxWidth={titleMaxWidth}
              withCols={titleWithCols}
            />
          </>
        )
      }
      else if (titleSize === 'H6') {
        return (
          <>
            <Margin />
            <H6
              dangerouslySetInnerHTML={{ __html: title }}
              font={titleFontFamily}
              align={titleTextAlign}
              height={titleLineHeight}
              color={titleColor}
              maxWidth={titleMaxWidth}
              withCols={titleWithCols}
            />
          </>
        )
      }
      else {
        return null;
      }
    }
    return null;
  }

  const renderDescription = () => {
    if (description) {
      if (descriptionSize === 12) {
        return (
          <Margin>
            <Text12
              dangerouslySetInnerHTML={{ __html: description }}
              font={descriptionFontFamily}
              align={descriptionTextAlign}
              height={descriptionLineHeight}
              color={descriptionColor}
              maxWidth={descriptionMaxWidth}
              withCols={descriptionWithCols}
            />
          </Margin>
        )
      }
      else if (descriptionSize === 10) {
        return (
          <Margin>
            <Text10
              dangerouslySetInnerHTML={{ __html: description }}
              font={descriptionFontFamily}
              align={descriptionTextAlign}
              height={descriptionLineHeight}
              color={descriptionColor}
              maxWidth={descriptionMaxWidth}
              withCols={descriptionWithCols}
            />
          </Margin>
        )
      }
      return null
    }
    return null
  }

  const renderButton = () => {
    if (buttonLink && buttonText) {
      return (
        <Margin>
          <ButtonLink
            link={buttonLink}
            text={buttonText}
          />
        </Margin>
      )
    }
    return null
  }

  return (
    <Block center={centerContainer}>
      {renderAntTitle()}
      {renderTitle()}
      {renderDescription()}
      {renderButton()}
    </Block>
  )
}

const Block = styled.div`
  display:flex;
  flex-flow:column;
  justify-content:center;
  ${({ center }) => center && css`
    align-items:center;
  `}
`;
const Margin = styled.div`
  margin-top: 16px;
`;