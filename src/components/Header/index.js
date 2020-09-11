import React from "react";
import { Logo } from "./styles";
import { Input, Button, DropDown } from "components";
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
      <div style={{ display: "flex" }}>
        <Button cart>C</Button>
        <Button primary>Login</Button>
        <DropDown></DropDown>
      </div>
    </Nav>
  </header>
);

export default Header;
