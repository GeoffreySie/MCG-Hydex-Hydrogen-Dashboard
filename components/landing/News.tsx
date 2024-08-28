import React from 'react'
import NewsList from './ui/news-list'


const newsItems = [
  { title: 'Hydrogen: The Fuel of the Future', link: 'https://www.linkedin.com/posts/mcg-uk_hydrogen-sustainability-greenenergy-activity-7224016398224617473-ySFf?utm_source=share&utm_medium=member_ios'},
  { title: 'Hydrogen Safety: Myths and Facts', link: 'https://avod-infobase-com.res.banq.qc.ca/p_ViewVideo.aspx?xtid=288458' },
  { title: 'Key Stats about Hydrogen', link: 'https://www.linkedin.com/posts/mcg-uk_hydrogen-sustainability-cleanenergy-activity-7226563142414176256-Oyio?utm_source=share&utm_medium=member_ios' },
  { title: 'Hydrogen Storage Solutions: Challenges and Innovation', link: 'https://www.linkedin.com/posts/mcg-uk_hydrogenstorage-cleanenergy-sustainablefuture-activity-7227581075999326208-uoS0?utm_source=share&utm_medium=member_ios' },
  { title: 'Global Hydrogen Investments: Leading the Change Towards a Greener Future', link: 'https://www.linkedin.com/posts/mcg-uk_hydrogenrevolution-cleanenergy-sustainablefuture-activity-7232661596823580673-x7Z1?utm_source=share&utm_medium=member_ios' },
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