import React from 'react';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

interface ToggleButtonProps {
  isCollapsed: boolean;
  toggleCollapse: () => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ isCollapsed, toggleCollapse }) => (
  <button
    className={`absolute top-0 right-0 transform translate-y-0 ${isCollapsed ? 'translate-x-[100%]' : 'translate-x-4'} text-neutral-800 dark:text-neutral-200 bg-gray-200 dark:bg-gray-700 p-2 rounded-full z-10`}
    onClick={toggleCollapse}
  >
    {isCollapsed ? <IconChevronRight /> : <IconChevronLeft />}
  </button>
);

export default ToggleButton;
