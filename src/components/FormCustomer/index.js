import React from "react";
import { Formik, Field, Form } from "formik";

const FormCustomer = (props) =>
  props.primary ? (
    <Formik
      initialValues={{ name: "", email: "", cpf: "", phone: "" }}
      onSubmit={async (values) => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <Field name="name" type="text" />
        <Field name="email" type="email" />
        <Field name="cpf" type="text" />
        <Field name="phone" type="phone" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  ) : (
    <h1>Pessoa Juridica</h1>
  );

export default FormCustomer;
