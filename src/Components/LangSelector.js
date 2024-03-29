import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const englishFlag = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_121_1292"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="24"
      height="24"
    >
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0_121_1292)">
      <path
        d="M0 0H2.22188L5.80313 0.984375L8.86875 0H10.4344L12.0375 0.778125L13.5656 0H15.1312L18.4313 1.06875L21.7875 0H22.5281L23.1 0.342188L24 0V2.21719L23.0672 5.87344L24 8.86875V10.4344L23.2313 11.8687L24 13.5656V15.1312L23.2922 18.3516L24 21.7875V22.5328L23.6344 23.0438L24 24H21.7828L18.4547 23.1797L15.1312 24H13.5656L12.1594 23.0766L10.4344 24H8.87344L5.8875 23.0531L2.21719 24H1.47187L0.975 23.625L0 24V21.7828L1.06875 18.0797L0 15.1359V13.5703L1.18594 12.0703L0 10.4344V8.86875L1.04063 5.84062L0 2.2125V1.47187L0.375 1.10625L0 0Z"
        fill="#EEEEEE"
      />
      <path
        d="M2.22188 0L8.86875 6.65625V0H2.22188ZM15.1312 0V6.65625L21.7875 0H15.1312ZM0 2.2125V8.86875H6.65625L0 2.2125ZM24 2.21719L17.3484 8.86875H24V2.21719V2.21719ZM0 15.1312V21.7828L6.65156 15.1312H0V15.1312ZM17.3438 15.1312L24 21.7875V15.1312H17.3438ZM8.87344 17.3438L2.21719 24H8.87344V17.3438ZM15.1312 17.3484V24H21.7828L15.1312 17.3484Z"
        fill="#0052B4"
      />
      <path
        d="M10.4344 0V10.4344H0V13.5656H10.4344V24H13.5656V13.5656H24V10.4344H13.5656V0H10.4344V0Z"
        fill="#D80027"
      />
      <path
        d="M0 0V1.47187L7.39219 8.86875H8.86875L0 0ZM22.5281 0L15.1312 7.39219V8.86875L24 0H22.5281ZM8.86875 15.1312L0 24H1.47187L8.86875 16.6078V15.1312V15.1312ZM15.1312 15.1312L23.9953 24H24V22.5328L16.6078 15.1312H15.1312V15.1312Z"
        fill="#D80027"
      />
    </g>
  </svg>
);

const czechFlag = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_121_1300"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="24"
      height="24"
    >
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0_121_1300)">
      <path d="M0 0H24V12L11.5781 14.1188L0 0Z" fill="white" />
      <path d="M9.84375 12H24V24H0L9.84375 12Z" fill="#D80027" />
      <path d="M0 0V24L12 12L0 0Z" fill="#0052B4" />
    </g>
  </svg>
);

const LangSelector = () => {
  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState("en");

  const changeLanguage = (event) => {
    setSelectedLang(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="mt-4 mb-2">
      <p className="mb-3 text-sm font-semibold text-center">Language</p>
      <div
        className="flex items-center justify-between gap-4"
        onChange={changeLanguage}
      >
        <label
          className={`flex items-center justify-between px-3 py-2 border border-base-200 rounded-full cursor-pointer ${
            selectedLang === "en" && "bg-base-200"
          }`}
        >
          <input
            className="hidden"
            type="radio"
            value="en"
            name="language"
            checked={selectedLang === "en"}
            readOnly
          />
          {englishFlag}
          <span
            className={`pl-2 text-sm ${
              selectedLang === "en" && "font-semibold"
            }`}
          >
            English
          </span>
        </label>
        <label
          className={`flex items-center justify-between px-3 py-2 border border-base-200 rounded-full cursor-pointer ${
            selectedLang === "cs" && "bg-base-200"
          }`}
        >
          <input
            className="hidden"
            type="radio"
            value="cs"
            name="language"
            checked={selectedLang === "cs"}
            readOnly
          />
          {czechFlag}
          <span
            className={`pl-2 text-sm ${
              selectedLang === "cs" && "font-semibold "
            }`}
          >
            Czech
          </span>
        </label>
      </div>
    </div>
  );
};

export default LangSelector;
