import React from 'react';

const statistics = [
  { number: '15', text: 'Trusted Partners' },
  { number: '100+', text: 'Satisfied Clients' },
  { number: '500+', text: 'Containers Shipped' },
  { number: '60+', text: 'Countries Covered' },
];

const StatisticsPanel = () => {
  return (
    <div className="flex flex-row justify-center items-center py-8 border-t border-b text-center mt-8">
      {statistics.map((stat, index) => (
        <div key={index} className="text-center flex flex-row">
          <div>
            <div className="text-4xl font-bold">{stat.number}</div>
            <div className="text-sm font-bold mt-2">{stat.text}</div>
          </div>
          {index < statistics.length - 1 && (
            <div className="border-r h-16 mx-16"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StatisticsPanel;
