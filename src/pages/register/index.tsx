import React from 'react';
import styled from 'styled-components';
import Input from '@/components/elements/input';
import Button from '@/components/elements/button';

const NameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
`;
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
const StyledTitle = styled.h1`
  font-size: 32px;
  font-weight: 600;
  color: white;
  margin-bottom: 32px;
`;

export default function Register(): JSX.Element {
  return (
    <FormWrapper>
      <StyledTitle>CADASTRO</StyledTitle>
      <NameWrapper>
        <Input type="text" placeholder="Primeiro nome" width="200px" label="Primeiro nome*" />
        <Input type="text" placeholder="Último nome" width="200px" label="Último nome*" />
      </NameWrapper>
      <Input type="email" placeholder="Seu@email.com" width="500px" label="E-mail*" />
      <Input type="password" placeholder="******" width="500px" label="Senha*" />
      <Input type="password" placeholder="******" width="500px" label="Confirme a senha*" />
      <Button
        backgroundColor="white"
        color="black"
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
