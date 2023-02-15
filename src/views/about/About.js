import React from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../../Themes";
import Wrapper from "./components/Wrapper";

const About = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Wrapper />
    </ThemeProvider>
  );
};

export default About;
