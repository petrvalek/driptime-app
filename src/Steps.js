import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getDripDataPermalink } from "./DripData";

import Appbar from "./Components/Appbar";
import { useCountdown } from "./hooks/useCountdown";
import StepItem from "./Components/StepItem";


const Steps = () => {
  let params = useParams();
  let DripData = getDripDataPermalink(params.permalink);

  const stepsArray = DripData.steps.instructions.map((item, i) => {
    const object = { timing: item.timing, content: item.content };
    return object;
  });

  const [minutes, seconds] = useCountdown(DripData.steps.totalTime);
  const [step, setStep] = useState(0);
  
  useEffect(() => {
    if (step < (stepsArray.length - 1)) {
    const stepTiming = (stepsArray[step].timing * 1000); 
    const interval = setTimeout(() => {
      
        setStep(step => step + 1);
        
      }, stepTiming + 100);
      
      return () => clearInterval(interval); 
    } 
  
  }, [step, stepsArray.length]);


  return (
    <div className="container">
      <Appbar title={DripData.name} />
      <div className="mt-6 mb-10 text-xl text-center">
        {minutes}
        <span>:</span>
        {seconds}
      </div>
      <div>
        {stepsArray.map((item, i) => (
          <StepItem
            key={i}
            timer={item.timing}
            stepContent={item.content}
            stepActive={(step === i) ? true : false}
          />
        ))}
      </div>
    </div>
  );
};

export default Steps;
