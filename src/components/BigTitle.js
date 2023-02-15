import React from "react";
import styled from "styled-components";
import { lightTheme } from "../Themes";
const TitleText = styled.h1`
  position: fixed;
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  color: ${(props) =>
    props.color === "dark"
      ? `rgba(${lightTheme.textRgba}, 0.2)`
      : `rgba(${lightTheme.bodyRgba},0.1)`};
  font-size: calc(5rem + 5vw);
  z-index: 0;
`;
const BigTitle = (props) => {
  return (
    <TitleText
      top={props.top}
      bottom={props.bottom}
      left={props.left}
      right={props.right}
      color={props.color}
    >
      {props.text}
    </TitleText>
  );
};

export default BigTitle;
