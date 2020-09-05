import React from "react";
import { Logo } from "./styles";
import { Input, Button } from "components";
import { Nav } from "./styles";

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
