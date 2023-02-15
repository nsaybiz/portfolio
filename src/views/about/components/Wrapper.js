import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Description from "./Description";
import Layout from "./Layout";
import Picture from "./Picture";

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
const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Wrapper = () => {
  return (
    <Box
      vaiants={container}
      initial='hidden'
      animate='show'
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <Layout />
      <Picture />
      <Description />
    </Box>
  );
};

export default Wrapper;
