import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-daisyui";

const Welcome = () => {
  return (
    <div className="relative flex flex-col items-center justify-end h-screen md:justify-center">
      <img
        className="relative mx-auto mt-16 mb-11"
        src="assets/driptime-logo.svg"
        alt="Driptime - Welcome"
      />
      <h1 className="mb-4 text-2xl">DripTime</h1>
      <p className="mb-10 text-base text-center">
        Your coffee helper <br />
        in your pocket!
      </p>
      <Link to="/welcome">
        <Button className="w-64 mb-11" color="primary" size="lg" fullWidth>
          Explore & Taste
        </Button>
      </Link>
    </div>
  );
};

export default Welcome;
