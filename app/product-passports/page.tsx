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
        "rounded-md flex flex-col md:flex-row bg-neutral-100 dark:bg-neutral-800 w-full flex-1 mx-auto border border-neutral-200 overflow-hidden",
        "h-screen"
      )}
      >
        <SidebarMenu/>

        <PassportContainer currentSelectedProductId={"60d5ecb54f761c001f8e95d4"}/>
        
      </div>
    </main>
  );
}