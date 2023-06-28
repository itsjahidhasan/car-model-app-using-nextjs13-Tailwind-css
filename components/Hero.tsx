'use client';
import React from 'react';
import CustomButton from './CustomButton';

const Hero = () => {
  const handleScroll = () => {
    console.log('clicked');
  };
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, Bock or Rent a Car -- quickly and easily
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process
        </p>
        <CustomButton
          title="Explore Cars"
          containStyles="big-primary-blue text-white mt-10 rounded-full"
          handleClick={handleScroll}
        />
      </div>
    </div>
  );
};

export default Hero;
