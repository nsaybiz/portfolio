import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const CONTACT = styled.a`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;

  &:hover {
    color: ${(props) => props.theme.text};
  }
`;
const Contact = () => {
  return (
    <CONTACT
      rel='noreferrer'
      target='_blank'
      href='mailto:ilkaay.yuksel@gmail.com'
    >
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
        Say hi...
      </motion.h2>
    </CONTACT>
  );
};

export default Contact;
