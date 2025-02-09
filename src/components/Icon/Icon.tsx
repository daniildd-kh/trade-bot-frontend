import React from 'react';

interface IconProps {
  src: string;
  label: string;
  width?: number;
  height?: number;
  className?: string;
}

const Icon = ({ src, label, width = 5, height = 5, className }: IconProps) => {
  return (
    <div className='bg-red'>
      <img
        src={src}
        alt={label}
        className={className}
        style={{ width: `${width * 4}px`, height: `${height * 4}px` }}
      />
    </div>
  );
};

export default Icon;
