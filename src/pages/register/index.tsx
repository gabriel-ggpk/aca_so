import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '@/components/input';
import Button from '@/components/button';
import Logo from '../../assets/negative-logo.svg';
import CompanyLogo from '@/components/styledComponents/companyLogo';
import FormWrapper from '@/components/styledComponents/formWrapper';
import { FormTitle, FormTitleSmall } from '@/components/styledComponents/formTitle';
import validateInput from '@/core/helpers/inputValidator';
import RegisterInfo from '@/core/interfaces/forms/register';
import RegisterServices from '@/core/service/register';
import NameWrapper from './style';

// adicionar svg de password e logo
export default function Register(): JSX.Element {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [inputError, setInputError] = useState(
    {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      confirmPassword: '',
    } as Partial<RegisterInfo>,
  );

  const [reqError, setReqError] = useState('');

  return (
    <FormWrapper>
      <CompanyLogo src={Logo} alt="Logo-acaso" />
      <FormTitle>C A D A S T R O</FormTitle>
      <FormTitleSmall>Cadastro</FormTitleSmall>
      <NameWrapper>
        <Input type="text" placeholder="Primeiro nome" width="230px" label="Primeiro nome*" innerRef={firstNameRef} error={inputError?.firstName} />
        <Input type="text" placeholder="Último nome" width="230px" label="Último nome*" innerRef={lastNameRef} error={inputError?.lastName} />
      </NameWrapper>
      <Input type="email" placeholder="Seu@email.com" width="500px" label="E-mail*" innerRef={emailRef} error={inputError?.email} />
      <Input type="password" placeholder="******" width="500px" label="Senha*" innerRef={passwordRef} error={inputError?.password} />
      <Input type="password" placeholder="******" width="500px" label="Confirme a senha*" innerRef={confirmPasswordRef} error={inputError?.confirmPassword} />
      <Button
        backgroundColor="white"
        color="black"
        width="400px"
        label={reqError}
        labelColor="red"
        font="Montserrat"
        fontWeigth="700"
        onClick={async () => {
          const { triggerInput, errorMessage } = validateInput('register', {
            email: emailRef.current?.value,
            password: passwordRef.current?.value,
            firstName: firstNameRef.current?.value,
            lastName: lastNameRef.current?.value,
            confirmPassword: confirmPasswordRef.current?.value,
          });
          if (triggerInput && triggerInput !== '') {
            setInputError({ [triggerInput]: errorMessage });
            return;
          }
          setInputError({});
          const result = await RegisterServices.createUser({
            firstName: firstNameRef.current?.value,
            lastName: lastNameRef.current?.value,
            email: emailRef.current?.value,
            password: passwordRef.current?.value,
            confirmPassword: confirmPasswordRef.current?.value,
          });
          if (result?.data.code === '0009') {
            setReqError('E-mail já cadastrado');
            return;
          }
          if (result?.data.code === '0010') {
            setReqError('E-mail já cadastrado, mas não confirmado');
            await RegisterServices.resendVerificationEmail(emailRef.current?.value);
          }
          navigate(`/confirmEmail?email=${emailRef.current?.value}`);
        }}
      >
        Criar minha conta aca.so
      </Button>
      <Button width="400px" font="Raleway" fontWeigth="700" onClick={() => navigate('/')} backgroundColor="rgba(255, 255, 255, 0.1)">
        Voltar ao login
      </Button>
    </FormWrapper>

  );
}
