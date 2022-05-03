import { useEffect, useState, useRef } from "react";

function makeMeTwoDigits(n){
  return (n < 10 ? "0" : "") + n;
}

const useCountdown = (totalTime) => {
  const timer = totalTime;

  const [countDown, setCountDown] = useState(timer);
  // const intervalRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown((t) => t - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  const minutes = Math.floor(countDown / 60);
  const seconds = makeMeTwoDigits(countDown % 60);

  return [minutes, seconds];
};

export { useCountdown };
