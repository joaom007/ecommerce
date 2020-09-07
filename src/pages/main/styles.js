import styled from "styled-components";

export const Container = styled.main`
  background: #e3f5f7;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2em;
  padding: 2em 2em;
  margin: 0 5vw;
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Img = styled.img`
  width: 300px;
  object-fit: cover;
  border-top-right-radius: 2em;
`;

export const Figcaption = styled.figcaption`
  padding: 0.3em 0.8em;
  width: 300px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  text-align: right;
  border-bottom-right-radius: 2em;
  border-bottom-left-radius: 2em;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Price = styled.h3``;
