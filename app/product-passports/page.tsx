import Image from "next/image";
import SidebarMenu from "@/components/SidebarMenu";
import { cn } from "@/lib/utils";
import ProductPassport from "@/components/ProductPassport";
import React from "react";
import PassportList from "@/components/PassportList";
import PassportContainer from "@/components/PassportContainer";

export default function Home() {
  return (
    <main className="">
      <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-neutral-100 dark:bg-neutral-800 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen"
      )}
      >
        <SidebarMenu/>

        <PassportList/>

        <PassportContainer/>
        
      </div>
    </main>
  );
}