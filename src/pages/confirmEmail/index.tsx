import React, { useEffect } from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { useNavigate } from 'react-router-dom';
import Logo from '@/assets/negative-logo.svg';
import CompanyLogo from '@/components/styledComponents/companyLogo';
import FormWrapper from '@/components/styledComponents/formWrapper';
import { FormTitle, FormTitleSmall } from '@/components/styledComponents/formTitle';
import Input from '@/components/input';
import Button from '@/components/button';
import validateInput from '@/core/helpers/inputValidator';
import VerificationInfo from '@/core/interfaces/forms/verification';
import RegisterServices from '@/core/service/register';

dayjs.extend(duration);

export default function ConfirmEmail(): JSX.Element {
  const [emailTimer, setEmailTimer] = React.useState(dayjs.duration(120, 'seconds'));
  const [resendEmail, setResendEmail] = React.useState(false);
  const [inputError, setInputError] = React.useState({} as Partial<VerificationInfo>);
  const [reqError, setReqError] = React.useState('');
  const navigate = useNavigate();
  const codeRef = React.useRef<HTMLInputElement>(null);
  const searchParams = new URLSearchParams(window.location.search);
  useEffect(() => {
    if (resendEmail) return;
    const countdown = setInterval(() => {
      setEmailTimer((timeLeft) => {
        if (timeLeft.asSeconds() === 1) {
          clearInterval(countdown);
          setResendEmail(true);
          return dayjs.duration(0, 'seconds');
        }
        return timeLeft.subtract(1, 'second');
      });
    }, 1000);
  }, [resendEmail]);
  return (
    <FormWrapper>
      <CompanyLogo src={Logo} alt="Logo-aca.so" />
      <FormTitle>
        {'C O N F I R M A R \n E - M A I L'}
      </FormTitle>
      <FormTitleSmall>{'Confirmar \n e-mail'}</FormTitleSmall>
      <Input type="email" placeholder="Digite o código recebido..." width="500px" label="Código" innerRef={codeRef} error={inputError.code} />
      <Button
        backgroundColor="white"
        color="black"
        width="400px"
        fontWeigth="700"
        labelColor="red"
        label={reqError}
        onClick={async () => {
          const { triggerInput, errorMessage } = validateInput('verification', {
            code: codeRef.current?.value,
          });
          if (triggerInput && triggerInput !== '') {
            setInputError({ [triggerInput]: errorMessage });
            setReqError('');
            return;
          }
          setInputError({});
          const result = await RegisterServices.verifyEmail({
            email: searchParams.get('email'),
            code: codeRef.current?.value,
          });
          if (result && result.message) {
            setReqError(result.message);
            return;
          }
          // adicionar o token no localstorage
          navigate('/');
        }}
      >
        Confirmar e-mail
      </Button>
      <Button
        backgroundColor="rgba(255, 255, 255, 0.1)"
        width="400px"
        fontWeigth="700"
        label="Não recebeu o código?"
        onClick={async () => {
          if (!resendEmail) return;
          setEmailTimer(dayjs.duration(120, 'seconds'));
          setResendEmail(false);
          const result = await RegisterServices.resendVerificationEmail({
            email: searchParams.get('email'),
          });
          if (result && result.message) {
            setReqError(result.message);
          }
        }}
      >
        {resendEmail ? 'Reenviar código' : `aguarde ${emailTimer.format('m:ss')} para reenviar`}
      </Button>

    </FormWrapper>
  );
}
