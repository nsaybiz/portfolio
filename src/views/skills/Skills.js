import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../Themes";
import Wrapper from "./components/Wrapper";

const Skills = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Wrapper />
    </ThemeProvider>
  );
};

export default Skills;
