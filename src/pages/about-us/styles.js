import styled, { css } from "styled-components";

export const Logo = styled.h1`
  color: white;
  &::first-letter {
    font-size: 2em;
    color: gray;
    text-shadow: 1px 1px orange;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(75, 189, 184, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  align-items: center;
  justify-content: space-between;
  padding: 0.5em 1em;
`;

export const Main = styled.main`
  background: #e3f5f7;
  display: flex;
  flex-direction: column;
  padding: 0 2em;
  margin: 0 5vw;
`;

export const Portfolio = styled.div`
  padding: 1em 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 0.5em;
  grid-auto-flow: dense;
  margin: 0 2em;
  justify-items: center;
  align-items: center;
`;

export const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  max-width: initial;
  display: inline-block;
  margin: 0;
  border: 1px solid gray;
  border-radius: 2em;
`;

export const Img = styled.img`
  flex: 1;
  border-radius: 50%;
`;

export const Figcaption = styled.figcaption`
  padding: 0.3em 0.8em;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  text-align: right;
  border-bottom-right-radius: 2em;
  border-bottom-left-radius: 2em;
`;

export const Article = styled.article`
  flex: 1;
  padding: 1em;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0;

  ${(props) =>
    props.customers &&
    css`
      text-align: center;
    `}
`;

export const List = styled.ul`
  padding: 0;
`;

export const Item = styled.li`
  list-style: none;
`;

export const Paragraph = styled.p`
  margin: 0.5em 0;
`;
