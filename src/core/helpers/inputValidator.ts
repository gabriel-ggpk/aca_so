import joi from 'joi';

const loginSchema = joi.object({
  email: joi.string().email({ tlds: { allow: false } }).required().messages({
    'string.email': 'Invalid email address',
    'string.empty': 'Email is required',
  }),
  password: joi.string().required().messages({ 'string.empty': 'Password is required' }),
});

const registerSchema = joi.object({
  firstName: joi.string().required().messages({ 'string.empty': 'First name is required' }),
  lastName: joi.string().required().messages({ 'string.empty': 'Last name is required' }),
  email: joi.string().email({ tlds: { allow: false } }).required().messages({
    'string.email': 'Invalid email address',
    'string.empty': 'Email is required',
  }),
  password: joi.string().pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-z\d\W]{6,}$/).required().messages({
    'string.pattern.base': 'Password must be at least 6 characters long and contain at least one letter and one number',
    'string.empty': 'Password is required',
  }),
  confirmPassword: joi.any().valid(joi.ref('password')).required().messages({
    'any.only': 'Passwords do not match',
  }),
});
const verificationSchema = joi.object({
  code: joi.string().required().messages({ 'string.empty': 'Code is required' }),
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
