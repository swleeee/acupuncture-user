import { useEffect, useState } from "react";

export const useCountUp = (
  targetValue: number,
  decimalPlaces = 0,
  initialValue = 0,
  durationMs = 1500
) => {
  const [currentValue, setCurrentValue] = useState(initialValue);
  const frameDuration = 1000 / 60;
  const totalFrames = Math.round(durationMs / frameDuration);

  useEffect(() => {
    let frame = initialValue;
    const counter = setInterval(() => {
      const progress = ++frame / totalFrames;
      const newValue = targetValue * progress;
      const factor = 10 ** decimalPlaces;
      setCurrentValue(Math.round(newValue * factor) / factor);

      if (progress >= 1) {
        clearInterval(counter);
      }
    }, frameDuration);
  }, [targetValue, frameDuration, initialValue, totalFrames]);

  return currentValue;
};
