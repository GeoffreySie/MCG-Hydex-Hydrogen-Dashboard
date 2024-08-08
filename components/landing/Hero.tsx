import React from 'react'
import dashboardImage from '@/public/images/dashboard.png'
import Image from 'next/image'
import InvertedButton from '@/components/landing/ui/inverted-button'

const Hero = () => {
  return (
    <div className='px-12 py-4 grid grid-cols-2 mt-12 gap-12'>
        <div className='py-8'>
            <h1 className='text-4xl font-bold text-green-800'>
                The technology platform for global maritime shipping logistics.
            </h1>
            <p className='text-lg text-gray-600 mt-6'>
                Blockchain-enabled supply chain traceability and carbon visibility solutions in the emerging Physical Internet (PI) era
            </p>

            <div className='flex flex-row mt-6'>
                <InvertedButton text='Learn more'/>

                <button className='ml-4 py-2 px-4'>
                    Get in touch
                </button>

            </div>

            
        </div>

        <Image
            src = {dashboardImage}
            alt = 'Dashboard'
            className='border-2 border-slate-950'


        />

        
    </div>
  )
}

export default Hero