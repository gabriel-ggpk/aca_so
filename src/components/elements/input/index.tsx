import React from 'react';
import styled from 'styled-components';
// usando export para conjtrnar um bug do eslint
export interface Props {
  type: string;
  placeholder?: string;
  width: string;
  label?: string;
}
const StyledInput = styled.input<Props>`
  border: none;
  background-color: #1E1F2F;
  height: 50px;
  width: ${(props) => props.width || '200px'};
  border-radius: 5px;
  color: white;
  padding: 16px 16px 10px 16px;
  font-size: 16px;
  box-sizing: border-box;
  `;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  `;
export default function Input({
  type,
  placeholder,
  width,
  label,
}: Props): JSX.Element {
  const [value, setValue] = React.useState('');

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = event.target.value;
    setValue(inputText);
  };

  return (
    <Wrapper>
      {label && <span>{label}</span>}
      <StyledInput
        type={type}
        width={width}
        value={value}
        placeholder={placeholder}
        onChange={inputHandler}
      />

    </Wrapper>

  );
}
