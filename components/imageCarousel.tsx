"use client";

import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/image-slider";
import { images } from "../data/index.js";

export default function imageCarousel() {
  return (
    <ImagesSlider className="h-[40rem] w-full" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        className="z-50 flex flex-col justify-center items-center"
      ></motion.div>
    </ImagesSlider>
  );
}
