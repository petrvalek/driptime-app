import React from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

// Import Swiper React components
import { Pagination, Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Button } from "react-daisyui";
import { useTranslation } from "react-i18next";

const Onboarding = () => {
  const { t } = useTranslation();
  const [cookies, setCookie] = useCookies(["user"]);
  let onboardingScreens = [
    {
      title: "V60 dripper",
      content: t("ONBOARDING_V60_ABOUT"),
      img: "assets/v60-dripper.svg",
      isLastitem: false,
    },
    {
      title: "FrenchPress",
      content: t("ONBOARDING_FRENCH_ABOUT"),
      img: "assets/frenchpress.svg",
      isLastitem: false,
    },
    {
      title: "Moka pot",
      content: t("ONBOARDING_MOKA_ABOUT"),
      img: "assets/mokapot.svg",
      isLastitem: false,
    },
    {
      title: "AeroPress",
      content: t("ONBOARDING_AERO_ABOUT"),
      img: "assets/aeropress.svg",
      isLastitem: true,
    },
  ];

  function handleCookie() {
    setCookie("user", "onboarded", {
      path: "/",
    });
  }

  return (
    <Swiper
      modules={[Pagination, Navigation, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      navigation
    >
      {onboardingScreens.map((data, i) => (
        <SwiperSlide key={i}>
          <div className="container relative flex flex-col items-center justify-end h-screen">
            <img
              className="relative mx-auto mb-6"
              src={data.img}
              alt={data.title}
            />
            <h1 className="mb-4">{data.title}</h1>
            <p className="mb-12 text-base text-center">{data.content}</p>
            {data.isLastitem ? (
              <Link to="/home">
                <Button
                  className="w-64 mx-auto mb-11"
                  color="primary"
                  size="lg"
                  fullWidth
                  onClick={handleCookie}
                >
                  {t("BUTTON_ONBOARDING")}
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
