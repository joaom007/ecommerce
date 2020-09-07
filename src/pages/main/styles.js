import styled from "styled-components";

export const Container = styled.main`
  background: #e3f5f7;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2em;
  padding: 2em 2em;
  margin: 0 5vw;

  @media (max-width: 1150px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0.5em;
  border: 3px solid gray;
  border-radius: 0 2em 2em;
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
  margin: 0.5em auto;

  &.before-after {
    justify-content: center;
    margin: 0 5vw;
    border: 1px solid gray;
    padding: 0.5em 0;
  }
`;

export const Price = styled.h3``;
