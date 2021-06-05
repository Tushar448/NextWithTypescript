import { string, object, ref } from 'yup';


export const loginSchema = (errors: { username: string; password: string }) => {
    return object().shape({
      username: string().required(errors.username).trim(),
      password: string().required(errors.password).trim(),
    });
  };

  export const resetPasswordSchema = (errors: {
    password: string;
    confirmPassword: string;
  }) => {
    return object().shape({
      password: string().required(errors.password),
      confirmPassword: string()
        .required(errors.confirmPassword)
        .oneOf([ref('password'), null], errors.confirmPassword)
        .trim(),
    });
  };

  export const forgotPassword = (errors: {
    email: string;
    invalidEmail: string;
  }) => {
    return object().shape({
      email: string()
        .email(errors.invalidEmail)
        .required(errors.email)
        .trim()
    });
  };

  export const registrationSchema = (errors: { name: string; password: string, email: string, invalidEmail: string, role: string }) => {
    return object().shape({
      name: string().required(errors.name).trim(),
      password: string().required(errors.password).trim(),
      email: string()
        .email(errors.invalidEmail)
        .required(errors.email)
        .trim(),
        role: string().required(errors.role).trim(),
    });
  };