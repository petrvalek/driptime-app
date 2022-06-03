import React from "react";

import { Card } from "react-daisyui";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Home = () => {
  const { t } = useTranslation();

  let homeData = [
    {
      title: t("HOME_TIPS_TITLE"),
      content: t("HOME_TIPS_CONTENT"),
      link: "/before-you-started",
      img: "assets/welcome-driptime.svg",
      side: true,
      fullWidth: true,
      textCenter: false,
    },
    {
      title: "ColdBrew",
      badge: "SUMMER EDITION",
      content: t("HOME_COLDBREW_CONTENT"),
      link: "/coldbrew",
      img: "assets/coldbrew-single.svg",
      side: true,
      fullWidth: true,
      textCenter: false,
    },
    {
      title: "V60 Dripper",
      content: "",
      link: "/v60-dripper",
      img: "assets/v60-dripper-single.svg",
      side: false,
      fullWidth: false,
      textCenter: true,
    },
    {
      title: "FrenchPress",
      content: "",
      link: "/frenchpress",
      img: "assets/frenchpress-single.svg",
      side: false,
      fullWidth: false,
      textCenter: true,
    },
    {
      title: "Moka pot",
      content: "",
      link: "/moka-pot",
      img: "assets/moka-pot-single.svg",
      side: false,
      fullWidth: false,
      textCenter: true,
    },
    {
      title: "Aeropress",
      content: "",
      link: "/aeropress",
      img: "assets/aeropress-single.svg",
      side: false,
      fullWidth: false,
      textCenter: true,
    },
  ];

  return (
    <div className="container">
      <h1 className="mt-10 text-lg">{t("HOME_TITLE")}</h1>
      <div className="grid grid-cols-2 gap-4 mt-6">
        {homeData.map((data, index) => (
          <Link
            className={`${data.fullWidth ? "col-span-2" : ""}`}
            to={data.link}
            key={index}
          >
            <Card className="bg-Background-Base-200" side={data.side} compact>
              <Card.Body>
                {!data.fullWidth ? (
                  <Card.Image src={data.img} alt={data.title} width={80} />
                ) : (
                  ""
                )}
                {data.badge && (
                  <p className="inline-block w-max mb-1 text-Background-Base-100 text-xxs text-white px-2 rounded-full font-semibold bg-Primary">
                    {data.badge}
                  </p>
                )}
                <Card.Title
                  tag="h2"
                  className={`text-base font-semibold leading-5 ${
                    data.textCenter ? "self-center" : ""
                  }`}
                >
                  {data.title}
                </Card.Title>
                <p className="text-sm ">{data.content}</p>
              </Card.Body>
              {data.fullWidth ? (
                <Card.Image src={data.img} alt={data.title} className=" w-24" />
              ) : (
                ""
              )}
            </Card>
          </Link>
        ))}
      </div>
      <Link to="/authors">
        <p className="pb-10 mt-8 text-xs text-center underline">
          {t("AUTHORS_ABOUT_LINK")}
        </p>
      </Link>
    </div>
  );
};

export default Home;
