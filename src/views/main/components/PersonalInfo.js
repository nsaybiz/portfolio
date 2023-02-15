import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import ProfilePicture from "../../../assets/images/me-cat.png";

const Box = styled(motion.div)`
  position: fixed;
  left: 17.5%;
  top: 25%;
  transform: translete(-50%, -50%);

  width: 65vw;
  height: 50vh;
  display: flex;

  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;

  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};
  z-index: 1;
`;

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  .picture {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -0%);
    width: 100%;
    height: auto;
  }
`;

const Text = styled.div`
  color: ${(props) => props.theme.body};
  font-size: calc(1em + 1.5vw);
  padding: 2rem;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    color: ${(props) => props.theme.body};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }
`;

const Link = styled.a`
  color: ${(props) => props.theme.body};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.body};
  }
`;
const PersonalInfo = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: "50vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text>
          <h1>Hi, </h1>
          <h2>I'm ilkay</h2>
          <h6>
            I am a software engineer{" "}
            <Link href='https://gusto.com/' target='_blank'>
              @gusto
            </Link>
          </h6>
        </Text>
      </SubBox>
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <img className='picture' alt='profile' src={ProfilePicture} />
        </motion.div>
      </SubBox>
    </Box>
  );
};

export default PersonalInfo;
