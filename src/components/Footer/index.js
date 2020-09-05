import React from "react";
import { Logo, Div, Link, Title, Nav, Img, Copyright } from "./styles.js";
import Facebook from "./img/facebook.svg";
import Instagram from "./img/instagram.svg";
import Twitter from "./img/twitter.svg";
import { Button } from "components";

const handleItens = ({ title, itens }, index) => (
  <div style={{ style: Div }} key={index}>
    <Title>{title}</Title>
    {itens.map((item, index) => (
      <Link href="/" key={`item-${index}`}>
        {item}
      </Link>
    ))}
  </div>
);

const footerItens = [
  { title: "Início", itens: ["Home", "Seja nosso parceiro"] },
  {
    title: "Sobre nós",
    itens: ["Informações sobre a empresa", "Contato", "Blog"],
  },
  { title: "Suporte", itens: ["FAQ", "Telefone", "Chat"] },
];

const Footer = () => (
  <>
    <Nav>
      <div>
        <Logo>MGAJ</Logo>
      </div>
      {footerItens.map(handleItens)}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>
          <Img src={Facebook} alt="facebook-link"></Img>
          <Img src={Instagram} alt="twitter-link"></Img>
          <Img src={Twitter} alt="twitter-link"></Img>
        </div>
        <Button primary style={{ marginTop: "2em" }}>
          Contato
        </Button>
      </div>
    </Nav>
    <Copyright>GAJ Soluções em Ecommerce @2020. All rights reserved</Copyright>
  </>
);

export default Footer;
