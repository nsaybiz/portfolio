import React from "react";

import HomeButton from "../../../components/HomeButton";
import Logo from "../../../components/Logo";
import SocialMediaIcons from "../../../components/SocialMediaIcons";
import Blog from "./Blog";
import BottomBar from "./BottomBar";
import Contact from "./Contact";
import Repository from "./Repository";

const renderTop = (props) => {
  return (
    <div key='top'>
      <Logo color={props.clicked ? "light" : "dark"} />
      <HomeButton />
      <Contact />
    </div>
  );
};

const renderMiddle = (props) => {
  return (
    <div key='middle'>
      <Repository clicked={props.clicked} />
      <Blog />
    </div>
  );
};

const renderBottom = (props) => {
  return (
    <div key='bottom'>
      <SocialMediaIcons color={props.clicked ? "light" : "dark"} />
      <BottomBar clicked={props.clicked} />
    </div>
  );
};

const LinksWrapper = (props) => {
  return [renderTop(props), renderMiddle(props), renderBottom(props)];
};

export default LinksWrapper;
