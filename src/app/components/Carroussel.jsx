"use client";
import { useState, useEffect, useMemo } from "react";
import { config } from "react-spring";
import Carousel from "react-spring-3d-carousel";

export default function Carroussel(props) {
  const cards = useMemo(() => {
    return props.cards.map((element, index) => {
      return { ...element, onClick: () => setGoToSlide(index) };
    });
  }, [props.cards]);

  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(null);

  useEffect(() => {
    // This block will only execute on the client side
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  return (
    <div
      style={{ width: props.width, height: props.height, margin: props.margin }}
    >
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
    </div>
  );
}
