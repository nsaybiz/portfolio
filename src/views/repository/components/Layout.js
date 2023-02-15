import React from "react";

import HomeButton from "../../../components/HomeButton";
import Logo from "../../../components/Logo";
import SocialMediaIcons from "../../../components/SocialMediaIcons";
import BigTitle from "../../../components/BigTitle";

const Layout = () => {
  return (
    <>
      <Logo color='dark' />
      <HomeButton />
      <SocialMediaIcons color='dark' />
      <BigTitle text='REPOSITORY' top='10%' left='10%' />
    </>
  );
};

export default Layout;
