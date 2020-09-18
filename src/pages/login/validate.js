import * as Yup from 'yup'

export const validate = {
  email: Yup.string().email('Email inválido').required('*Obrigatório'),
  password: Yup.string().required('* Obrigatório'),
}
