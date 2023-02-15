import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

import BlogBackground from "../../assets/images/blog-background.jpg";
import BigTitle from "../../components/BigTitle";

import Wrapper from "./components/Wrapper";

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

const BlogContainer = styled(motion.div)`
  background-image: url(${BlogBackground});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;

  width: 100vw;
`;

const Blog = () => {
  return (
    <BlogContainer
      vaiants={container}
      initial='hidden'
      animate='show'
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <Wrapper />
      <BigTitle color='dark' text='BLOG' top='5rem' left='5rem' />
    </BlogContainer>
  );
};

export default Blog;
