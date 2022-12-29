import React from 'react';
import styled from 'styled-components';
import PasswordIcon from '@/assets/password-show.svg';
// usando export para conjtrnar um bug do eslint
export interface Props {
  type: string;
  placeholder?: string;
  width: string;
  label?: string;
  innerRef?: React.RefObject<HTMLInputElement>;
  error?: string;
}
const StyledInput = styled.input<Props>`
  border: none;
  background-color: #1E1F2F;
  height: 50px;
  width: ${(props) => props.width || '200px'};
  border-radius: 5px;
  color: white;
  padding-left: 16px;
  font-size: 12px;
  font-weight: 400;
  box-sizing: border-box;
  font-family: 'Raleway', sans-serif;
  border: ${(props) => (props.error ? '3px solid #E93F78' : 'none')}

  `;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 500px;
  `;
const Label = styled.span`
  font-size: 16px;
  line-height: 110%;
  margin-bottom: 8px;
  margin-left: 10px;
  `;
const PasswordIconWrapper = styled.img`
  position: absolute;
  right: 16px;
  top: 45px;

  `;
const ErrorMessage = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: #E93F78;
  margin-top: 8px;
  margin-left: 20px;
  `;

export default function Input({
  type,
  placeholder,
  width,
  label,
  innerRef,
  error,
}: Props): JSX.Element {
  const [value, setValue] = React.useState('');

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = event.target.value;
    setValue(inputText);
  };

  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      {type === 'password' && <PasswordIconWrapper src={PasswordIcon} alt="" />}
      <StyledInput
        type={type}
        width={width}
        value={value}
        placeholder={placeholder}
        onChange={inputHandler}
        ref={innerRef}
        error={error}
      />

      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
    </Wrapper>

  );
}
