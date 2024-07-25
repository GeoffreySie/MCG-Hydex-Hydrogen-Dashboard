import React from 'react'

const OutlineButton = ({
    title, onClick
}:{
    title: string,
    onClick: () => void
}) => {
  return (
    <button 
        className="px-2 py-1 rounded-xl border w-36 border-neutral-600 text-black bg-white hover:bg-gray-100 transition duration-200"
        onClick={onClick}    
    >
        {title}
    </button>
  )
}

export default OutlineButton