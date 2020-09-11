import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../Button";
import {
  FlexContainer,
  GridContainer,
  Title,
  StyledTerms,
  DivBackDrop,
} from "./styles";

const FormCustomer = () => (
  <Formik
    initialValues={{
      name: "",
      email: "",
      cpf: "",
      rg: "",
      phone: "",
      birthday: "",
      password: "",
      district: "",
      number: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
    }}
    validationSchema={Yup.object({
      name: Yup.string()
        .max(40, "O nome deve ter 40 caracteres ou mais")
        .required("*Obrigatório"),
      email: Yup.string().email("Email inválido").required("*Obrigatório"),
      cpf: Yup.string()
        .max(11, "O número máximo de caracteres e 11")
        .required("*Obrigatório"),
      phone: Yup.string()
        .max(
          11,
          "o número excede o valor máximo permitido de caracteres de 11 dígitos"
        )
        .required("*Obrigatório"),
      rg: Yup.string()
        .max(9, "Número máximo excedido")
        .required("* campo obrigatório"),
      birthday: Yup.date().required("* campo data obrigatório"),
      district: Yup.string().required("* campo obrigatório"),
      password: Yup.string().required("* Obrigatório"),
      number: Yup.string()
        .max(5, "Número máximo de 5 carácteres")
        .required("* Obrigatório"),
      street: Yup.string()
        .max(100, "Número máximo de 100 caracteres excedido")
        .required(),
      city: Yup.string()
        .max(45, "Número máxido de 45 caractere excedido")
        .required("* Campo obrigatório"),
      state: Yup.string()
        .max(2, "São permitidos apenas dois caracteres")
        .required("* Campo obrigatório"),
      zipCode: Yup.string()
        .max(9, "Número máxido de 9 caracteres excedido")
        .required("* Campo obrigatório"),
      acceptedTerms: Yup.boolean()
        .required("*Obrigatório")
        .oneOf([true], "Você deve aceitar os termos e condições."),
    })}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    <Form>
      <DivBackDrop></DivBackDrop>
      <GridContainer>
        <Title className="title">Pessoa Física</Title>
        <FlexContainer className="name">
          <label htmlFor="name">Nome:</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" />
        </FlexContainer>
        <FlexContainer className="email">
          <label htmlFor="email">Email:</label>
          <Field name="email" type="email" />
          <ErrorMessage name="name" />
        </FlexContainer>
        <FlexContainer className="cpf">
          <label htmlFor="cpf">CPF:</label>
          <Field name="cpf" type="text" />
          <ErrorMessage name="cpf" />
        </FlexContainer>
        <FlexContainer className="rg">
          <label htmlFor="rg">RG:</label>
          <Field name="rg" type="text" />
          <ErrorMessage name="rg" />
        </FlexContainer>
        <FlexContainer className="phone">
          <label htmlFor="phone">Telefone:</label>
          <Field name="phone" type="text" />
          <ErrorMessage name="phone" />
        </FlexContainer>
        <FlexContainer className="bithday">
          <label htmlFor="birthday">Data de Nascimento:</label>
          <Field name="birthday" type="date" />
          <ErrorMessage name="birthday" />
        </FlexContainer>
        <FlexContainer className="password">
          <label htmlFor="password">Senha:</label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" />
        </FlexContainer>
        <Title className="address">Endereço:</Title>
        <FlexContainer className="district">
          <label htmlFor="district">Bairro:</label>
          <Field name="district" type="text" />
          <ErrorMessage name="district" />
        </FlexContainer>
        <FlexContainer className="street">
          <label htmlFor="street">Rua:</label>
          <Field name="street" type="text" />
          <ErrorMessage name="street" />
        </FlexContainer>
        <FlexContainer className="number">
          <label htmlFor="number">Número:</label>
          <Field name="number" type="text" />
          <ErrorMessage name="number" />
        </FlexContainer>
        <FlexContainer className="city">
          <label htmlFor="city">Cidade:</label>
          <Field name="city" type="text" />
          <ErrorMessage name="city" />
        </FlexContainer>
        <FlexContainer className="state">
          <label htmlFor="state">Estado:</label>
          <Field name="state" type="text" />
          <ErrorMessage name="state" />
        </FlexContainer>
        <FlexContainer className="zipCode">
          <label htmlFor="zipCode">CEP:</label>
          <Field name="zipCode" type="text" />
          <ErrorMessage name="zipCode" />
        </FlexContainer>
        <FlexContainer className="terms" row>
          <StyledTerms>
            <Field name="acceptedTerms" component="input" type="checkbox" />
            <label htmlFor="acceptedTerms">Aceito os termos e condições</label>
          </StyledTerms>
          <ErrorMessage name="acceptedTerms" />
        </FlexContainer>
        <FlexContainer className="submit">
          <Button margin="auto" type="submit">
            Submit
          </Button>
        </FlexContainer>
      </GridContainer>
    </Form>
  </Formik>
);

export default FormCustomer;
