import React from 'react';
import Link from 'next/link';
import { MdLocationOn } from 'react-icons/md';
import { BsSquare } from 'react-icons/bs';
import { FaPlus, FaDownload } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  return (
    <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
      <div className='flex flex-col items-center'>
        {/* Logo Placeholder */}
        <div className='bg-gray-300 text-black p-3 rounded-lg inline-block mb-4'>
          Logo
        </div>

        <span className='border-b-[1px] border-gray-200 w-full p-2'></span>

        {/* Menu Items */}
        <Link href='/'>
          <div className='bg-gray-100 hover:bg-gray-500 cursor-pointer my-4 p-3 rounded-lg inline-block'>
            <MdLocationOn size={20} />
          </div>
        </Link>
        <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
        <Link href='/'>
          <div className='bg-gray-100 hover:bg-gray-500 cursor-pointer my-4 p-3 rounded-lg inline-block'>
            <BsSquare size={20} />
          </div>
        </Link>
        <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
        <Link href='/'>
          <div className='bg-gray-100 hover:bg-gray-500 cursor-pointer my-4 p-3 rounded-lg inline-block'>
            <FaPlus size={20} />
          </div>
        </Link>
        <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
        <Link href='/'>
          <div className='bg-gray-100 hover:bg-gray-500 cursor-pointer my-4 p-3 rounded-lg inline-block'>
            <FaDownload size={20} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;