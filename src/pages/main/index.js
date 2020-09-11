import React from "react";
import { Header, Footer, Button } from "../../components/index";
import { Container, Product, Img, Figcaption, Flex, Price } from "./styles";
import exemple from "../../assets/imagem-ficticia.jpg";
import { products } from "./products";

const handleProducts = ({ idProduct, color, description, unitaryValue }) => (
  <Product key={idProduct}>
    <Img src={exemple} />
    <Figcaption>{color}</Figcaption>
    <Flex>
      <Price>R${unitaryValue}</Price>
      <Button>Comprar</Button>
    </Flex>
  </Product>
);

const Main = () => (
  <>
    <Header />
    <Container>{products.map(handleProducts)}</Container>
    <Flex className="before-after">
      <Button>Anterior</Button>
      <Button>Próxima</Button>
    </Flex>
    <Footer />
  </>
);

export default Main;
