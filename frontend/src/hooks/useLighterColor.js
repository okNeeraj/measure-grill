import { useState } from 'react';

// Custom hook for generating a lighter shade of a hex color
function useLighterColor(initialColor, percent = 20) {
  // State variable for the lighter color
  const [lighterColor, setLighterColor] = useState(initialColor);

  // Function to generate a lighter shade of the color
  const generateLighterColor = () => {
    const originalColor = initialColor.replace(/^#/, '');
    const rgbColor = parseInt(originalColor, 16);

    // Extract RGB values
    let r = (rgbColor >> 16) & 255;
    let g = (rgbColor >> 8) & 255;
    let b = rgbColor & 255;

    // Increase brightness
    r = Math.min(255, r + (percent / 100) * 255);
    g = Math.min(255, g + (percent / 100) * 255);
    b = Math.min(255, b + (percent / 100) * 255);

    // Convert back to hex
    const newColor =
      '#' +
      Math.round(r).toString(16).padStart(2, '0') +
      Math.round(g).toString(16).padStart(2, '0') +
      Math.round(b).toString(16).padStart(2, '0');

    setLighterColor(newColor);
  };

  // Return the state and function
  return {
    lighterColor,
    generateLighterColor,
  };
}

export default useLighterColor;
