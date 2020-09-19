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
`

export const Container = styled.div`
  min-height: 60vw;
`
export const FlexRow = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 640px) {
    flex-direction: row;
    margin: 0 2em;
    .flexOne {
      flex: 2;
    }
    .flexTwo {
      flex: 4;
    }
  }
`
export const DivFlex = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  border: 2px solid gray;
  padding: 0.5em;
`
export const Img = styled.img`
  width: 100%;
`
export const FigCaption = styled.figcaption`
  padding: 0.3em 0.8em;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  text-align: center;
  :first-letter {
    text-transform: uppercase;
    font-weight: bold;
  }
`
export const DivRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
`
export const TitlePrice = styled.h3``

export const DivButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const TitleDetails = styled.h4`
  font-weight: normal;
  margin-top: 0.5em;
`

export const Strongest = styled.strong`
  text-transform: uppercase;
`

export const RemoveButton = styled.button`
  display: inline-block;
  width: 3em;
  height: 2.6em;
  top: 0.5em;
`

export const Link = styled.a`
  text-decoration: none;
`
