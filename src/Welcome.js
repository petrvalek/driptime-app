import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-daisyui";

import LangSelector from "./Components/LangSelector";
import { useTranslation } from "react-i18next";

const Welcome = () => {
  const { t } = useTranslation();
  return (
    <div className="relative flex flex-col items-center justify-end h-screen md:justify-center">
      <LangSelector />
      <img
        className="relative mx-auto mt-5 mb-11"
        src="assets/driptime-logo.svg"
        alt="Driptime - Welcome"
      />
      <h1 className="mb-4 text-2xl">DripTime</h1>
      <p className="mb-10 text-base text-center">{t("CLAIM")}</p>
      <Link to="/welcome">
        <Button className="w-64 mb-11" color="primary" size="lg" fullWidth>
          {t("BUTTON_WELCOME")}
        </Button>
      </Link>
    </div>
  );
};

export default Welcome;
