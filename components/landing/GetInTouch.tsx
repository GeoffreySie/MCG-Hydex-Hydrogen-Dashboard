import React from 'react'
import InvertedButton from './ui/inverted-button'

const GetInTouch = () => {
  return (
    <div className='flex flex-col items-center my-12'>
        <h1 className='text-4xl font-bold text-green-800 text-center max-w-2xl mb-8'>
            Join us in revolutionising the maritime shipping industry today
        </h1>
        <InvertedButton text='Get in Touch'/>
    </div>
  )
}

export default GetInTouch