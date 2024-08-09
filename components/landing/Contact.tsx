import React from 'react'
import Image from 'next/image'
import logo from '@/public/images/logo.png'
import InvertedButton from './ui/inverted-button'

const Contact = () => {
  return (
    <div className='grid grid-cols-3'>
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
        
        <div>
            <h1 className='text-xl text-center text-green-800 font-bold mb-4'>Contact Us</h1>
            <a
                href='https://www.linkedin.com/company/mcg-uk/mycompany/'
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-800 text-center"
                >
                LinkedIn: MCG UK
            </a>
            <p className='text-green-800 text-center'>Phone: </p>
            <p className='text-green-800 text-center'>Email: </p>
            
        </div>

        <div className='flex justify-center items-center'>
            <div>
                <InvertedButton text='Get in Touch'/>
            </div>
        </div>
    </div>
  )
}

export default Contact