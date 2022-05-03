import { React, useState, useEffect } from "react";
import PropTypes from "prop-types";

const StepItem = (props) => {
  const timing = props.timer;

  const [pie, setPie] = useState(timing - timing);
  const [timer, setTimer] = useState(props.timer);
  const active = props.stepActive;
  const pause = props.stepPause;
  const PERCENT = 100 / timing;

  const successIcon = (
    <svg
      className="block mx-auto"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.4732 4.8067C12.4112 4.74421 12.3375 4.69461 12.2563 4.66077C12.175 4.62692 12.0879 4.6095 11.9999 4.6095C11.9119 4.6095 11.8247 4.62692 11.7435 4.66077C11.6623 4.69461 11.5885 4.74421 11.5266 4.8067L6.55989 9.78003L4.47322 7.6867C4.40887 7.62454 4.33291 7.57566 4.24967 7.54286C4.16644 7.51006 4.07755 7.49397 3.9881 7.49552C3.89865 7.49706 3.81037 7.51622 3.72832 7.55188C3.64627 7.58754 3.57204 7.63902 3.50989 7.70336C3.44773 7.76771 3.39885 7.84367 3.36605 7.92691C3.33324 8.01014 3.31716 8.09903 3.31871 8.18848C3.32025 8.27793 3.3394 8.36621 3.37507 8.44826C3.41073 8.53031 3.4622 8.60454 3.52655 8.6667L6.08655 11.2267C6.14853 11.2892 6.22226 11.3388 6.3035 11.3726C6.38474 11.4065 6.47188 11.4239 6.55989 11.4239C6.64789 11.4239 6.73503 11.4065 6.81627 11.3726C6.89751 11.3388 6.97124 11.2892 7.03322 11.2267L12.4732 5.7867C12.5409 5.72427 12.5949 5.6485 12.6318 5.56417C12.6688 5.47983 12.6878 5.38876 12.6878 5.2967C12.6878 5.20463 12.6688 5.11356 12.6318 5.02923C12.5949 4.94489 12.5409 4.86912 12.4732 4.8067V4.8067Z"
        fill="white"
      />
    </svg>
  );

  // For percentage pie
  useEffect(() => {
    if (!pause) {
      const interval = setInterval(() => {
        if (timer > 0 && active) {
          setPie((t) => PERCENT + t);
          setTimer((t) => t - 1);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timing, timer, active, PERCENT, pause]);

  return (
    <div
      className={`flex items-center mb-4 transition-opacity duration-300 ${
        active ? "opacity-100" : "opacity-50"
      }`}
    >
      <div
        className={`${
          timer === 0 ? "bg-Primary" : " bg-base-200"
        } relative flex-none w-10 h-10 text-center rounded-full font-patrick-hand`}
      >
        <span className="absolute left-0 right-0 mx-auto -translate-y-1/2 top-1/2">
          {timer === 0 ? successIcon : timer}
        </span>
        <div
          className={`${timer === 0 ? "d-none" : "pie-chart"}`}
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
