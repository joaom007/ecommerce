import * as Yup from 'yup'

export const validate = {
  email: Yup.string().email('Email inválido').required('*Obrigatório'),
  password: Yup.string().required('* Obrigatório'),
  token: Yup.string().min(25, 'Número mínimo de 25 caractere não atendido'),
  nameCustomer: Yup.string()
    .max(40, 'O nome deve ter 40 caracteres ou mais')
    .required('*Obrigatório'),
  CNPJ: Yup.string()
    .max(11, 'O número máximo de caracteres e 11')
    .required('*Obrigatório'),
  razaoSocial: Yup.string().required('*Obrigatório'),
  phone: Yup.string()
    .max(
      11,
      'o número excede o valor máximo permitido de caracteres de 11 dígitos'
    )
    .required('*Obrigatório'),
  district: Yup.string().required('* campo obrigatório'),
  number: Yup.string()
    .max(5, 'Número máximo de 5 carácteres')
    .required('* Obrigatório'),
  street: Yup.string()
    .max(100, 'Número máximo de 100 caracteres excedido')
    .required(),
  city: Yup.string()
    .max(45, 'Número máxido de 45 caractere excedido')
    .required('* Campo obrigatório'),
  state: Yup.string()
    .max(2, 'São permitidos apenas dois caracteres')
    .required('* Campo obrigatório'),
  zipCode: Yup.string()
    .max(8, 'Número máxido de 9 caracteres excedido')
    .required('* Campo obrigatório'),
  acceptedTerms: Yup.boolean()
    .required('*Obrigatório')
    .oneOf([true], 'Você deve aceitar os termos e condições.'),
}
