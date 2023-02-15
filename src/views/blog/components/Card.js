import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const CardBox = styled(motion.a)`
  width: calc(10rem + 15vw);
  text-decoration: none;
  height: 20rem;
  padding: 1rem;
  color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => props.theme.body};
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;

  display: flex;
  flex-direction: column;
  z-index: 5;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.body};
    transition: all 0.3s ease;
  }
`;

const Image = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  width: 100%;
  height: 60%;
  background-size: cover;
  border: 1px solid transparent;
  background-position: center center;

  ${CardBox}:hover & {
    border: 1px solid ${(props) => props.theme.text};
  }
`;

const Title = styled.h5`
  color: ${(props) => props.theme.body};
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: "Karla", sans-serif;
  font-weight: 700;
  border-bottom: 1px solid ${(props) => props.theme.body};

  ${CardBox}:hover & {
    color: ${(props) => props.theme.text};
    border-bottom: 1px solid ${(props) => props.theme.text};
  }
`;

const Date = styled.span`
  color: ${(props) => props.theme.body};
  display: flex;
  justify-content: end;
  padding: 0.5rem 0;

  ${CardBox}:hover & {
    color: ${(props) => props.theme.text};
  }
`;
const Card = (props) => {
  const { id, name, date, imgSrc, link } = props.blog;

  return (
    <CardBox
      key={id}
      variants={Item}
      rel='norefferer'
      target='_blank'
      href={link}
    >
      <Image img={imgSrc} />
      <Title>{name}</Title>
      <Date>{date}</Date>
    </CardBox>
  );
};

export default Card;
