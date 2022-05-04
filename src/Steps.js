import { React, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { getDripDataPermalink } from "./DripData";

import { useCountdown } from "./hooks/useCountdown";
import StepItem from "./Components/StepItem";

import { Button } from "react-daisyui";
import { useTranslation } from "react-i18next";

const pauseIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 2C15.2044 2 14.4413 2.31607 13.8787 2.87868C13.3161 3.44129 13 4.20435 13 5V19C13 19.7956 13.3161 20.5587 13.8787 21.1213C14.4413 21.6839 15.2044 22 16 22C16.7956 22 17.5587 21.6839 18.1213 21.1213C18.6839 20.5587 19 19.7956 19 19V5C19 4.20435 18.6839 3.44129 18.1213 2.87868C17.5587 2.31607 16.7956 2 16 2ZM17 19C17 19.2652 16.8946 19.5196 16.7071 19.7071C16.5196 19.8946 16.2652 20 16 20C15.7348 20 15.4804 19.8946 15.2929 19.7071C15.1054 19.5196 15 19.2652 15 19V5C15 4.73478 15.1054 4.48043 15.2929 4.29289C15.4804 4.10536 15.7348 4 16 4C16.2652 4 16.5196 4.10536 16.7071 4.29289C16.8946 4.48043 17 4.73478 17 5V19ZM8 2C7.20435 2 6.44129 2.31607 5.87868 2.87868C5.31607 3.44129 5 4.20435 5 5V19C5 19.7956 5.31607 20.5587 5.87868 21.1213C6.44129 21.6839 7.20435 22 8 22C8.79565 22 9.55871 21.6839 10.1213 21.1213C10.6839 20.5587 11 19.7956 11 19V5C11 4.20435 10.6839 3.44129 10.1213 2.87868C9.55871 2.31607 8.79565 2 8 2ZM9 19C9 19.2652 8.89464 19.5196 8.70711 19.7071C8.51957 19.8946 8.26522 20 8 20C7.73478 20 7.48043 19.8946 7.29289 19.7071C7.10536 19.5196 7 19.2652 7 19V5C7 4.73478 7.10536 4.48043 7.29289 4.29289C7.48043 4.10536 7.73478 4 8 4C8.26522 4 8.51957 4.10536 8.70711 4.29289C8.89464 4.48043 9 4.73478 9 5V19Z"
      fill="#333333"
    />
  </svg>
);

const stopIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 8H9C8.73479 8 8.48043 8.10536 8.2929 8.29289C8.10536 8.48043 8 8.73478 8 9V15C8 15.2652 8.10536 15.5196 8.2929 15.7071C8.48043 15.8946 8.73479 16 9 16H15C15.2652 16 15.5196 15.8946 15.7071 15.7071C15.8946 15.5196 16 15.2652 16 15V9C16 8.73478 15.8946 8.48043 15.7071 8.29289C15.5196 8.10536 15.2652 8 15 8ZM14 14H10V10H14V14ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z"
      fill="white"
    />
  </svg>
);

const continueIcon = (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.04 9.00003L9.37997 3.46003C8.85725 3.15819 8.26397 3.00006 7.66036 3.00172C7.05676 3.00338 6.46435 3.16476 5.9433 3.46947C5.42225 3.77417 4.99112 4.21135 4.69372 4.7366C4.39631 5.26185 4.24321 5.85646 4.24997 6.46003V17.58C4.24997 18.4871 4.61029 19.357 5.25167 19.9983C5.89304 20.6397 6.76293 21 7.66997 21C8.27041 20.999 8.86006 20.8404 9.37997 20.54L19.04 15C19.559 14.6996 19.99 14.268 20.2896 13.7485C20.5891 13.2289 20.7468 12.6397 20.7468 12.04C20.7468 11.4403 20.5891 10.8511 20.2896 10.3316C19.99 9.81206 19.559 9.38044 19.04 9.08003V9.00003ZM18.04 13.19L8.37997 18.81C8.16346 18.9327 7.91884 18.9972 7.66997 18.9972C7.4211 18.9972 7.17648 18.9327 6.95997 18.81C6.74407 18.6854 6.56479 18.5061 6.44015 18.2902C6.31552 18.0743 6.24993 17.8293 6.24997 17.58V6.42003C6.24993 6.17072 6.31552 5.9258 6.44015 5.70989C6.56479 5.49397 6.74407 5.31468 6.95997 5.19003C7.17738 5.06918 7.42127 5.00392 7.66997 5.00003C7.9185 5.00513 8.16211 5.07032 8.37997 5.19003L18.04 10.77C18.256 10.8946 18.4353 11.0739 18.56 11.2898C18.6847 11.5057 18.7504 11.7507 18.7504 12C18.7504 12.2494 18.6847 12.4943 18.56 12.7102C18.4353 12.9262 18.256 13.1054 18.04 13.23V13.19Z"
      fill="white"
    />
  </svg>
);

const Steps = () => {
  let params = useParams();
  let DripData = getDripDataPermalink(params.permalink);

  const { t } = useTranslation();

  const stepsArray = DripData.steps.instructions.map((item, i) => {
    const object = { timing: item.timing, content: item.content };
    return object;
  });

  const [step, setStep] = useState(0);
  const [pause, setPause] = useState(true);
  const [minutes, seconds] = useCountdown(DripData.steps.totalTime, pause);
  var stepTiming = stepsArray[step].timing * 1000;
  const [secondLeft, setSecondLeft] = useState(stepTiming);

  const handlePauseToggle = () => {
    setPause(!pause);
  };

  useEffect(() => {
    if (step < stepsArray.length - 1) {
      const leftimer = setInterval(() => {
        if (!pause) {
          if (secondLeft > 0) {
            setSecondLeft((t) => t - 1000);
          } else {
            clearInterval(leftimer);
          }
        }
      }, 1000);

      const interval = setInterval(() => {
        var i = step + 1;
        if (!pause) {
          setStep((step) => step + 1);
          setSecondLeft(stepsArray[i].timing * 1000);
        } else {
          clearInterval(interval);
        }
      }, secondLeft);

      return () => {
        clearInterval(interval);
        clearInterval(leftimer);
      };
    }
  }, [step, stepsArray.length, pause, secondLeft, stepTiming, stepsArray]);

  return (
    <div className="container mb-11">
      <div className="mt-6 mb-6 text-2xl text-center font-patrick-hand">
        {minutes}
        <span>:</span>
        {seconds}
      </div>
      <div className="grid grid-cols-2 gap-4 mb-11">
        <Button
          color={pause ? "primary" : "secondary"}
          size="md"
          startIcon={pause ? continueIcon : pauseIcon}
          onClick={handlePauseToggle}
        >
          {pause ? "Start" : t("BUTTON_PAUSE")}
        </Button>

        <Link to="/home">
          <Button
            className="w-full text-primary-content"
            color="error"
            size="md"
            startIcon={stopIcon}
          >
            Stop
          </Button>
        </Link>
      </div>
      <div className="pb-11">
        {stepsArray.map((item, i) => (
          <StepItem
            key={i}
            timer={stepsArray[i].timing}
            stepContent={item.content}
            stepActive={step === i ? true : false}
            stepPause={pause}
          />
        ))}
      </div>
      {minutes === 0 && seconds < 8 && (
        <Link to="/home">
          <Button
            className="block w-64 mx-auto"
            color="primary"
            size="lg"
            fullWidth
          >
            {t("BUTTON_BACK_HOME_FINISH")}
          </Button>
        </Link>
      )}
    </div>
  );
};

export default Steps;
