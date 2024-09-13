import React from 'react'
import { CanvasRevealEffect } from "@/components/landing/ui/canvas-reveal-effect";
import Card from "@/components/landing/ui/team-card";
import clinton from "@/public/images/clinton.png";
import jay from "@/public/images/jay.jpg";
import paul from "@/public/images/paul.png";
const Team = () => {
  return (
    <div className='mt-4 py-4'>
      <h1 className='text-4xl font-bold text-green-800 text-center'>
        Meet the Team
      </h1>
      <div className="py-10 flex flex-col lg:flex-row items-center justify-center bg-white w-full gap-4 mx-auto px-8">
        <Card 
          name="Clinton Liu" 
          occupation='Chief Executive Officer'
          linkedin='https://www.linkedin.com/in/clinton-liu'
          // phone='+44 7586 852406'
          email='cliu@modularclintonglobal.com'
          imageSrc={clinton}
        >
         
        </Card>
        <Card 
        name="Jake Queue" 
        linkedin='https://www.linkedin.com/in/jake-queue-262ba426/' 
        email='jqueue@modularclintonglobal.com'
        imageSrc={jay}
        >
         
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50" />
        </Card>
        <Card 
        name="Paul Fisher" 
        occupation='Technology Director'
         linkedin='Paul Fisher' 
         email= 'pfisher@modularclintonglobal.com'
         imageSrc={paul}
         >
         
        </Card>
      </div>
    </div>
  )
}



export default Team