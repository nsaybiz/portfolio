import React from "react";
import styled from "styled-components";

import { Blogs } from "../../../data/BlogData";

import Card from "./Card";

const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
`;

const Cards = () => {
  return (
    <CardsWrapper>
      <Grid>
        {Blogs.map((blog) => (
          <Card key={blog.id} blog={blog} />
        ))}
      </Grid>
    </CardsWrapper>
  );
};

export default Cards;
