import React from 'react'

const InvertedButton = (
    { 
        text,

    } : { 
        text: string 
    }

) => {
  return (
    <button className="px-4 py-2 rounded-md bg-green-800 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-green-800">
        {text}
    </button>
  )
}

export default InvertedButton