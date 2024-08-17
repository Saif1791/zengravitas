import { Mentors } from "@/components/mentors";
import { mentors } from "@/data";
import type { Metadata } from "next";

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
        className="flex justify-center md:justify-start"
        data-aos="zoom-y-out"
      >
        <p className="mt-20 md:ml-60 md:w-3/6 text-justify text-base w-5/6 md:text-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          optio temporibus! Porro officia suscipit dolor. Iusto nemo, illo
          obcaecati minima odio et maxime accusantium vitae laudantium ab, iure
          alias enim. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Modi ab reiciendis voluptatibus tenetur repellendus harum, doloremque
          laborum eius a ex ipsum perferendis accusamus explicabo doloribus
          maiores, iusto culpa praesentium iste! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Laborum obcaecati vel maxime cumque. A
          hic ducimus consequuntur dolorum similique atque porro, amet ipsam
          aliquid suscipit eos animi tempore quaerat ab. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Dolores consequuntur ipsum,
          necessitatibus similique vitae impedit eos non dolorem earum ullam
          mollitia fugit quae sint iure, atque vero porro odit quod. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Ad eos labore cum
          cumque, aliquid esse quisquam aspernatur expedita laudantium
          doloremque sint illo fugiat, voluptatum aperiam animi. Velit quod
          saepe quia. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          At quasi necessitatibus id! Exercitationem quae facere molestiae
          recusandae voluptatibus eos nesciunt, quo ratione perferendis fugit,
          sint voluptate nulla architecto, quod quaerat?
        </p>
      </div>
      <h1 className="text-black font-bold md:text-5xl text-center text-3xl mt-20">
        Our Mentors
      </h1>
      <div className="md:ml-96">
        <Mentors />
      </div>
    </main>
  );
};

export default page;
