import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { darkTheme } from "../Themes";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 2rem;
  left: 2rem;

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Icon = styled.i`
  color: ${(props) =>
    props.color === "dark" ? darkTheme.text : darkTheme.body};
  font-size: 1.7rem;
`;

const SocialMediaIcons = (props) => {
  return (
    <Icons>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <a rel='noreferrer' target='_blank' href='https://github.com/ilkaay'>
          <Icon color={props.color} className='bi bi-github' />
        </a>
      </motion.div>

      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <a
          rel='noreferrer'
          target='_blank'
          href='https://twitter.com/ilkaayyuksel'
        >
          <Icon color={props.color} className='bi bi-twitter' />
        </a>
      </motion.div>

      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <a
          rel='noreferrer'
          target='_blank'
          href='https://www.linkedin.com/in/ilkaayyuksel'
        >
          <Icon color={props.color} className='bi bi-linkedin' />
        </a>
      </motion.div>
    </Icons>
  );
};

export default SocialMediaIcons;
