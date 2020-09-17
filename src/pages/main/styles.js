import styled from 'styled-components'

export const Container = styled.main`
  background: #e3f5f7;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2em;
  padding: 2em 2em;
  margin: 0 5vw;
  min-height: 90vw;

  @media (max-width: 1150px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0.5em;
  border: 3px solid gray;
  border-radius: 0 2em 2em;
`

export const Img = styled.img`
  width: 100%;
  object-fit: cover;
  border-top-right-radius: 2em;
`
export const ResponsiveDiv = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 360px) {
    max-width: 220px;
  }
`

export const Figcaption = styled.figcaption`
  padding: 0.3em 0.8em;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  text-align: right;
  border-bottom-right-radius: 2em;
  border-bottom-left-radius: 2em;
`

export const Flex = styled.div`
  display: flex;
  margin: 0.5em auto;

  &.before-after {
    justify-content: center;
    margin: 0 5vw;
    border: 1px solid gray;
    padding: 0.5em 0;
  }
`

export const Link = styled.a`
  text-decoration: none;
  width: 6em;
  margin: auto 0.5em;
  border: 1px solid gray;
  border-radius: 1em;
  padding: 0.5em 0.8em;
  background: rgb(189, 230, 224);
  background: linear-gradient(
    90deg,
    rgba(189, 230, 224, 1) 0%,
    rgba(176, 198, 194, 1) 35%,
    rgba(176, 198, 194, 1) 100%
  );
  color: white;
  font-weight: bold;
  cursor: pointer;
  font-size: 0.8rem;
  transition: 0.5s;

  &:hover {
    :not(:disabled) {
      background: rgb(223, 237, 238);
      background: linear-gradient(
        90deg,
        rgba(223, 237, 238, 1) 0%,
        rgba(235, 235, 235, 1) 35%,
        rgba(210, 218, 219, 1) 100%
      );
      color: gray;
      border: 1px solid white;
    }

`

export const Price = styled.h3``
