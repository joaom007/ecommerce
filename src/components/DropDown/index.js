import React from "react";
import { Container, Drop, Label, Menu, SubMenu } from "./styles";

const DropDown = () => (
  <Container className="container">
    <nav>
      <Drop className="dropdown">
        <Label className="dropdown-label">Registrar </Label>
        <Menu className="dropdown-menu">
          <SubMenu className="submenu">
            <li>
              <a href="/register">Pessoa Física</a>
            </li>
            <li>
              <a href="/brewers">Pessoa Jurídica</a>
            </li>
          </SubMenu>
        </Menu>
      </Drop>
    </nav>
  </Container>
);

export default DropDown;
