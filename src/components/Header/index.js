import React from "react";
import Button from "../Button";
import Logo from "../Logo";
import Nav from "../Nav";
import Input from "../Input";
import "./styles.css";

const Header = () => (
  <header>
    <Nav>
      <div>
        <Logo>MGAJ</Logo>
      </div>
      <div>
        <Input placeholder="pesquisar por produto..."></Input>
        <Button>Pesquisar</Button>
      </div>
      <div>
        <Button cart>C</Button>
        <Button primary>Login</Button>
        <Button>Registrar</Button>
      </div>
    </Nav>
  </header>
);

export default Header;
