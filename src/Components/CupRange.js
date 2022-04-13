import { React } from "react";

import { Range } from "react-daisyui";

const CupRange = ({ coffeeCup, setCoffeeCup, coffeeGrams, water }) => {
  const COFFEE_QTY = coffeeGrams * coffeeCup;
  const WATER_QTY = water * coffeeCup;

  const convertToOZ = (e) => (+parseInt(e) / 28.34952).toFixed(2);

  const handleChange = (e) => {
    setCoffeeCup(e.target.value / 12.5);
  };

  return (
    <div className="flex items-end mt-20 mb-10">
      <div className="flex flex-col items-center">
        <span className="mb-1">{COFFEE_QTY} g</span>
        <span className="mb-1">{convertToOZ(`${COFFEE_QTY}`)} oz</span>
        <p className="flex items-center font-semibold">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-1"
          >
            <g>
              <path
                d="M11.0179 0.55893C10.6149 1.02813 10.2713 1.52253 9.83712 1.91733C7.86338 3.712 7.09232 5.93346 7.29899 8.56706C7.37232 9.5028 7.37218 10.4679 7.22752 11.3917C6.96765 13.0519 5.94832 14.2776 4.60645 15.2127C4.34885 15.3921 3.82459 15.3956 3.51739 15.2628C1.96965 14.5927 1.16805 13.2856 1.08632 11.6813C0.850586 7.06573 2.71125 3.4064 6.48739 0.773331C7.90232 -0.213336 9.56072 -0.223603 11.0179 0.55893Z"
                fill="#3B2517"
              />
              <path
                d="M5.41602 15.952C6.03962 15.4125 6.47801 15.0551 6.89215 14.6712C8.45468 13.2233 9.07268 11.4364 8.65162 9.35134C7.95202 5.88681 9.67561 3.44014 12.0077 1.25961C12.1813 1.09748 12.784 1.16214 13.0239 1.34081C14.5088 2.44694 15.0047 4.07494 14.9647 5.81014C14.8725 9.78988 13.17 12.9592 9.83388 15.178C8.61668 15.9875 7.25482 16.3293 5.41602 15.952Z"
                fill="#3B2517"
              />
            </g>
          </svg>

          <span>Coffee</span>
        </p>
      </div>
      <div className="flex flex-col">
        <div className="mb-10 -rotate-90">
          <Range
            color="secondary"
            size="lg"
            min={12.5}
            step={12.5}
            value={coffeeCup * 12.5}
            onChange={handleChange}
          />
        </div>
        <p className="mt-4 font-semibold text-center">{coffeeCup} cup(s)</p>
      </div>
      <div className="flex flex-col items-center">
        <span className="mb-1">{WATER_QTY} ml</span>{" "}
        <span className="mb-1">{convertToOZ(`${WATER_QTY}`)} oz</span>
        <p className="flex items-center font-semibold">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-1"
          >
            <path
              d="M7.85696 15.619C6.2404 15.619 4.69005 14.9769 3.54697 13.8338C2.40389 12.6907 1.76172 11.1404 1.76172 9.52381C1.76172 6.85562 3.82648 4.72152 5.6421 2.76571L7.85696 0.380951L10.0718 2.76571C11.8874 4.72228 13.9522 6.85638 13.9522 9.52381C13.9522 11.1404 13.31 12.6907 12.1669 13.8338C11.0239 14.9769 9.47351 15.619 7.85696 15.619V15.619Z"
              fill="#69D2F3"
            />
          </svg>

          <span>Water</span>
        </p>
      </div>
    </div>
  );
};

export default CupRange;
