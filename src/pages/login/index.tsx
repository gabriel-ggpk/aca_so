import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '@/assets/negative-logo.svg';
import CompanyLogo from '@/components/styledComponents/companyLogo';
import FormWrapper from '@/components/styledComponents/formWrapper';
import { FormTitle, FormTitleSmall } from '@/components/styledComponents/formTitle';
import Input from '@/components/input';
import Button from '@/components/button';
import validateInput from '@/core/helpers/inputValidator';
import LoginInfo from '@/core/interfaces/forms/login';
import AuthServices from '@/core/service/auth';
import { useUserContext } from '@/core/context/userContext';
import LocalService from '@/core/service/locals';

function Login(): JSX.Element {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const userContext = useUserContext();
  const [inputError, setInputError] = useState(
    {
      email: '',
      password: '',
    } as Partial<LoginInfo>,
  );
  const [reqError, setReqError] = useState('');
  return (
    <FormWrapper>
      <CompanyLogo src={Logo} alt="Logo-aca.so" />
      <FormTitle>L O G I N</FormTitle>
      <FormTitleSmall>Login</FormTitleSmall>
      <Input type="email" placeholder="Seu@email.com" width="500px" label="E-mail" innerRef={emailRef} error={inputError?.email} />
      <Input type="password" placeholder="******" width="500px" label="Senha" innerRef={passwordRef} error={inputError?.password} />
      <Button
        backgroundColor="white"
        color="black"
        width="400px"
        label={reqError}
        labelColor="red"
        onClick={async () => {
          const { triggerInput, errorMessage } = validateInput('login', {
            email: emailRef.current?.value,
            password: passwordRef.current?.value,
          });
          if (triggerInput && triggerInput !== '') {
            setInputError({ [triggerInput]: errorMessage });
            return;
          }
          setInputError({});
          const result = await AuthServices.login({
            email: emailRef.current?.value,
            password: passwordRef.current?.value,
          });
          if (!result?.error) {
            userContext.setUser(result?.data.user);
            LocalService.addLocalUser(result?.data);
            navigate('/home');
          }
          if (result?.error === '0002') {
            setInputError({ password: result?.message });
            return;
          }
          if (result?.error === '0008') {
            setInputError({ email: result?.message });
            return;
          }
          setReqError(result?.message || 'Erro ao realizar login');
        }}
        fontWeigth="700"
      >
        Entrar
      </Button>
      <Button
        backgroundColor="rgba(255, 255, 255, 0.1)"
        width="400px"
        onClick={() => {
          navigate('/register');
        }}
        label="Não possui uma conta?"
        fontWeigth="700"
      >
        Criar minha conta em aca.so
      </Button>
    </FormWrapper>

  );
}
export default Login;
