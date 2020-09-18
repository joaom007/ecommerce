import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { DivColumn, StyledLabel, DivLogin, Link, Lock, Nav } from './styles'
import { Button, Logo, Footer } from '../../components/index'
import * as Yup from 'yup'
import { validate } from './validate'
import api from '../../services/api'

const Login = () => {
  const handleLogin = async () => {
    const pf = await api.get('/pessoaFisica')
    const pj = await api.get('/pessoaJuridica')
    const customers = [...pf.data, ...pj.data]
    customers.map(({ email, password }) =>
      console.log(`Usuário ${email} Senha ${password}`)
    )
  }
  const handleOnSubmit = async ({ email, password }, actions) => {
    alert(JSON.stringify(email))
    handleLogin()
  }
  return (
    <>
      <Nav>
        <Logo />
      </Nav>
      <Formik
        initialValues={{
          email: 'gustavocampos@gustavo.com',
          password: 'alalaala',
        }}
        validationSchema={Yup.object(validate)}
        onSubmit={handleOnSubmit}
      >
        <Form>
          <DivLogin>
            <Lock className="lock" />
            <DivColumn>
              <StyledLabel htmlFor="email">Email:</StyledLabel>
              <Field name="email" type="text" />
              <ErrorMessage name="email" />
              <StyledLabel htmlFor="passwor">Senha:</StyledLabel>
              <Field name="password" type="password" />
              <ErrorMessage name="password" />
              <Link href="">Registrar!</Link>
              <Link href="">Esqueci a senha!</Link>
            </DivColumn>
            <DivColumn>
              <Button type="submit">Submit</Button>
            </DivColumn>
          </DivLogin>
        </Form>
      </Formik>
      <Footer />
    </>
  )
}

export default Login
