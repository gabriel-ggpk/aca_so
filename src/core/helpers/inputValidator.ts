import joi from 'joi';

const loginSchema = joi.object({
  email: joi.string().email({ tlds: { allow: false } }).required().messages({
    'string.email': 'E-mail inválido.',
    'string.empty': 'Informe um E-mail.',
  }),
  password: joi.string().required().messages({ 'string.empty': 'Informe sua senha.' }),
});

const registerSchema = joi.object({
  firstName: joi.string().required().messages({ 'string.empty': 'Informe seu primeiro nome.' }),
  lastName: joi.string().required().messages({ 'string.empty': 'Informe seu sobrenome.' }),
  email: joi.string().email({ tlds: { allow: false } }).required().messages({
    'string.email': 'E-mail inválido',
    'string.empty': 'Informe um E-mail',
  }),
  password: joi.string().pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-z\d\W]{6,}$/).required().messages({
    'string.pattern.base': 'Sua senha precisa conter pelo menos 6 caracteres, com uma letra e um número.',
    'string.empty': 'Informe sua senha.',
  }),
  confirmPassword: joi.any().valid(joi.ref('password')).required().messages({
    'any.only': 'Senhas não coincidem.',
  }),
});
const verificationSchema = joi.object({
  code: joi.string().required().messages({ 'string.empty': 'Informe seu código de confirmação.' }),
});
export default function validateInput(type: string, data: object) {
  let schema = null;
  switch (type) {
    case 'login':
      schema = loginSchema;
      break;
    case 'register':
      schema = registerSchema;
      break;
    case 'verification':
      schema = verificationSchema;
      break;
    default:
      return { triggerInput: null, errorMessage: null };
  }
  const result = schema.validate(data);
  const triggerInput = result.error?.details[0].context?.key;
  const errorMessage = result.error?.details[0].message;
  return { triggerInput, errorMessage };
}
