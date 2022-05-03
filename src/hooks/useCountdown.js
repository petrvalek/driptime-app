import { useEffect, useState } from "react";

function makeMeTwoDigits(n) {
  return (n < 10 ? "0" : "") + n;
}

const useCountdown = (totalTime, ispaused) => {
  const timer = totalTime;
  const pause = ispaused;

  const [countDown, setCountDown] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!pause) {
        if (countDown > 0) {
          setCountDown((t) => t - 1);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, countDown, pause]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  const minutes = Math.floor(countDown / 60);
  const seconds = makeMeTwoDigits(countDown % 60);

  return [minutes, seconds];
};

export { useCountdown };
