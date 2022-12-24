import React from 'react';
import styled from 'styled-components';
import Input from '@/components/elements/input';
import Button from '@/components/elements/button';
import Logo from '../../assets/negative-logo.svg';

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
  & > * {
    margin-bottom: 40px;
  }
  & > *:last-child {
    margin-bottom: 0px;
`;
const StyledTitle = styled.h1`
  font-size: 50px;
  line-height: 150%;
  font-weight: 600;
  color: white;
  margin-bottom: 120px;
`;
const LogoComponent = styled.img`
    margin: 60px 0px;
`;
// adicionar svg de password e logo
export default function Register(): JSX.Element {
  return (
    <FormWrapper>

      <LogoComponent src={Logo} alt="Logo-aca.so" />
      <StyledTitle>C A D A S T R O</StyledTitle>
      <NameWrapper>
        <Input type="text" placeholder="Primeiro nome" width="230px" label="Primeiro nome*" />
        <Input type="text" placeholder="Último nome" width="230px" label="Último nome*" />
      </NameWrapper>
      <Input type="email" placeholder="Seu@email.com" width="500px" label="E-mail*" />
      <Input type="password" placeholder="******" width="500px" label="Senha*" />
      <Input type="password" placeholder="******" width="500px" label="Confirme a senha*" />
      <Button
        backgroundColor="white"
        color="black"
        width="400px"
        onClick={() => {
        }}
      >
        Criar minha conta aca.so
      </Button>
    </FormWrapper>

  );
}
