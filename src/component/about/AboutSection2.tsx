import DivAnimateXAxis from "../utils/DivAnimateXAxis";
type Props = {
  btnStyle?: string;
};
const AboutSection2 = ({ btnStyle }: Props) => {
  return (
    <section className="rv-1-about rv-section-spacing">
      <div className="container position-relative">
        <div className="row rv-1-about-row g-0 justify-content-between align-items-end">
          <DivAnimateXAxis className="col-xl-5 col-lg-6" position={-80}>
            <div className="rv-1-about__img reveal">
              <img src="assets/img/farmbg1.jpg" alt="Image" />
            </div>
          </DivAnimateXAxis>

          <DivAnimateXAxis
            className="col-xxl-6 col-xl-7 col-lg-6"
            position={80}
          >
            <div className="rv-1-about__txt">
              <div className="rv-1-section__heading">
                <div>
                  <h6 className="rv-1-section__sub-title rv-text-anime">
                    Business Conference
                  </h6>
                </div>
                <div>
                  <h2 className="rv-1-section__title rv-text-anime">
                    Problem-Solving Business Conference.
                  </h2>
                </div>
              </div>

              <ul className="rv-1-about__pills">
                <li className="rv-1-about__pill">Future Business</li>
                <li className="rv-1-about__pill">Collaborate</li>
                <li className="rv-1-about__pill">Building Bridges</li>
                <li className="rv-1-about__pill">Opportunities</li>
              </ul>

              <p className="rv-1-about__descr">
At Weather App, we are committed to empowering farmers with accurate, real-time weather data to enhance agricultural productivity and safety. Our mission is to provide farmers with the tools they need to make informed decisions, improve crop yields, and adapt to changing weather conditions.

With our weather forecast app, we deliver reliable and precise weather updates, helping farmers anticipate and prepare for various conditions, whether it's rainfall, drought, extreme temperatures, or storms. Our app goes beyond forecasts by offering personalized farming tips, notifications about potential weather-related risks, and advice tailored to specific crops and regions.

Our vision is to leverage technology to create smarter, more resilient farming communities. By bridging the gap between weather data and agricultural needs, we aim to support farmers in boosting productivity, reducing losses, and ensuring sustainable farming practices.

Join us as we help farmers stay ahead of the weather, increase their yields, and thrive in the face of climate uncertainty.

              </p>

              <a
                href="#"
                className={`rv-1-def-btn ${btnStyle ? btnStyle : ""}`}
              >
                <span className="txt">Get Tickets</span>
                <span className="icon">
                  <img src="assets/img/farmbg1.jpg" alt="icon" />
                </span>
              </a>

              <div className="rv-1-about__right-img">
                <img src="assets/img/farmbg1.jpg" alt="image" />
              </div>
            </div>
          </DivAnimateXAxis>
        </div>

        <div className="rv-1-about__vectors">
          <img
            src="assets/img/taofiqphoto.png"
            alt="vector"
            className="rv-1-about__vector rv-1-about__vector-1"
          />
          <img
            src="assets/img/taofiqphoto.png"
            alt="vector"
            className="rv-1-about__vector rv-1-about__vector-2"
          />
          <img
            src="assets/img/taofiqphoto.png"
            alt="vector"
            className="rv-1-about__vector rv-1-about__vector-3"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection2;
