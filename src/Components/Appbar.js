import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import { Button } from "react-daisyui";
import { Link } from "react-router-dom";

const Appbar = (props) => {
  const { t } = useTranslation();
  const backIcon = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.5 12.8L14.2 18.4C14.6 18.8 15.2 18.8 15.6 18.4C16 18 16 17.4 15.6 17L10.7 12L15.6 6.99999C16 6.59999 16 5.99999 15.6 5.59999C15.4 5.39999 15.2 5.29999 14.9 5.29999C14.6 5.29999 14.4 5.39999 14.2 5.59999L8.5 11.2C8.1 11.7 8.1 12.3 8.5 12.8C8.5 12.7 8.5 12.7 8.5 12.8Z"
        fill="black"
      />
    </svg>
  );
  return (
    <div className="flex items-center justify-center w-full mt-2 mb-2">
      <Link className="self-start flex-1" to="/home">
        <Button
          className="px-0 text-neutral"
          size="lg"
          variant="link"
          startIcon={backIcon}
        >
          {t("BUTTON_BACK_HOME")}
        </Button>
      </Link>
      <h1 className="flex-auto">{props.title}</h1>
    </div>
  );
};

Appbar.propTypes = {
  title: PropTypes.string,
};

export default Appbar;
