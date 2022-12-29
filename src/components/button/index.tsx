import React from 'react';
import { ButtonLabelProps, ButtonProps } from './interfaces';
import { ButtonWrapper, ButtonLabel, StyledButton } from './style';
// usando export para contornar um bug do eslint

export default function Button({
  children,
  width,
  onClick,
  backgroundColor,
  color,
  text,
  fontWeigth,
  font,
  label,
  labelColor,
}: ButtonProps & ButtonLabelProps): JSX.Element {
  return (
    <ButtonWrapper>
      {label ? <ButtonLabel labelColor={labelColor}>{label}</ButtonLabel> : null}
      <StyledButton
        onClick={onClick}
        backgroundColor={backgroundColor}
        width={width}
        color={color}
        text={text}
        fontWeigth={fontWeigth}
        font={font}
      >
        {text || children}
      </StyledButton>
    </ButtonWrapper>
  );
}
