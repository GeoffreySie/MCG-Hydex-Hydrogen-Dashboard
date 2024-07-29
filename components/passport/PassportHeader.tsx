import React from 'react'

interface PassportHeaderProps {
  id:string;
}


const PassportHeader: React.FC<PassportHeaderProps> = ({id}) => {
  return (
    <div className="mb-4 mt-8 flex items-end gap-2">
      <h1 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">Hydrogen Passport</h1>
      <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">{id}</h1>
    </div>
  )
}

export default PassportHeader;