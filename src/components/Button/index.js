import React, { Component } from "react";
import "./styles.css";

const Button = ({ children, onClick }) => (
  <button onClick={onClick}>{children}</button>
);

export default Button;
