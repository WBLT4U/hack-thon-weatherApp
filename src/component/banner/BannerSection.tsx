import { toggleVideoModalOpen } from "../../redux/features/videoModalSlice";
import { useAppDispatch } from "../../redux/hooks";
import { useEffect, useState } from "react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import gsap from "gsap";
import SplitType from "split-type";

const BannerSection = () => {
  const dispatch = useAppDispatch();
  const openVideoModal = () => {
    dispatch(toggleVideoModalOpen());
  };
  const [swiper, setSwiper] = useState<any>(null);

  useEffect(() => {
    if (swiper) {
      swiper.on("slideChange", () => {
        const currentSlide = swiper.slides[swiper.activeIndex];
        const textsToAnimate = currentSlide.querySelectorAll(".rv-text-anime");
        textsToAnimate.forEach((textToAnimate: HTMLElement) => {
          const animate = new SplitType(textToAnimate, {
            types: "words,chars",
          });
          gsap.from(animate.chars, {
            opacity: 0,
            x: 100,
            duration: 1.1,
            stagger: { amount: 0.9 },
          });
        });
      });
    }
  }, [swiper]);

  return (
    <section className="rv-20-banner_section">
      <Swiper
        autoplay={true}
        loop={true}
        effect="fade"
        navigation={{
          nextEl: ".rv-20-banner_slide_button_next",
          prevEl: ".rv-20-banner_slide_button_prev",
        }}
        modules={[EffectFade, Navigation, Autoplay]}
        onSwiper={(swiper) => setSwiper(swiper)}
      >
        <SwiperSlide className="rv-20-banner_slide">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm-10 col-md-9 col-lg-8 col-xl-7">
                <div className="rv-20-banner_content">
<<<<<<< HEAD
                  
=======
                  <span className="rv-20-banner_content_sub_heading rv-text-anime d-flex">
                    <span></span> AgricInsight Weather App
                  </span>
>>>>>>> 3aff5f546fb27eb533ec7cbdf20d5d80fa9debb9
                  <h1 className="rv-20-banner_content_heading rv-text-anime">
                  Empowering farmers with tomorrow’s weather, today.
                  </h1>

                  <div className="rv-20-banner_button_area">
                    <a href="#" className="rv-20-banner_content_btn">
                      Watch the Video
                    </a>
                    <a
                      className="rv-20-banner_content_play_btn"
                      role="button"
                      onClick={openVideoModal}
                    >
                      <i className="fas fa-play"></i> Play Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rv-20-banner_slide rv-20-banner_slide-2 ">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm-10 col-md-9 col-lg-8 col-xl-7">
                <div className="rv-20-banner_content">
<<<<<<< HEAD
                  
=======
                  <span className="rv-20-banner_content_sub_heading rv-text-anime">
                    <span></span> AgricInsight Weather App
                  </span>
>>>>>>> 3aff5f546fb27eb533ec7cbdf20d5d80fa9debb9
                  <h1 className="rv-20-banner_content_heading rv-text-anime">
                  Bringing you the forecast for bountiful harvests.
                  </h1>
                  <div className="rv-20-banner_button_area">
                    <a href="#" className="rv-20-banner_content_btn">
                    Watch the Video
                    </a>
                    <a
                      className="rv-20-banner_content_play_btn"
                      role="button"
                      onClick={openVideoModal}
                    >
                      <i className="fas fa-play"></i> Play Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="rv-20-banner_slide_button_area">
        <div className="rv-20-banner_slide_button_prev ">
          {" "}
          <i className="fas fa-arrow-left"></i>{" "}
        </div>
        <div className="rv-20-banner_slide_button_next ">
          {" "}
          <i className="fas fa-arrow-right"></i>{" "}
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
