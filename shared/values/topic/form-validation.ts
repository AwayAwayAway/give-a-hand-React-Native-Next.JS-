import * as yup from "yup";

export const topicValidationSchema = yup.object().shape({
  title: yup.string().required('Required'),
  section: yup.string().required('Required'),
  description: yup.string().required('Required'),
});