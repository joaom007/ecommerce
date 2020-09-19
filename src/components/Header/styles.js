import styled from 'styled-components'

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
export const Link = styled.a`
  text-decoration: none;
  align-self: center;
`

export const GreenNumber = styled.h3`
  color: green;
  display: inline-block;
  margin-left: 0.3em;
  background: white;
  padding: 0 0.3em;
`
