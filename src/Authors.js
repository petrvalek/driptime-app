import React from "react";
import { useTranslation } from "react-i18next";
import Appbar from "./Components/Appbar";

const Authors = () => {
  const { t } = useTranslation();
  return (
    <div className="container">
      <Appbar title={t("AUTHORS_PAGE_TITLE")} />
      <div className="mt-10">
        <h2 className="mb-4 text-sm font-semibold">Idea, code & design</h2>
        <p>Petr Válek</p>
        <ul className="flex text-sm">
          <li>
            <a
              className="text-sm underline underline-offset-1"
              href="https://valekpetr.com/"
              target="_blank"
              rel="noreferrer"
            >
              Portfolio
            </a>
          </li>
          <li>
            <span className="h-full mx-2">|</span>
          </li>
          <li>
            <a
              className="text-sm underline underline-offset-1"
              href="https://www.linkedin.com/in/valekpetr/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
      <div className="mt-10">
        <h2 className="mb-4 text-sm font-semibold">{t("SPECIAL_THANKS")}</h2>
        <p>Václav Zeman</p>
        <ul className="flex text-sm">
          <li>
            <a
              className="text-sm underline underline-offset-1"
              href="https://www.linkedin.com/in/vaclavzeman/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
        <p className="mt-4 text-sm">{t("SPECIAL_THANKS_CONTENT")}</p>
      </div>
      <div className="mt-10">
        <p className="mb-2 text-sm font-semibold">{t("BUG_TITLE")}</p>
        <p className="text-sm">{t("BUG_CONTENT")}</p>
        <a
          className="text-sm underline underline-offset-1"
          href="mailto:hello@valekpetr.com?subject=DripTime"
        >
          hello@valekpetr.com
        </a>
      </div>
      <div className="mt-10">
        <p className="mb-2 text-sm font-semibold">Credits</p>
        <a
          className="text-sm"
          href="https://www.freepik.com/vectors/cafe-pattern"
        >
          Cafe pattern vector created by rawpixel.com - www.freepik.com
        </a>
      </div>
    </div>
  );
};

export default Authors;
