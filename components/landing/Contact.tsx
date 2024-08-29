import React from 'react'
import Image from "next/image"
import logo from '@/public/images/logo.png'
import InvertedButton from './ui/inverted-button'

const Contact = () => {
  return (
    <div className='flex flex-col items-center p-4 sm:p-8 space-y-6 sm:space-y-0 sm:grid sm:grid-cols-3'>
      <div className='flex justify-center items-center'>
        <div className="w-24 h-12 relative">
          <Image
            src={logo}
            alt="MCG Logo"
            fill
            sizes="100vw"
            style={{
              objectFit: "contain"
            }} />
        </div>
      </div>
      
      <div className='flex flex-col justify-center text-center'>
        <h1 className='text-xl sm:text-2xl text-center text-green-800 font-bold mb-4'>Contact Us</h1>
        <a
          href='https://www.linkedin.com/company/mcg-uk/mycompany/'
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-800 mb-2"
        >
          LinkedIn: <span className='hover:text-green-950'>MCG UK</span>
        </a>
        <p className='text-green-800 text-center'>Email: info@modularclintonglobal.com</p>
      </div>

      <div className='flex justify-center items-center'>
        <div>
          <a href="https://brandfetch.com/developers/logo-api" className="text-sm text-gray-600 hover:text-gray-800">Logos by Brandfetch</a>
        </div>
      </div>
    </div>
  );
}

export default Contact