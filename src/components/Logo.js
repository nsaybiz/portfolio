import React from "react";
import styled from "styled-components";
import { darkTheme } from "../Themes";

const CreateLogo = styled.h1`
  display: inline-block;
  color: ${(props) =>
    props.color === "dark" ? darkTheme.text : darkTheme.body};
  font-family: "Pacifico", cursive;
  font-weight: 600;

  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
`;
const Logo = (props) => {
  return <CreateLogo color={props.color}>AY</CreateLogo>;
};

export default Logo;
