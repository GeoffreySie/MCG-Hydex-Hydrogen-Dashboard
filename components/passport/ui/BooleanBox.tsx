// src/components/BooleanBox.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import InfoBox from './InfoBox';

interface BooleanBoxProps {
  title: string;
  value: boolean;
}

const BooleanBox: React.FC<BooleanBoxProps> = ({ title, value }) => {
  const yesIcon = <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-2xl " />;
  const noIcon = <FontAwesomeIcon icon={faTimesCircle} className="text-red-500 text-2xl" />;
  return (
    <InfoBox title={title} value={value ? yesIcon : noIcon} />
  );
};

export default BooleanBox;
