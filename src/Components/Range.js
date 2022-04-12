import { React, useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

const Range = (props) => {
  const [ratio, setRatio] = useState(50);
  const intervalRef = useRef(null);

  // 💩💩💩💩💩💩💩💩💩💩💩💩
  const startRatio = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setRatio((prevRatio) => prevRatio + 1);
    }, 10);
  };

  const stopRatio = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setRatio((prevRatio) => prevRatio - 1);
    }, 10);
  };

  return (
    <div
      className="relative flex flex-col justify-end h-64 rounded-lg cursor-grab bg-base-200"
      onMouseDown={startRatio}
      onMouseUp={stopRatio}
      onMouseLeave={stopRatio}
    >
      <div
        className="flex items-center justify-center w-full bg-Additional-Water "
        style={{ height: `${ratio}px` }}
      >
        <svg
          width="14"
          height="16"
          viewBox="0 0 14 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.0001 16C5.30271 16 3.67485 15.3257 2.47461 14.1255C1.27438 12.9253 0.600098 11.2974 0.600098 9.6C0.600098 6.7984 2.7681 4.5576 4.6745 2.504L7.0001 0L9.3257 2.504C11.2321 4.5584 13.4001 6.7992 13.4001 9.6C13.4001 11.2974 12.7258 12.9253 11.5256 14.1255C10.3253 15.3257 8.69748 16 7.0001 16V16Z"
            fill="white"
          />
        </svg>
      </div>
      <div
        className="flex items-center justify-center w-full bg-Additional-Coffee"
        style={{ height: `${ratio}px` }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              d="M11.0182 0.55893C10.6151 1.02813 10.2715 1.52253 9.83736 1.91733C7.86363 3.712 7.09256 5.93346 7.29923 8.56706C7.37256 9.5028 7.37243 10.4679 7.22776 11.3917C6.9679 13.0519 5.94856 14.2776 4.6067 15.2127C4.3491 15.3921 3.82483 15.3956 3.51763 15.2628C1.9699 14.5927 1.1683 13.2856 1.08656 11.6813C0.85083 7.06573 2.7115 3.4064 6.48763 0.773331C7.90256 -0.213336 9.56096 -0.223603 11.0182 0.55893Z"
              fill="white"
            />
            <path
              d="M5.4165 15.952C6.0401 15.4125 6.4785 15.0551 6.89264 14.6712C8.45517 13.2233 9.07317 11.4364 8.6521 9.35134C7.9525 5.88681 9.6761 3.44014 12.0082 1.25961C12.1818 1.09748 12.7845 1.16214 13.0244 1.34081C14.5093 2.44694 15.0052 4.07494 14.9652 5.81014C14.873 9.78988 13.1705 12.9592 9.83437 15.178C8.61717 15.9875 7.2553 16.3293 5.4165 15.952Z"
              fill="white"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

Range.propTypes = {};

export default Range;
