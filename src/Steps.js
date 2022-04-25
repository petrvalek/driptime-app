import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getDripDataPermalink } from "./DripData";

import Appbar from "./Components/Appbar";
import { Countdown } from "react-daisyui";
import { useCountdown } from "./hooks/useCountdown";
import StepItem from "./Components/StepItem";

const Steps = () => {
  let params = useParams();
  let DripData = getDripDataPermalink(params.permalink);

  const [minutes, seconds] = useCountdown(DripData.steps.totalTime);
  const [step, setStep] = useState(0);

  const stepsArray = DripData.steps.instructions.map((item) => {
    const object = { timing: item.timing, content: item.content };
    return object;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStep(step + 1);
    }, stepsArray[step].timing * 1000);

    return () => clearInterval(interval);
  }, []);

  const handleActive = (item) => {
    if (item === step) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="container">
      <Appbar title={DripData.name} />
      <div className="mt-6 mb-10 text-xl text-center">
        <Countdown value={minutes} />
        <span>:</span>
        <Countdown value={seconds} />
      </div>
      {step}
      <div>
        {stepsArray.map((item, i) => (
          <div>
            <StepItem
              key={i}
              timer={item.timing}
              stepContent={item.content}
              stepActive={handleActive(i)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
