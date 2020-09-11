import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  max-width: 1000px;
  margin: 1em auto;
  font-size: 0.8rem;
`;

export const Drop = styled.div`
  display: inline-block;
  position: relative;

  :hover .dropdown-label::after {
    top: 0.7em;
    border-color: transparent transparent black;
  }

  :hover .dropdown-menu {
    display: block;
  }
`;

export const Label = styled.div`
  padding: 0.5em 2em 0.5em 1.5em;
  border: 1px solid gray;
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
  border-top-left-radius: 1em;
  border-top-right-radius: 1em;

  ::after {
    content: "";
    position: absolute;
    right: 1em;
    top: 1em;
    border: 0.4em solid;
    border-color: black transparent transparent;
  }
`;

export const Menu = styled.div`
  display: none;
  position: absolute;
  left: 0;
  top: 2.1em;
  min-width: 100%;
  background-color: #eee;
`;

export const SubMenu = styled.ul`
  padding-left: 0;
  margin: 0;
  list-style-type: none;
  border: 1px solid #999;

  > li + li {
    border-top: 1px solid #999;
  }
  > li > a {
    display: block;
    padding: 0.5em 1.5em;
    background: rgb(189, 230, 224);
    background: linear-gradient(
      90deg,
      rgba(189, 230, 224, 1) 0%,
      rgba(176, 198, 194, 1) 35%,
      rgba(176, 198, 194, 1) 100%
    );
    color: white;
    font-weight: bold;
    text-decoration: none;
    border-bottom-left-radius: 5em;
  }
  > li > a:hover {
    background: rgb(223, 237, 238);
    background: linear-gradient(
      90deg,
      rgba(223, 237, 238, 1) 0%,
      rgba(235, 235, 235, 1) 35%,
      rgba(210, 218, 219, 1) 100%
    );
    color: gray;
  }
`;
