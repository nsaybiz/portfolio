import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const BottombarContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const ABOUT = styled(NavLink)`
  color: ${(props) => (props.clicked ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;

  &:hover {
    color: ${(props) => (props.clicked ? props.theme.body : props.theme.text)};
  }
`;
const SKILLS = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;

  &:hover {
    color: ${(props) => props.theme.text};
  }
`;
const BottomBar = (props) => {
  return (
    <BottombarContainer>
      <ABOUT clicked={+props.clicked} to='/about'>
        <motion.h2
          initial={{
            y: 200,
            transition: { type: "spring", duration: 1.5, delay: 1 },
          }}
          animate={{
            y: 0,
            transition: { type: "spring", duration: 1.5, delay: 1 },
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          About...
        </motion.h2>
      </ABOUT>

      <SKILLS to='/skills'>
        <motion.h2
          initial={{
            y: 200,
            transition: { type: "spring", duration: 1.5, delay: 1 },
          }}
          animate={{
            y: 0,
            transition: { type: "spring", duration: 1.5, delay: 1 },
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          My Skills...
        </motion.h2>
      </SKILLS>
    </BottombarContainer>
  );
};

export default BottomBar;
