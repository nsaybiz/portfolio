import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const REPOSITORY = styled(NavLink)`
  color: ${(props) => (props.clicked ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 1;

  &:hover {
    color: ${(props) => (props.clicked ? props.theme.body : props.theme.text)};
  }
`;
const Repository = (props) => {
  return (
    <REPOSITORY clicked={+props.clicked} to='/repository'>
      <motion.h2
        initial={{
          y: -200,
          transition: { type: "spring", duration: 1.5, delay: 1 },
        }}
        animate={{
          y: 0,
          transition: { type: "spring", duration: 1.5, delay: 1 },
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Repository
      </motion.h2>
    </REPOSITORY>
  );
};

export default Repository;
