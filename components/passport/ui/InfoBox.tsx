import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface InfoBoxProps {
  title: string;
  value: React.ReactNode;
  color?: string;
  icon?: any;
}

const InfoBox: React.FC<InfoBoxProps> = ({ title, value, color, icon }) => (
  <div className="w-full border-neutral-400 rounded-lg flex flex-col justify-center relative" style={{ backgroundColor: color || 'cream' }}>

    {icon && <FontAwesomeIcon icon={icon} className="top-4 text-xl mb-2" />}
    <div className="flex flex-col items-center">
      <h2 className="text-center sm:text-sm md:text-base font-semibold mb-2">{title}</h2>
      <p className="text-center">{value}</p>
    </div>
  </div>
);

export default InfoBox;