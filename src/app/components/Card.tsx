"use client";
import Styles from "./Card.module.css";
import React, { useState } from "react";
import { animated } from "react-spring";
import Image from "next/image"; 

function Card(props: { imagen: string | undefined }) {
  const [, setShown] = useState(false);

  return (
    <animated.div
      className={`${Styles.card} bg-white p-4 shadow-lg rounded-md`} 
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <Image
        src={props.imagen || "/placeholder.jpg"} 
        alt="Profile Image" 
        width={300} 
        height={300} 
        className="rounded-md mt-1" 
      />
      <h2 className="text-center text-[18px]">Abhishek Gupta</h2>
      <h2 className="text-center text-[16px]">Marketing · 2y+</h2>
      <h2 className="border border-gray-400 rounded-md p-1 text-black text-center">Marketing content creation</h2>
      <h2 className="border border-gray-400 rounded-md p-1 text-black text-center">
        Instagram Management
      </h2>
      <div className="flex flex-row mt-2 gap-2 text-[14px] text-black p-1">
        <h2 className="border border-gray-400 rounded-md p-1 text-black text-center">
          Twitter Management
        </h2>
        <h2 className="border border-gray-400 rounded-md p-1 text-black text-center">
          Write a blog post
        </h2>
      </div>
    </animated.div>
  );
}

export default Card;
