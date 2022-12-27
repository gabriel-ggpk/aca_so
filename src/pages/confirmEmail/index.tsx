import React, { useEffect } from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import Logo from '@/assets/negative-logo.svg';
import CompanyLogo from '@/components/templates/styledComponents/companyLogo';
import FormWrapper from '@/components/templates/styledComponents/formWrapper';
import FormTitle from '@/components/templates/styledComponents/formTitle';
import Input from '@/components/elements/input';
import Button from '@/components/elements/button';

dayjs.extend(duration);

export default function ConfirmEmail(): JSX.Element {
  const [emailTimer, setEmailTimer] = React.useState(dayjs.duration(2, 'seconds'));
  const [resendEmail, setResendEmail] = React.useState(false);
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
      <Input type="email" placeholder="Digite o código recebido..." width="500px" label="Código" />
      <Button
        backgroundColor="white"
        labelColor="black"
        width="400px"
        onClick={() => {}}
        fontWeigth="700"
      >
        Confirmar e-mail
      </Button>
      <Button
        backgroundColor="rgba(255, 255, 255, 0.1)"
        width="400px"
        fontWeigth="700"
        onClick={() => {
          if (!resendEmail) return;
          setEmailTimer(dayjs.duration(120, 'seconds'));
          setResendEmail(false);
        }}
      >
        {resendEmail ? 'Reenviar código' : `aguarde ${emailTimer.format('m:ss')} para reenviar`}
      </Button>
    </FormWrapper>
  );
}
