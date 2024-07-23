import Image from "next/image";
import SidebarMenu from "@/components/SidebarMenu";
import { cn } from "@/lib/utils";
import ProductPassport from "@/components/ProductPassport";
import React from "react";
import PassportList from "@/components/PassportList";

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

        <div className="xl:p-12 lg:p-8 p-4 w-screen h-screen flex flex-col overflow-y-scroll ">

          <div className="mb-4 mt-8 flex items-end gap-2">
            <h1 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 ">Hydrogen Passport</h1>
            <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 ">AD256/0</h1>
          </div>
          
          <ProductPassport/>

        </div>
        
      </div>
    </main>
  );
}