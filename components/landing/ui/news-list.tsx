import React from 'react'
import { FaChevronRight } from 'react-icons/fa';

type ListItem = {
    title: string;
    link: string;
  };
  
  type NewsListProps = {
    items: ListItem[];
  };

const NewsList: React.FC<NewsListProps> = ({ items }) => {
  return (
    <div>
        <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              className="flex items-center justify-between text-teal-600 hover:text-teal-800 transition-colors"
            >
              <span className='overflow-hidden'>{item.title}</span>
              <FaChevronRight />
            </a>
          </li>
        ))}
      </ul>
    </div>
    
  )
}

export default NewsList