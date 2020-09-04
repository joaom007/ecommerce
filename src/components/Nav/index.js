import styled from "styled-components";

const Nav = styled.nav`
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

export default Nav;
