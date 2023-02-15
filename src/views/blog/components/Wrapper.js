import React from "react";
import styled from "styled-components";
import Layout from "./Layout";

import Cards from "./Cards";

const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.textRgba}, 0.5)`};
  width: 100%;
  height: 100vh;
  position: relative;
  padding-bottom: 5rem;
`;

const Wrapper = () => {
  return (
    <Container>
      <Layout />
      <Cards />
    </Container>
  );
};

export default Wrapper;
