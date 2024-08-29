import React from 'react'
import { FloatingNav } from '@/components/landing/ui/floating-navbar'
import Hero from '@/components/landing/Hero'
import StatisticsPanel from '@/components/landing/StatisticsPanel'
import Projects from '@/components/landing/Projects'
import Team from '@/components/landing/Team'
import News from '@/components/landing/News'
import GetInTouch from '@/components/landing/GetInTouch'
import { Separator } from "@/components/landing/ui/separator"
import Contact from '@/components/landing/Contact'
import Companies from '@/components/landing/Companies'
import Image from "next/image"
import logo from '@/public/images/logo.png'
import Aboutus from '@/components/landing/Aboutus'


const page = () => {
    const navItems = [
        {
          name: "Home",
          link: "#Home",
        },
        {
          name: "Projects",
          link: "#Projects",
        },
        {
          name: "Team",
          link: "#Team",
        },
        {
          name: "News",
          link: "#News",
        },
        {
          name: "Aboutus",
          link: "#Aboutus",
        },
        {
          name: "Contacts",
          link: "#Contact",
        },
    ];
    return (
        <main className="scroll-smooth relative bg-white flex justify-center items-center flex-col overflow-hidden mx-auto md:px-10 sm:px-5 px-2 py-4 mb-2 md:mb-12 ">
            <div className="max-w-7xl w-full">

                <div className="w-32 h-16 relative ml-12 mt-8">
                    <Image
                        src={logo}
                        alt="MCG Logo"
                        fill
                        sizes="100vw"
                        style={{
                            objectFit: "contain"
                        }} />
                </div>

                <FloatingNav navItems={navItems}/>

                <div id='Home'>
                    <Hero/>
                </div>

                <StatisticsPanel/>
                
                <div id='Projects'>
                <Projects/>
                </div>
                <Separator/>
                
                <div id='Team'>
                <Team/>
                </div>
                <Separator/>

                <div id='News'>
                <News/>      
                </div>  
                <Separator/>

                <div id='Aboutus'>
                <Aboutus/>      
                </div>  
                <Separator/>

                <div id='Contact'>
                <GetInTouch/>
                </div>
                <Separator/>

                <Companies/>
                <Separator/>

                <Contact/>

            </div>
        </main>
    );
}

export default page