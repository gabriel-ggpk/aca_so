import React from 'react';
import PasswordIcon from '@/assets/password-show.svg';
import { Props } from './interfaces';
import {
  Wrapper, Label, PasswordIconWrapper, StyledInput, ErrorMessage,
} from './style';
// usando export para conjtrnar um bug do eslint

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
