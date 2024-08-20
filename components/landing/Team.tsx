import React from 'react'
import { CanvasRevealEffect } from "@/components/landing/ui/canvas-reveal-effect";
import Card from "@/components/landing/ui/team-card";
import clinton from "@/public/images/clinton.png";

const Team = () => {
  return (
    <div className='mt-4 py-4 px-16'>
      <h1 className='text-4xl font-bold text-green-800 text-center'>
        Meet the Team
      </h1>
      <div className="py-10 flex flex-col lg:flex-row items-center justify-center bg-white w-full gap-4 mx-auto px-8">
        <Card 
          name="Clinton Liu" 
          occupation='Chief Executive Officer'
          linkedin='https://www.linkedin.com/in/clinton-liu'
          email='cliu@vuila.ca'
          imageSrc={clinton}
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card name="Samuel Owusu" occupation='Commercial Director'>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50" />
        </Card>
        <Card name="Paul Fisher" occupation='Technology Director'>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
        <Card name="Jake Queue">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-red-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </div>
  )
}



export default Team