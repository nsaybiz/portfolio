import React from "react";
import styled from "styled-components";

import Layout from "../../blog/components/Layout";
import DevelopeBox from "./DevelopeBox";
import Particle from "../../../components/Particle";
import BigTitle from "../../../components/BigTitle";

const MainContainer = styled.div`
  background-color: ${(props) => props.theme.text};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Wrapper = () => {
  return (
    <MainContainer>
      <Particle theme='light' />
      <Layout />
      <DevelopeBox />
      <BigTitle text='MY SKILLS' color='light' top='10%' left='5%' />
    </MainContainer>
  );
};

export default Wrapper;
