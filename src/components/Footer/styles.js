import styled from 'styled-components'

export const Div = styled.div`
  display: flex;
  flex-direction: row;
`

export const Title = styled.h4`
  font-weight: bold;
  text-shadow: 1px 1px 0;
`

export const Link = styled.a`
  text-decoration: none;
  color: white;
  display: block;
  margin: 0.5em 0;
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
  align-items: flex-start;
  justify-content: space-between;
  padding: 0.5em 1em;
  @media (max-width: 600px) {
    flex-direction: column;
    div {
      margin-top: 0.5em;
    }
  }
`

export const Img = styled.img`
  width: 40px;
  height: 40px;
  margin: 0 0.5em;
`

export const Copyright = styled.p`
  color: gray;
  font-size: 0.9em;
  background-color: black;
  margin: 0;
  text-align: center;
`
