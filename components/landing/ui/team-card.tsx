"use client"

import React from 'react'
import { AnimatePresence, motion } from "framer-motion";
import Image, { StaticImageData } from 'next/image';
import defaultImage from "@/public/images/profile.png";

const Card = ({
    children,
    name,
    linkedin,
    phone,
    email,
    occupation,
    imageSrc = defaultImage,
  }: {
    children?: React.ReactNode;
    name: string;
    linkedin?: string;
    phone?: string;
    email?: string;
    occupation?: string;
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
   
        <div className="flex flex-col justify-center items-center w-64">
          <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 group-hover/canvas-card:hidden w-full mx-auto flex items-center justify-center">
            {<MassiveQuestionMark/>}
          </div>

          <div className="w-fit h-fit hidden group-hover/canvas-card:block group-hover/canvas-card:opacity-100 group-hover/canvas-card:-translate-y-2 transition duration-200 mx-auto mb-8">
            <Image
              src={imageSrc}
              alt={name}
              
              width={150}
              height={100}
              className="object-cover rounded-lg"
            />
          </div>

          <h2 className="mb-4 text-xl font-bold hidden group-hover/canvas-card:block group-hover/canvas-card:opacity-100 group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
            {name}
          </h2>
          {occupation && (
            <p className="text-center hidden group-hover/canvas-card:block group-hover/canvas-card:opacity-100 group-hover/canvas-card:-translate-y-2 transition duration-200 group-hover/canvas-card:text-white my-2">
              {occupation}
            </p>
          )}
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

const MassiveQuestionMark = () => {
  return (
    <div className="flex justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        className="w-64 h-64 text-black"
        preserveAspectRatio="xMidYMid meet"
      >
        <g fillRule="evenodd">
          <path d="M30.249 2.065C18.612 2.789 12.531 9.379 12 21.296h11.739c.147-4.128 2.451-7.214 6.741-7.669c4.211-.447 8.206.556 9.416 3.435c1.307 3.11-1.627 6.724-3.022 8.241c-2.582 2.813-6.776 4.865-8.95 7.9c-2.131 2.974-2.51 6.887-2.674 11.676h10.346c.145-3.062.349-5.995 1.742-7.898c2.266-3.092 5.65-4.541 8.486-6.983c2.709-2.334 5.559-5.147 6.043-9.501C53.32 7.466 42.683 1.289 30.249 2.065" fill="currentColor">
          </path>
          <ellipse cx="30.515" cy="55.567" rx="6.532" ry="6.433" fill="currentColor">
          </ellipse>
        </g>
      </svg>
    </div>
  );
};

export default Card