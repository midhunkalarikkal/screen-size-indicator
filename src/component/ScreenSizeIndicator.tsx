import React, { useState, useEffect } from 'react';
import { ScreenSizeIndicatorProps } from '../interface/screenSizeIndicatorInterface';

const ScreenSizeIndicator: React.FC<ScreenSizeIndicatorProps> = ({
  position,
  bgColor = 'bg-green-500',
  textColor = 'text-white',
  textSize = "text-md",
  
}) => {
  const [screenSize, setScreenSize] = useState<string>('');

  const updateScreenSize = () => {
    const width = window.innerWidth;
    if (width <= 480) {
      setScreenSize('xs');
    } else if (width <= 768) {
      setScreenSize('sm');
    } else if (width <= 1024) {
      setScreenSize('md');
    } else if (width <= 1280) {
      setScreenSize('lg');
    } else if (width <= 1600) {
      setScreenSize('xl');
    } else {
      setScreenSize('xxl');
    }
  };

  useEffect(() => {
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);

  return (
    <div
      className={`fixed ${position} ${bgColor} ${textColor} ${textSize} opacity-40 p-2 rounded z-50`} >
      Screen Size : {screenSize}
    </div>
  );
};

export default ScreenSizeIndicator;
