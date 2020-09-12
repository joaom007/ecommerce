import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../Button";
import { validate } from "./validate";
import {
  FlexContainer,
  GridContainer,
  Title,
  StyledTerms,
  DivBackDrop,
  CloseButton,
} from "./styles";

const FormCustomer = ({ isOpen, toggle }) => {
  return (
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
      validationSchema={Yup.object(validate)}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <DivBackDrop open={isOpen}></DivBackDrop>
        <GridContainer open={isOpen}>
          <CloseButton onClick={toggle}>x</CloseButton>
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
              <label htmlFor="acceptedTerms">
                Aceito os termos e condições
              </label>
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
};

export default FormCustomer;
