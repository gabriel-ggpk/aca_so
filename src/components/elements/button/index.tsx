import React from 'react';
import styled from 'styled-components';
// usando export para contornar um bug do eslint
export interface Props {
  children?: React.ReactNode;
  backgroundColor?: string;
  color?: string;
  width: string;
  text?: string;
  onClick: () => void;
  fontWeigth?: string;
  font?: string;
}
const StyledButton = styled.div<Props>`
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

export default function Button({
  children,
  width,
  onClick,
  backgroundColor,
  color,
  text,
  fontWeigth,
  font,
}: Props): JSX.Element {
  return (
    <div className="wrapper">
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
    </div>
  );
}
