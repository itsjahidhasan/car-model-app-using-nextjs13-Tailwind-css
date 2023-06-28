import { CustomButtonProps } from '@/types';
import React from 'react';

const CustomButton = ({
  title,
  containStyles,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type="button"
      className={`custom-btn ${containStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>title</span>
    </button>
  );
};

export default CustomButton;
