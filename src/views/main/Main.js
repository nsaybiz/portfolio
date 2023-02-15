import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";

import MoonPhases from "../../components/MoonPhases";
import LinksWrapper from "./components/LinksWrapper";
import PersonalInfo from "./components/PersonalInfo";

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

const MainContainer = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
  padding: 2rem;
`;

const Icon = styled.button`
  display: flex;
  position: absolute;
  transform: translate(50%, 0%);
  bottom: ${(props) => (props.clicked ? "8%" : "50%")};
  right: ${(props) => (props.clicked ? "8%" : "50%")};
  background: none;
  border: none;
  transition: all 1s ease;
`;

const PersonalInfoWrapper = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.text};
  top: 0;
  bottom: 0;
  right: 50%;
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
`;
const Main = () => {
  const [click, setClick] = useState(false);

  return (
    <MainContainer
      vaiants={container}
      initial='hidden'
      animate='show'
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <PersonalInfoWrapper
        style={{
          width: click ? "50%" : "0%",
          height: click ? "100%" : "0%",
        }}
      />
      {click ? <PersonalInfo /> : undefined}
      <LinksWrapper clicked={click} />
      <Icon clicked={click} onClick={() => setClick(!click)}>
        <MoonPhases clicked={click} />
      </Icon>
    </MainContainer>
  );
};

export default Main;
