"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: false,
      disable: false,
      duration: 1200,
      easing: "ease-out-cubic",
    });
  });

  return (
    <>
      <main className="grow">{children}</main>
    </>
  );
}
