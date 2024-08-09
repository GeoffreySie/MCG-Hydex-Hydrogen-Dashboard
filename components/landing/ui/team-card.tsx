"use client"

import React from 'react'
import { AnimatePresence, motion } from "framer-motion";
import Image, { StaticImageData } from 'next/image';
import defaultImage from "@/public/images/profile.png";

const Card = ({
    icon,
    children,
    name,
    linkedin,
    phone,
    email,
    imageSrc = defaultImage,
  }: {
    icon: React.ReactNode;
    children?: React.ReactNode;
    name: string;
    linkedin?: string;
    phone?: string;
    email?: string;
    imageSrc?: StaticImageData
  }) => {
    const [hovered, setHovered] = React.useState(false);
    return (
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full h-96 mx-auto p-4 relative"
      >
        <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
   
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full w-full absolute inset-0"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
   
        <div className="flex flex-col justify-center items-center ">
          <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 group-hover/canvas-card:hidden w-full mx-auto flex items-center justify-center">
            {icon}
          </div>

          <div className="w-full h-48 hidden group-hover/canvas-card:block group-hover/canvas-card:opacity-100 group-hover/canvas-card:-translate-y-2 transition duration-200">
            <Image
              src={imageSrc}
              alt={name}
              layout="responsive"
              width={150}
              height={100}
              className="object-cover rounded-lg"
            />
          </div>

          <h2 className="mb-4 text-xl font-bold hidden group-hover/canvas-card:block group-hover/canvas-card:opacity-100 group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
            {name}
          </h2>
          {linkedin && (
            <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-center hidden group-hover/canvas-card:block group-hover/canvas-card:opacity-100 group-hover/canvas-card:-translate-y-2 transition duration-200 group-hover/canvas-card:text-white"
            >
              LinkedIn: {name}
            </a>
          )}
          {phone && (
            <p className="text-sm text-center hidden group-hover/canvas-card:block group-hover/canvas-card:opacity-100 group-hover/canvas-card:-translate-y-2 transition duration-200 group-hover/canvas-card:text-white">
              Phone: {phone}
            </p>
          )}
          {email && (
            <p className="text-sm text-center hidden group-hover/canvas-card:block group-hover/canvas-card:opacity-100 group-hover/canvas-card:-translate-y-2 transition duration-200 group-hover/canvas-card:text-white">
              Email: {email}
            </p>
          )}
        </div>
      </div>
    );
  };

const Icon = ({ className, ...rest }: any) => {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={className}
        {...rest}
        >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
    );
};

export default Card