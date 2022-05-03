import { React, useState, useEffect } from "react";
import PropTypes from "prop-types";

const StepItem = (props) => {
  const timing = props.timer;

  const [pie, setPie] = useState(timing - timing);
  const [timer, setTimer] = useState(props.timer);
  const [active, setActive] = useState(props.stepActive);
  const PERCENT = 100 / timing;

  // For percentage pie
  useEffect(() => {
    if (timer > 0 && active) {
      const interval = setInterval(() => {
        setPie((t) => PERCENT + t);
        setTimer((t) => t - 1);
        setActive(true)
      }, 1000);

      return () => clearInterval(interval);
    } else (setActive(false))
  }, [timing, timer, active, PERCENT]);

  return (
    <div className={`flex items-center mb-4 ${active ? "opacity-100" : "opacity-50"}`}>
      <div className="relative flex-none w-10 h-10 text-center rounded-full bg-base-200 font-patrick-hand">
        <span className="absolute left-0 right-0 mx-auto -translate-y-1/2 top-1/2">
          {timer}
        </span>
        <div
          className="pie-chart"
          style={{
            background: `conic-gradient(#f3c872 ${pie}%, #fdf6e8 0)`,
          }}
        ></div>
      </div>
      <p className="ml-4">{props.stepContent}</p>
    </div>
  );
};

StepItem.propTypes = {
  timer: PropTypes.number.isRequired,
  stepContent: PropTypes.string.isRequired,
  stepActive: PropTypes.bool.isRequired,
};

export default StepItem;
