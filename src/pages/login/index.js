import React from 'react'
import { Formik, Form, Field } from 'formik'
import { DivColumn, StyledLabel, DivLogin, Link, Lock, Nav } from './styles'
import { Button, Logo, Footer } from '../../components/index'

const Login = () => {
  return (
    <>
      <Nav>
        <Logo />
      </Nav>
      <Formik>
        <Form>
          <DivLogin>
            <Lock className="lock" />
            <DivColumn>
              <StyledLabel htmlFor="email">Email:</StyledLabel>
              <Field name="email" type="text" />
              <StyledLabel htmlFor="senha">Senha:</StyledLabel>
              <Field name="senha" type="password" />
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
