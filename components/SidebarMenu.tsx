"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/Sidebar";
import {
  IconArrowLeft,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import UserAvatar from "./ui/UserAvatar";
import { MdLocationOn } from 'react-icons/md';
import { FaPassport } from "react-icons/fa";
import { FaPlus } from 'react-icons/fa';


const SidebarMenu = () => {
    const links = [
        {
          label: "Supply Routes",
          href: "/",
          icon: (
            <MdLocationOn className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
          ),
        },
        {
          label: "Product Passports",
          href: "/product-passports",
          icon: (
            <FaPassport className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
          ),
        },
        {
          label: "Add Route",
          href: "/add-route",
          icon: (
            <FaPlus className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
          ),
        },
        {
          label: "Logout",
          href: "/",
          icon: (
            <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
          ),
        },
    ];
    const [open, setOpen] = useState(false);

    return (
        <Sidebar open={open} setOpen={setOpen} animate={true}>
        <SidebarBody className="justify-between gap-10">
            <div className="flex flex-col flex-1 overflow-y-auto">
                <>
                <Logo />
                </>
                <div className="mt-8 flex flex-col gap-2">
                {links.map((link, idx) => (
                    <SidebarLink key={idx} link={link} />
                ))}
                </div>
            </div>
            <div>
                <SidebarLink
                link={{
                    label: "Clinton Liu",
                    href: "/profile",
                    icon: <UserAvatar/>,
                }}
                />
            </div>
        </SidebarBody>
      </Sidebar>
  )
}

export const Logo = () => {
    return (
      <Link
        href="#"
        className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
      >
        <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-medium text-black dark:text-white whitespace-pre"
        >
          MCG
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
        <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-th-screen rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      </Link>
    );
  };

export default SidebarMenu
