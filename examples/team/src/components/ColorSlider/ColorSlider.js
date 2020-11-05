import React, { useState } from 'react';
import { HuePicker } from 'react-color';

export const ColorSlider = ({ primaryColor, setPrimaryColor }) => {
  const [sliderOpen, setSliderOpen] = useState(false);

  return (
    <div className="color-slider__container">
      <div
        className="color-slider__top"
        onClick={() => setSliderOpen(!sliderOpen)}
      >
        <p className="color-slider__top__text">COLOR</p>
        <div className="color-slider__top__circle" />
      </div>
      {sliderOpen && (
        <div className="color-slider__picker-wrapper">
          <HuePicker
            color={primaryColor}
            onChange={(color) => setPrimaryColor(color.hex)}
            height="10px"
            width="200px"
            pointer={() => <div className="color-slider__pointer" />}
          />
        </div>
      )}
    </div>
  );
};
