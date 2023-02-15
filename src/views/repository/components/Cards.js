import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Repository } from "../../../data/RepositoryData";
import Card from "./Card";

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

const CardsWrapper = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  color: white;
`;

const Cards = () => {
  const ref = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;
    };

    window.addEventListener("scroll", rotate);
    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, []);

  return (
    <CardsWrapper
      ref={ref}
      variants={container}
      initial='hidden'
      animate='show'
    >
      {Repository.map((d) => (
        <Card key={d.id} data={d} />
      ))}
    </CardsWrapper>
  );
};

export default Cards;
