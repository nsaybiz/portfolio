import { motion } from "framer-motion";
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "../../Themes";
import Wrapper from "./components/Wrapper";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const Container = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  height: 400vh;
  position: relative;
  display: flex;
  align-items: center;
`;

const Repository = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container
        vaiants={container}
        initial='hidden'
        animate='show'
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <Wrapper />
      </Container>
    </ThemeProvider>
  );
};

export default Repository;
