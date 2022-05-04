import { React, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { getDripDataPermalink } from "./DripData";

import Appbar from "./Components/Appbar";
import Roughness from "./Components/Roughness";
import CupRange from "./Components/CupRange";
import { Button, ButtonGroup } from "react-daisyui";
import { useTranslation } from "react-i18next";

const DripItem = () => {
  const { t } = useTranslation();
  let params = useParams();
  let DripData = getDripDataPermalink(params.permalink);

  const [tab, setTab] = useState(1);
  const [coffeeCup, setCoffeeCup] = useState(1);
  const [coffeeGrams, setCoffeeGrams] = useState(DripData.coffee.normal);

  const convertToF = (e) => ((+parseInt(e) * 9) / 5 + 32).toFixed(0);

  return (
    <div className="container">
      <Appbar title={DripData.name} />
      <div className="flex flex-col items-center justify-around h-screen">
        <div>
          <ButtonGroup className="toggle-buttons">
            <Button
              className="font-normal bg-transparent font-montserrat border-Secondary text-neutral"
              onClick={() => {
                setTab(1);
                setCoffeeGrams(DripData.coffee.normal);
              }}
              active={tab === 1 ? true : false}
            >
              {t("RATIO_NORMAL")}
            </Button>
            <Button
              className="font-normal bg-transparent font-montserrat border-Secondary text-neutral"
              onClick={() => {
                setTab(2);
                setCoffeeGrams(DripData.coffee.strong);
              }}
              active={tab === 2 ? true : false}
            >
              {t("RATIO_STRONG")}
            </Button>
          </ButtonGroup>
          <p className="flex mt-2 text-xs justify-evenly">
            <span>1:{DripData.ratio.normal}</span>
            <span>{t("RATIO")}</span>
            <span>1:{DripData.ratio.strong}</span>
          </p>
        </div>
        <CupRange
          coffeeCup={coffeeCup}
          setCoffeeCup={setCoffeeCup}
          water={DripData.water}
          coffeeGrams={coffeeGrams}
        />
        <div className="text-center">
          <div className="mb-4">
            <p className="text-sm font-semibold">{t("WATER_TEMP")}</p>
            <p className="">
              <span>{DripData.temperature} °C</span>
              <span className="mx-2">/</span>
              <span>
                {convertToF(`${DripData.temperature}`)}
                °F
              </span>
            </p>
          </div>
          <div className="mb-10">
            <p className="text-sm font-semibold">{t("COFFEE_ROUGHNESS")}</p>
            <Roughness intensity={DripData.roughness} />
          </div>
        </div>
        <Link to={`/${DripData.permalink}/steps`}>
          <Button
            className="w-64 mx-auto mb-11"
            color="primary"
            size="lg"
            fullWidth
          >
            {t("BUTTON_READY")}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DripItem;
