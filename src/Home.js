import React from "react";

import { Card } from "react-daisyui";
import { Link } from "react-router-dom";

const Home = () => {
  let homeData = [
    {
      title: "Before you started",
      content: "lorem ipsum",
      link: "/before-you-started",
      img: "https://api.lorem.space/image/shoes?w=80&h=128",
      side: true,
      fullWidth: true,
      textCenter: false,
    },
    {
      title: "V60 Dripper",
      content: "",
      link: "/before-you-started",
      img: "assets/v60-dripper-single.svg",
      side: false,
      fullWidth: false,
      textCenter: true,
    },
    {
      title: "FrenchPress",
      content: "",
      link: "/before-you-started",
      img: "assets/frenchpress-single.svg",
      side: false,
      fullWidth: false,
      textCenter: true,
    },
    {
      title: "Moka pot",
      content: "",
      link: "/before-you-started",
      img: "assets/moka-pot-single.svg",
      side: false,
      fullWidth: false,
      textCenter: true,
    },
    {
      title: "Aeropress",
      content: "",
      link: "/before-you-started",
      img: "assets/aeropress-single.svg",
      side: false,
      fullWidth: false,
      textCenter: true,
    },
  ];

  return (
    <div className="container">
      <h1 className="mt-10 text-lg">Choose your favourite tool</h1>
      <div className="grid grid-cols-2 gap-4 mt-6">
        {homeData.map((data) => (
          <Link
            className={`${data.fullWidth ? "col-span-2" : ""}`}
            to={data.link}
          >
            <Card className="bg-Background-Base-200" side={data.side} compact>
              <Card.Body>
                {!data.fullWidth ? (
                  <Card.Image src={data.img} alt={data.title} width={80} />
                ) : (
                  ""
                )}
                <Card.Title
                  tag="h2"
                  className={`text-base font-semibold  ${
                    data.textCenter ? "self-center" : ""
                  }`}
                >
                  {data.title}
                </Card.Title>
                <p>{data.content}</p>
              </Card.Body>
              {data.fullWidth ? (
                <Card.Image src={data.img} alt={data.title} />
              ) : (
                ""
              )}
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
