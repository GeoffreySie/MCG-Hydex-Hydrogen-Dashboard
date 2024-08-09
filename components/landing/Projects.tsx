import React from 'react'
import ProjectItem from '@/components/landing/ui/project-item'
import passport from '@/public/images/passport.png'
import whitepaper from '@/public/images/whitepaper.png'
import environment from '@/public/images/environment.png'

const Projects = () => {
  return (
    <div className='px-12 py-4 flex flex-col mb-8'>
      <ProjectItem
        title='Hydrogen Production and Carbon Tracking (HyPACT)'
        description='This is a MCG focuses on the maritime shipping digitisation and decarbonisation, by leveraging cutting-edge technologies in AI and blockchain. of project 1'
        imageSrc={passport}
        imageAlt='Product Passport Page'
        imageClassNames='border-2 border-slate-950'
      />
      <ProjectItem
        title='IoT and Blockchain integrated Platform for maritime shipping industry'
        description='MCG focuses on the maritime shipping digitisation and decarbonisation, by leveraging cutting-edge technologies in AI and blockchain.'
        imageSrc={whitepaper}
        imageAlt='MCG Whitepaper'
        imagePosition='left'
      />
      <ProjectItem
        title='Environmental Sustainability Commitment'
        description='MCG focuses on the maritime shipping digitisation and decarbonisation, by leveraging cutting-edge technologies in AI and blockchain.'
        imageSrc={environment}
        imageAlt='Environmental Sustainability Commitment'
      />
    </div>
  )
}

export default Projects