"use client";

import React, {useState} from 'react'
import { data } from '@/data'


const PassportList = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const filteredData = data.filter((productPassport) =>
        productPassport.id.toLowerCase().includes(searchTerm.toLowerCase())
      );


    return (
        <div className="w-60 h-full m-auto p-4 border bg-white flex flex-col items-center">
            <h1 className="w-full text-center text-neutral-700">Saved Passports</h1>
            <input
                type="text"
                placeholder="Search by ID"
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full p-2 mt-4 mb-4 border rounded-lg"
            />
            <ul className="w-full">
                {filteredData.map((productPassport) => (
                <li
                    key={productPassport.id}
                    className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center justify-center cursor-pointer"
                >
                    <div className="flex-1 text-center">
                    <h3>{productPassport.id}</h3>
                    </div>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default PassportList