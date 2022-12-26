import React from 'react';
import Logo from '@/assets/negative-logo.svg';
import CompanyLogo from '@/components/templates/styledComponents/companyLogo';
import FormWrapper from '@/components/templates/styledComponents/formWrapper';
import FormTitle from '@/components/templates/styledComponents/formTitle';
import Input from '@/components/elements/input';
import Button from '@/components/elements/button';

function Login(): JSX.Element {
  return (
    <FormWrapper>
      <CompanyLogo src={Logo} alt="Logo-aca.so" />
      <FormTitle>L O G I N</FormTitle>
      <Input type="email" placeholder="Seu@email.com" width="500px" label="E-mail" />
      <Input type="password" placeholder="******" width="500px" label="Senha" />
      <Button
        backgroundColor="white"
        color="black"
        width="400px"
        onClick={() => {
        }}
        fontWeigth="700"
      >
        Entrar
      </Button>
      <Button
        backgroundColor="rgba(255, 255, 255, 0.1)"
        width="400px"
        onClick={() => {
        }}
        fontWeigth="700"
      >
        Criar minha conta em aca.so
      </Button>
    </FormWrapper>

  );
}
export default Login;
