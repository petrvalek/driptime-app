import { React } from "react";
import { useParams, Link } from "react-router-dom";

import { getDripDataPermalink } from "./DripData";

import Appbar from "./Components/Appbar";
import Roughness from "./Components/Roughness";
import { Button, ButtonGroup } from "react-daisyui";

const Dripping = () => {
  let params = useParams();
  let DripData = getDripDataPermalink(params.permalink);

  const convertToF = (e) => ((+parseInt(e) * 9) / 5 + 32).toFixed(0);

  return (
    <div className="container">
      <Appbar title={DripData.name} />
      <div className="flex flex-col items-center">
        <div>
          <ButtonGroup>
            <Button className="font-sans">Normal</Button>
            <Button>Strong</Button>
          </ButtonGroup>
          <p className="flex justify-around mt-2 text-xs">
            <span>{DripData.ratio.normal}</span>
            <span>Ratio</span>
            <span>{DripData.ratio.strong}</span>
          </p>
        </div>
        <div className="text-center">
          <div className="mb-4">
            <p className="text-sm font-semibold">Water temperature</p>
            <p className="text-sm ">
              {DripData.temperature} °C /{" "}
              {convertToF(`${DripData.temperature}`)}
              °F
            </p>
          </div>
          <div className="mb-10">
            <p className="text-sm font-semibold">Coffee roughness</p>
            <Roughness intensity={parseInt(DripData.roughness)} />
          </div>
        </div>
        <Link to="/#">
          <Button className="w-64 mb-11" color="primary" size="lg" fullWidth>
            Let’s start!
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Dripping;
