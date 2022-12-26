import React from 'react';
import styled from 'styled-components';
import Input from '@/components/elements/input';
import Button from '@/components/elements/button';
import Logo from '../../assets/negative-logo.svg';
import CompanyLogo from '@/components/templates/styledComponents/companyLogo';
import FormWrapper from '@/components/templates/styledComponents/formWrapper';
import FormTitle from '@/components/templates/styledComponents/formTitle';

const NameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
`;

// adicionar svg de password e logo
export default function Register(): JSX.Element {
  return (
    <FormWrapper>
      <CompanyLogo src={Logo} alt="Logo-aca.so" />
      <FormTitle>C A D A S T R O</FormTitle>
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
        font="Montserrat"
        fontWeigth="700"
      >
        Criar minha conta aca.so
      </Button>
    </FormWrapper>

  );
}
