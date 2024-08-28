import React from 'react'

import InvertedButton from './ui/inverted-button'

const Aboutus= () => {
  return (
    <div className='flex flex-col items-center mt-4 mb-12'>
    <div className='max-w-2xl'>
      <h1 className='text-4xl font-bold text-green-800 text-center mt-8'>
        Our history
      </h1>
      <p className='text-lg text-gray-600 py-4 px-12 text-center mb-2'>
        Click the button below to view our history of development
      </p>
      <div className='flex flex-col justify-center text-center'>
       <a href="/history">
            <InvertedButton text='About us'/>
        </a>
       </div>
    </div>
  </div>
  )
}

export default Aboutus