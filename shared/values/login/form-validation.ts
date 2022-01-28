import * as yup from "yup";

export const signInSchema = yup.object().shape({
  email: yup.string().required('Required').email('Enter correct email'),
  password: yup.string().required('Required'),
});

export const signUpSchema = yup.object().shape({
  email: yup.string().required('Required').email('Enter correct email'),
  firstName: yup.string().required('Required'),
  lastName: yup.string().required('Required'),
  password: yup.string().required('Required'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords doesnt match'),
});