import React from 'react'
import Image from 'next/image'
import logo from '@/public/images/logo.png'
import InvertedButton from './ui/inverted-button'

const Contact = () => {
  return (
    <div className='grid grid-cols-3 p-8'>
        <div className='flex justify-center items-center'>
            <div className="w-24 h-12 relative">
                <Image
                src={logo}
                alt="MCG Logo"
                layout="fill"
                objectFit="contain"
                />
            </div>
        </div>
        
        <div className='flex flex-col justify-center text-center'>
            <h1 className='text-2xl text-center text-green-800 font-bold mb-4'>Contact Us</h1>
            <a
                href='https://www.linkedin.com/company/mcg-uk/mycompany/'
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-800"
                >
                LinkedIn: <span className='hover:text-green-950'>MCG UK</span>
            </a>
            <p className='text-green-800 text-center'>Email: cliu@vuila.ca</p>
            
        </div>

        <div className='flex justify-center items-center'>
            <div>
                <a href="https://brandfetch.com/developers/logo-api">Logos by Brandfetch</a>
            </div>
        </div>
    </div>
  )
}

export default Contact