import React from 'react'
import NewsList from './ui/news-list'


const newsItems = [
  { title: 'Hydrogen: The Fuel of the Future', link: '/news/hydrogen-fuel' },
  { title: 'Hydrogen Safety: Myths and Facts', link: '/news/hydrogen-safety' },
  { title: 'Key Stats about Hydrogen', link: '/news/hydrogen-stats' },
  { title: 'Hydrogen Storage Solutions: Challenges and Innovation', link: '/news/hydrogen-storage' },
  { title: 'Global Hydrogen Investments: Leading the Change Towards a Greener Future', link: '/news/hydrogen-investments' },
];

const News = () => {
  return (
    <div className='flex flex-col items-center mt-4 mb-12'>
      <div className='max-w-2xl'>
        <h1 className='text-4xl font-bold text-green-800 text-center mt-8'>
          News & Media
        </h1>
        <p className='text-lg text-gray-600 py-4 px-12 text-center mb-2'>
          Join us to learn more about our projects, commitments, and innovative ideas:
        </p>
        <NewsList items={newsItems} />
      </div>
    </div>
  )
}

export default News