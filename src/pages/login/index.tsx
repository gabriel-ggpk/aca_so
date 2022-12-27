import React, { useRef, useState } from 'react';
import Logo from '@/assets/negative-logo.svg';
import CompanyLogo from '@/components/templates/styledComponents/companyLogo';
import FormWrapper from '@/components/templates/styledComponents/formWrapper';
import FormTitle from '@/components/templates/styledComponents/formTitle';
import Input from '@/components/elements/input';
import Button from '@/components/elements/button';
import validateInput from '@/core/helpers/inputValidator';
import LoginInfo from '@/core/interfaces/forms/login';

function Login(): JSX.Element {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [inputError, setInputError] = useState(
    {
      email: '',
      password: '',
    } as Partial<LoginInfo>,
  );
  return (
    <FormWrapper>
      <CompanyLogo src={Logo} alt="Logo-aca.so" />
      <FormTitle>L O G I N</FormTitle>
      <Input type="email" placeholder="Seu@email.com" width="500px" label="E-mail" innerRef={emailRef} error={inputError?.email} />
      <Input type="password" placeholder="******" width="500px" label="Senha" innerRef={passwordRef} error={inputError?.password} />
      <Button
        backgroundColor="white"
        color="black"
        width="400px"
        onClick={() => {
          const { triggerInput, errorMessage } = validateInput('login', {
            email: emailRef.current?.value,
            password: passwordRef.current?.value,
          });
          if (triggerInput && triggerInput !== '') {
            setInputError({ [triggerInput]: errorMessage });
          }
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
