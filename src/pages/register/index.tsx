import React from 'react';
import styled from 'styled-components';
import Input from '@/components/elements/input';
import Button from '@/components/elements/button';

const NameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
`;
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export default function Register(): JSX.Element {
  return (
    <FormWrapper>
      <h1>CADASTRO</h1>
      <NameWrapper>
        <Input type="text" placeholder="Primeiro nome" />
        <Input type="text" placeholder="Último nome" />
      </NameWrapper>
      <span>seu email</span>
      <Input type="email" placeholder="Seu@email.com" />
      <Input type="password" placeholder="******" />
      <Input type="password" placeholder="******" />
      <Button
        backgroundColor="white"
        width="400px"
        onClick={() => {
          console.log('clicou');
        }}
      >
        Criar minha conta aca.so
      </Button>
    </FormWrapper>

  );
}
