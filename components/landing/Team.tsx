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
          icon={<MassiveQuestionMark />}
          linkedin='https://www.linkedin.com/in/clinton-liu'
          // phone='+44 7586 852406'
          email='cliu@modularclintonglobal.ca'
          imageSrc={clinton}
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card name="Jake Queue" icon={<MassiveQuestionMark />} linkedin='https://www.linkedin.com/in/jake-queue-262ba426/' email='jqueue@modularclintonglobal.com'>
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
        <Card name="Person 3" icon={<MassiveQuestionMark />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </div>
  )
}

const MassiveQuestionMark = () => {
  return (
    <div className="flex justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        className="w-64 h-64 text-black"
        preserveAspectRatio="xMidYMid meet"
      >
        <g fill-rule="evenodd">
          <path d="M30.249 2.065C18.612 2.789 12.531 9.379 12 21.296h11.739c.147-4.128 2.451-7.214 6.741-7.669c4.211-.447 8.206.556 9.416 3.435c1.307 3.11-1.627 6.724-3.022 8.241c-2.582 2.813-6.776 4.865-8.95 7.9c-2.131 2.974-2.51 6.887-2.674 11.676h10.346c.145-3.062.349-5.995 1.742-7.898c2.266-3.092 5.65-4.541 8.486-6.983c2.709-2.334 5.559-5.147 6.043-9.501C53.32 7.466 42.683 1.289 30.249 2.065" fill="currentColor">
          </path>
          <ellipse cx="30.515" cy="55.567" rx="6.532" ry="6.433" fill="currentColor">
          </ellipse>
        </g>
      </svg>
    </div>
  );
};

export default Team