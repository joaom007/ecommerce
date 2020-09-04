import React from "react";
import Button from "../Button";
import "./styles.css";

const Header = () => (
  <header>
    <nav>
      <div>
        <h1>Logo</h1>
      </div>
      <div>
        <input placeholder="pesquisar por produto..."></input>
        <Button>Pesquisar</Button>
      </div>
      <div>
        <Button>Login</Button>
        <Button>Registrar</Button>
      </div>
    </nav>
  </header>
);

export default Header;
