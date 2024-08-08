import React from 'react'
import { FloatingNav } from '@/components/landing/ui/floating-navbar'
import Hero from '@/components/landing/Hero'

const page = () => {

    const navItems = [
        {
          name: "Home",
          link: "/",
        },
        {
          name: "Projects",
          link: "#Projects",
        },
        {
          name: "News",
          link: "#News",
        },
        {
            name: "Contact Us",
            link: "#contact",
        },
    ];


    return (
        <main className="relative bg-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <div className="max-w-7xl w-full">
                <FloatingNav navItems={navItems}/>

                <Hero/>

            </div>
        </main>
    )
}

export default page