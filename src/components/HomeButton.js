import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { HomeBtn } from "./Svgs";

const Home = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0%);

  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  padding: 0.3rem;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.text};
  width: 2.5rem;
  height: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  cursor: pointer;

  & > *:first-child {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    background-color: rgb(51, 164, 157);
    box-shadow: 0 0 8px 6px rgb(51, 164, 157, 0.3);
  }
`;
const HomeButton = () => {
  return (
    <Home>
      <NavLink to='/'>
        <HomeBtn />
      </NavLink>
    </Home>
  );
};

export default HomeButton;
