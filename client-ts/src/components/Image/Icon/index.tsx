import React from "react";

import styled, { css } from "styled-components";

import * as icons from "./Icons";

import { IconProps, IconWrapperProps } from "./type";

const IconWrapper = styled.div<IconWrapperProps>`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  ${({ rotate }) =>
    rotate && {
      transform: `rotate(${rotate}deg)`,
    }};
  ${({ isButton }) =>
    isButton &&
    css`
      cursor: pointer;
    `}
  svg {
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    color: ${({ color }) => color};
  }
`;

const Icon = ({
  icon,
  width,
  height,
  rotate,
  color,
  isButton = false,
  onClick,
}: IconProps) => {
  const IconComponent = icons[icon];
  return (
    <IconWrapper
      width={width}
      height={height}
      color={color}
      rotate={rotate}
      isButton={isButton}
      onClick={onClick}
    >
      <IconComponent />
    </IconWrapper>
  );
};

export default Icon;
