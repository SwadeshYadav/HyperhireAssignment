

import React from 'react';
import "../App.css"; 
import { v4 as uuidv4 } from "uuid";
import Card from "./Card"; 
import Carousel from "./Carroussel"; 

const CardsContainer = () => {
  const cards = [
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_XpTIaJ4nSPHInGNYFPHjRVycXu-ojc142Q&s" />  
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_XpTIaJ4nSPHInGNYFPHjRVycXu-ojc142Q&s"  /> 
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_XpTIaJ4nSPHInGNYFPHjRVycXu-ojc142Q&s"  /> 
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_XpTIaJ4nSPHInGNYFPHjRVycXu-ojc142Q&s"  /> 
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_XpTIaJ4nSPHInGNYFPHjRVycXu-ojc142Q&s"  /> 
      ),
    },
  ];

  return (
    <div className="mt-48">
      <Carousel
        cards={cards}
        height="40px"
        width="60%" 
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
    </div>
  );
};

export default CardsContainer;
