import React from "react";
import BigTitle from "../../../components/BigTitle";
import HomeButton from "../../../components/HomeButton";
import Logo from "../../../components/Logo";
import Particle from "../../../components/Particle";
import SocialMediaIcons from "../../../components/SocialMediaIcons";

const Layout = () => {
  return (
    <>
      <Logo theme='dark' />
      <SocialMediaIcons theme='dark' />
      <HomeButton />
      <Particle theme='dark' />
      <BigTitle text='ABOUT' color='light' top='10%' left='5%' />
    </>
  );
};

export default Layout;
