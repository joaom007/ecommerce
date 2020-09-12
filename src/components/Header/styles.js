import styled from 'styled-components'

export const Logo = styled.h1`
  color: white;
  &::first-letter {
    font-size: 2em;
    color: gray;
    text-shadow: 1px 1px orange;
  }
`

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

  @media (max-width: 600px) {
    flex-direction: column;
    div {
      margin-top: 0.5em;
    }
  }
`
