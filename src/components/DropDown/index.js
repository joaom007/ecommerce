import React, { useState } from 'react'
import { Container, Drop, Label, Menu, SubMenu } from './styles'
import FormCustomer from '../FormCustomer'
import FormEnterprise from '../FormEnterprise'

const DropDown = () => {
  const [isOpenOne, setOpenOne] = useState(false)
  const [isOpenTwo, setOpenTwo] = useState(false)

  const toggleModalOne = () => {
    setOpenOne(!isOpenOne)
  }

  const toggleModalTwo = () => {
    setOpenTwo(!isOpenTwo)
  }

  return (
    <>
      <Container className="container">
        <nav>
          <Drop className="dropdown">
            <Label className="dropdown-label">Registrar </Label>
            <Menu className="dropdown-menu">
              <SubMenu className="submenu">
                <li>
                  <button onClick={toggleModalOne}>Pessoa Física</button>
                </li>
                <li>
                  <button onClick={toggleModalTwo}>Pessoa Jurídica</button>
                </li>
              </SubMenu>
            </Menu>
          </Drop>
        </nav>
      </Container>
      {isOpenOne ? (
        <FormCustomer toggle={toggleModalOne} isOpen={isOpenOne}></FormCustomer>
      ) : null}
      {isOpenTwo ? (
        <FormEnterprise
          toggle={toggleModalTwo}
          isOpen={isOpenTwo}
        ></FormEnterprise>
      ) : null}
    </>
  )
}

export default DropDown
