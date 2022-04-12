import { React, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { getDripDataPermalink } from "./DripData";

import Appbar from "./Components/Appbar";
import Roughness from "./Components/Roughness";
import Range from "./Components/Range";
import { Button, ButtonGroup } from "react-daisyui";

const DripItem = () => {
  let params = useParams();
  let DripData = getDripDataPermalink(params.permalink);

  const [tab, setTab] = useState(1);
  const [coffeeGrams, setCoffeeGrams] = useState(DripData.coffee.normal);

  const convertToF = (e) => ((+parseInt(e) * 9) / 5 + 32).toFixed(0);
  const convertToOZ = (e) => (+parseInt(e) / 28.34952).toFixed(2);

  return (
    <div className="container">
      <Appbar title={DripData.name} />
      <div className="flex flex-col items-center justify-around h-screen">
        <div>
          <ButtonGroup className="toggle-buttons">
            <Button
              className="font-normal bg-transparent font-montserrat border-Secondary text-neutral"
              onClick={(event) => {
                setTab(1);
                setCoffeeGrams(DripData.coffee.normal);
              }}
              active={tab === 1 ? true : false}
            >
              Normal
            </Button>
            <Button
              className="font-normal bg-transparent font-montserrat border-Secondary text-neutral"
              onClick={(event) => {
                setTab(2);
                setCoffeeGrams(DripData.coffee.strong);
              }}
              active={tab === 2 ? true : false}
            >
              Strong
            </Button>
          </ButtonGroup>
          <p className="flex mt-2 text-xs justify-evenly">
            <span>{DripData.ratio.normal}</span>
            <span>Ratio</span>
            <span>{DripData.ratio.strong}</span>
          </p>
        </div>
        <div className="mt-12">
          <Range />
          <div>
            <span>{coffeeGrams} g</span>
            <span>{convertToOZ(`${coffeeGrams}`)} oz</span>
          </div>
          <div>
            <span>{DripData.water} ml</span>{" "}
            <span>{convertToOZ(`${DripData.water}`)}</span>
          </div>
        </div>
        <div className="text-center">
          <div className="mb-4">
            <p className="text-sm font-semibold">Water temperature</p>
            <p className="text-sm ">
              <span>{DripData.temperature} °C</span>
              <span className="mx-2">/</span>
              <span>
                {convertToF(`${DripData.temperature}`)}
                °F
              </span>
            </p>
          </div>
          <div className="mb-10">
            <p className="text-sm font-semibold">Coffee roughness</p>
            <Roughness intensity={parseInt(DripData.roughness)} />
          </div>
        </div>
        <Link to="/#">
          <Button
            className="w-64 mx-auto mb-11"
            color="primary"
            size="lg"
            fullWidth
          >
            Let’s start!
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DripItem;
