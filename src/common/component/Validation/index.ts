import { string, object, ref } from 'yup';
const onlyStringRegExp = /^[a-zA-Z]+$/;


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
      password: string()
    .required(errors.password)
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Numeric and one special case Character"
    ),
      email: string()
        .email(errors.invalidEmail)
        .required(errors.email)
        .trim(),
        role: string().required(errors.role).trim(),
    });
  };

  export const addEmployeeSchema = (errors: { name: string; code: string, email: string, invalidEmail: string, role: string, gender: string, alphanemeric: string, dob: string, doj: string, salary: string }) => {
    return object().shape({
      name: string()
      .matches(onlyStringRegExp, errors.alphanemeric)
      .required(errors.name).trim(),
      code: string().required(errors.code).trim(),
      email: string()
        .email(errors.invalidEmail)
        .required(errors.email)
        .trim(),
        role: string().required(errors.role).trim(),
        gender: string().required(errors.gender).trim(),
        dob: string().required(errors.dob).trim(),
        doj: string().required(errors.doj).trim(),
        salary: string().required(errors.salary).trim(),

    });
  };