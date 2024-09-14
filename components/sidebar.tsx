"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import LogoImage from "../public/images/Logo-alt.png";
import { motion } from "framer-motion";
import { cn } from "@/app/lib/utils";

export function SideBar() {
  const links = [
    {
      label: "Home",
      href: "/home",
      icon: <IconBrandTabler className="text-black h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "About Us",
      href: "/about",
      icon: <IconUserBolt className="text-black h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Download Sample Questions",
      href: "https://drive.google.com/file/d/1Vs0jGXV9ZU1XX_8xLAi0Y-jRJKOgWv28/view?usp=sharing",
      icon: <IconSettings className="text-black h-5 w-5 flex-shrink-0" />,
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "z-50 w-auto rounded-full md:rounded-md flex flex-row bg-zenLightBlue md:h-full flex-1 max-w-md overflow-hidden fixed md:left-0 mt-5 md:mt-0 left-5",
        "md:h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-8">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <Image src={LogoImage} alt="ZenGravitas"></Image>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-xl text-black whitespace-pre font-semibold"
      >
        ZenGravitas
      </motion.span>
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <Image src={LogoImage} alt="ZenGravitas"></Image>
    </Link>
  );
};
