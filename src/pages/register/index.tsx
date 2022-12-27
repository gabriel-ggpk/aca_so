import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Input from '@/components/elements/input';
import Button from '@/components/elements/button';
import Logo from '../../assets/negative-logo.svg';
import CompanyLogo from '@/components/templates/styledComponents/companyLogo';
import FormWrapper from '@/components/templates/styledComponents/formWrapper';
import FormTitle from '@/components/templates/styledComponents/formTitle';
import validateInput from '@/core/helpers/inputValidator';
import RegisterInfo from '@/core/interfaces/forms/register';
import CreateUserServices from '@/core/service/createUser';

const NameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
`;

// adicionar svg de password e logo
export default function Register(): JSX.Element {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
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
          const data = await CreateUserServices.createUser({
            firstName: firstNameRef.current?.value,
            lastName: lastNameRef.current?.value,
            email: emailRef.current?.value,
            password: passwordRef.current?.value,
            confirmPassword: confirmPasswordRef.current?.value,
          });
          if (data && data.message) {
            setReqError(data.message);
          }
        }}
        font="Montserrat"
        fontWeigth="700"
      >
        Criar minha conta aca.so
      </Button>
    </FormWrapper>

  );
}
