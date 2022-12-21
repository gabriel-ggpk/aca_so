import React from 'react';
import styled from 'styled-components';
// usando export para contornar um bug do eslint
export interface Props {
  children?: React.ReactNode;
  backgroundColor?: string;
  color: string;
  height: string;
  width: string;
  onClick: () => void;
}
const StyledButton = styled.div<Props>`
  background-color: ${(props) => props.backgroundColor || 'white'};
  color: ${(props) => props.color || 'white'};
  height: ${(props) => props.height || '50px'};
  width: ${(props) => props.width || '200px'};
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Button({
  children,
  color,
  height,
  width,
  onClick,
  backgroundColor,
}: Props): JSX.Element {
  return (
    <div className="wrapper">
      <StyledButton
        onClick={onClick}
        color={color}
        backgroundColor={backgroundColor}
        height={height}
        width={width}
      >
        {children}
      </StyledButton>
    </div>
  );
}
