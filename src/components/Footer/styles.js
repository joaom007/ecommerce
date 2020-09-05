import styled from "styled-components";

export const Logo = styled.h1`
  color: white;
  &::first-letter {
    font-size: 2em;
    color: gray;
    text-shadow: 1px 1px orange;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Title = styled.h4`
  margin: 0;
  color: gray;
  font-weight: bold;
  text-shadow: 1px 1px 0;
`;

export const Link = styled.a`
  text-decoration: none;
  color: white;
  display: block;
  margin: 0.5em 0;
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
  align-items: flex-start;
  justify-content: space-between;
  padding: 0.5em 1em;
`;

export const Img = styled.img`
  width: 40px;
  height: 40px;
  margin: 0 0.5em;
`;

export const Copyright = styled.p`
  color: gray;
  font-size: 0.9em;
  background-color: black;
  margin: 0;
  text-align: center;
`;
