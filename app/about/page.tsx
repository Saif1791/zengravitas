// import { Mentors } from "@/components/mentors";
// import { mentors } from "@/data";
import type { Metadata } from "next";
import Image from "next/image";
import Logo from "@/public/images/Logo.png";

export const metadata: Metadata = {
  title: "Our Story - ZenGravitas",
  description: "...",
};

import React from "react";

const page = () => {
  return (
    <main className="mt-[20%] md:mt-20">
      <h1
        className="text-black font-bold md:text-5xl text-center text-3xl"
        data-aos="zoom-y-out"
      >
        Know Our Story
      </h1>
      <div
        className="flex flex-col md:flex-row items-center justify-center md:items-start"
        data-aos="zoom-y-out"
      >
        <p className="mt-20 md:w-3/6 text-justify text-base w-5/6 md:text-xl">
          Welcome to Zengravitas, a trusted partner of comprehensive educational
          and professional development services. We specialize in delivering a
          wide array of solutions designed to meet the diverse needs of academic
          institutions, corporate organizations, and individuals. Our mission is
          to empower learners and professionals with the skills, knowledge, and
          resources they need to excel in their respective fields.
          <br />
          <br />
          In Zengravitas, our mission is to provide innovative, high-quality
          services that bridge the gap between education and industry, fostering
          growth and development across all levels. We are committed to creating
          an environment where learning is accessible, relevant, and
          transformative.
        </p>
        <Image src={Logo} width={500} height={500} alt="Logo" />
      </div>
      {/* <h1 className="text-black font-bold md:text-5xl text-center text-3xl mt-20">
        Our Mentors
      </h1> */}
      {/* <div className="md:ml-96">
        <Mentors />
      </div> */}
    </main>
  );
};

export default page;
