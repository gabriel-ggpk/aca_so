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
  const [showPassword, setShowPassword] = React.useState('');

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = event.target.value;
    setValue(inputText);
  };
  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      {type === 'password' && <PasswordIconWrapper src={PasswordIcon} alt="" onClick={() => { setShowPassword((show) => (show ? '' : 'text')); }} />}
      <StyledInput
        type={showPassword || type}
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
