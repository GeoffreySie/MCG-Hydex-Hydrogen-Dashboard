import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface InfoBoxProps {
  title: string;
  value: React.ReactNode;
  icon?: any;
}

const InfoBox: React.FC<InfoBoxProps> = ({ title, value, icon }) => (
  <div className="w-full h-full min-h-32 p-4 border border-neutral-400 rounded-lg flex flex-col justify-center bg-cream relative">
    {icon && <FontAwesomeIcon icon={icon} className="absolute top-4 ml-4 left-2 text-xl" />}
    <div className="flex flex-col items-center">
      <h2 className="text-center sm:text-sm md:text-base font-semibold mb-4">{title}</h2>
      <p className="text-center">{value}</p>
    </div>
  </div>
);

export default InfoBox;