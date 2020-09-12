import React, { useState } from "react";
import { Container, Drop, Label, Menu, SubMenu } from "./styles";
import FormCustomer from "../FormCustomer";

const DropDown = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <Container className="container">
        <nav>
          <Drop className="dropdown">
            <Label className="dropdown-label">Registrar </Label>
            <Menu className="dropdown-menu">
              <SubMenu className="submenu">
                <li>
                  <button onClick={toggleModal}>Pessoa Física</button>
                </li>
                <li>
                  <button>Pessoa Jurídica</button>
                </li>
              </SubMenu>
            </Menu>
          </Drop>
        </nav>
      </Container>
      {isOpen ? (
        <FormCustomer toggle={toggleModal} isOpen={isOpen}></FormCustomer>
      ) : null}
    </>
  );
};

export default DropDown;
