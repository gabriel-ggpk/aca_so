import React from 'react';
import styled from 'styled-components';
// usando export para contornar um bug do eslint
export interface Props {
  children?: React.ReactNode;
  backgroundColor?: string;
  height?: string;
  color?: string;
  width: string;
  text?: string;
  onClick: () => void;
}
const StyledButton = styled.div<Props>`
  background-color: ${(props) => props.backgroundColor || 'white'};
  height: ${(props) => props.height || ''};
  width: ${(props) => props.width || ''};
  color: ${(props) => props.color || 'white'};
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Button({
  children,
  height,
  width,
  onClick,
  backgroundColor,
  color,
  text,
}: Props): JSX.Element {
  return (
    <div className="wrapper">
      <StyledButton
        onClick={onClick}
        backgroundColor={backgroundColor}
        height={height}
        width={width}
        color={color}
        text={text}
      >
        {text || children}
      </StyledButton>
    </div>
  );
}
