import React from 'react';
// usando export para conjtrnar um bug do eslint
export interface Props {
  type: string;
  placeholder?: string | 'Enter your email';
}

export default function Input({ type, placeholder }:Props): JSX.Element {
  const [value, setValue] = React.useState('');

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = event.target.value;
    setValue(inputText);
  };

  return (
    <div className="wrapper">
      <input className="input" type={type} value={value} placeholder={placeholder} onChange={inputHandler} />
    </div>
  );
}
