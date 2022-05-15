import React from "react";
import { useTranslation } from "react-i18next";
import Appbar from "./Components/Appbar";
import Roughness from "./Components/Roughness";

const Page = () => {
  const { t } = useTranslation();
  return (
    <div className="container">
      <Appbar title={t("TIPS_PAGE_TITLE")} />
      <img
        className="relative mx-auto mt-16 mb-11"
        src="assets/driptime-logo.svg"
        alt="Driptime - Welcome"
      />
      <div className="mt-10">
        <h2 className="mb-4 text-lg font-semibold text-center">
          {t("TOOLS_TITLE")}
        </h2>
        <ul className="text-center">
          <li>{t("TOOLS_GRINDER")}</li>
          <li>{t("TOOLS_COFFEE_FILTER")}</li>
          <li>{t("TOOLS_KETTLE")}</li>
          <li>{t("TOOLS_Q_COFFEE")}</li>
        </ul>
      </div>
      <div className="mt-10">
        <h2 className="mb-4 text-lg font-semibold text-center">
          {t("COFFEE_ROUGHNESS_TIP_TITLE")}
        </h2>
        <p className="text-sm font-semibold text-center">
          {t("COFFEE_ROUGHNESS")}
        </p>
        <div className="flex items-center justify-center align-baseline">
          <span className="mt-2 mr-8 text-center">{t("Gently")}</span>
          <Roughness intensity={5} />
          <span className="mt-2 ml-8 text-center">{t("Roughly")}</span>
        </div>
      </div>
    </div>
  );
};

export default Page;
