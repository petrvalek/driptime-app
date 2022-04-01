import React from "react";
import { Link } from "react-router-dom";

// Import Swiper React components
import { Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Button } from "react-daisyui";

const Onboarding = () => {
  let onboardingScreens = [
    {
      title: "V60 dripper",
      content:
        "One word - simplicity! The V60 producing very full taste of coffee with all its flavors. You can make bitter and sour coffee according to its origin.",
      img: "assets/v60-dripper.svg",
      isLastitem: false,
    },
    {
      title: "FrenchPress",
      content:
        "Is the easiest brewer to master. It producing coffee with heaviest body of any brewing method. Rest coffee for a few minutes before serving.",
      img: "assets/frenchpress.svg",
      isLastitem: false,
    },
    {
      title: "Moka pot",
      content:
        "Every home in Italy has a Moka Pot. It's the closest to an espresso at home. The moka pot produces very heavy, dense coffee with a little crema.",
      img: "assets/mokapot.svg",
      isLastitem: false,
    },
    {
      title: "AeroPress",
      content:
        "Best friend on the road! You can make a great espresso wherever you are e.g. in a campsite, in a caravan or in nature... imagination does not end.",
      img: "assets/aeropress.svg",
      isLastitem: true,
    },
  ];
  return (
    <Swiper
      modules={[Pagination, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      {onboardingScreens.map((data) => (
        <SwiperSlide>
          <div className="container relative flex flex-col items-center justify-end h-screen pb-16">
            <img
              className="relative mx-auto mb-12"
              src={data.img}
              alt={data.title}
            />
            <h1 className="mb-4">{data.title}</h1>
            <p className="mb-16 text-base text-center">{data.content}</p>
            {data.isLastitem ? (
              <Link to="/home">
                <Button
                  className="absolute left-0 right-0 w-64 mx-auto bottom-4"
                  color="primary"
                  size="lg"
                  fullWidth
                >
                  Let’s brew it!
                </Button>
              </Link>
            ) : (
              ""
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Onboarding;
