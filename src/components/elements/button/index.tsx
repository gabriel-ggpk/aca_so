import React from 'react';
import styled from 'styled-components';
// usando export para contornar um bug do eslint
export interface ButtonProps {
  children?: React.ReactNode;
  backgroundColor?: string;
  color?: string;
  width: string;
  text?: string;
  onClick: () => void;
  fontWeigth?: string;
  font?: string;
  label?: string;
}
export interface ButtonLabelProps {
  children?: React.ReactNode;
  color?: string;
}
const StyledButton = styled.div<ButtonProps>`
  background-color: ${(props) => props.backgroundColor || 'white'};
  color: ${(props) => props.color || 'white'};
  width: ${(props) => props.width || '200px'};
  font-weight: ${(props) => props.fontWeigth || 'normal'};
  font-family: ${(props) => props.font || 'Raleway'};
  font-size: 16px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 17px 0px;
`;
const ButtonLabel = styled.span<ButtonLabelProps>`
  font-size: 16px;
  text-align: center;
  margin-bottom: 8px;
  color: ${(props) => props.color || 'white'};
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
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
}: ButtonProps): JSX.Element {
  return (
    <ButtonWrapper>
      {label ? <ButtonLabel>{label}</ButtonLabel> : null}
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
