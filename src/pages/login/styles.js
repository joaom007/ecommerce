import styled from 'styled-components'

export const DivLogin = styled.div`
  width: 80%;
  margin: 5em auto;
  background: #e3f5f7;
  max-width: 549px;
  padding: 0.875em 0.875em;

  > div + div {
    margin-top: 1em;

    button {
      align-self: center;
    }
  }

  .lock {
    margin: 0 auto 18%;
  }
`

export const DivColumn = styled.div`
  display: flex;
  flex-direction: column;

  > input + label {
    margin-top: 0.7em;
  }
`

export const StyledLabel = styled.label`
  color: gray;
`
export const Link = styled.a`
  margin-top: 0.5em;
  color: gray;
  align-self: flex-start;
  font-size: 0.9rem;
`
export const Lock = styled.div`
  font-size: 6px;
  position: relative;
  width: 18em;
  height: 13em;
  border-radius: 2em;
  top: 10em;
  box-sizing: border-box;
  border: 3.5em solid gray;
  border-right-width: 7.5em;
  border-left-width: 7.5em;
  margin: 0 0 6rem 0;

  :before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    border: 2.5em solid gray;
    width: 14em;
    height: 12em;
    left: 50%;
    margin-left: -7em;
    top: -12em;
    border-top-left-radius: 7em;
    border-top-right-radius: 7em;
  }

  :after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    border: 1em solid gray;
    width: 5em;
    height: 8em;
    border-radius: 2.5em;
    left: 50%;
    top: -1em;
    margin-left: -2.5em;
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
`
