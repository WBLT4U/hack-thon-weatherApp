import { Link } from "react-router-dom";

type Props = {
  style?: string;
  logo: string;
  footerContactStyle?: string;
  footerFormStyle: string;
};
const FooterSection3 = ({
  style,
  logo,
  footerContactStyle,
  footerFormStyle,
}: Props) => {
  return (
    <footer className={`rv-9-footer ${style ? style : ""}`}>
      <div className="container">
        <div className="rv-9-footer-top">
          <div className="row gy-3 justify-content-between align-items-center">
            <div className="col-lg-3">
              <div className="rv-9-footer-logo text-sm-center text-lg-start">
                <Link to="/">
                  <img src={logo} alt="logo" className="logo" />
                </Link>
              </div>
            </div>

            <div className="col-xxl-8 col-lg-9">
              <div className="row gy-3 align-items-center justify-content-center">
                <div className="col-md-4 col-sm-6">
                  <div
                    className={`rv-5-about__call rv-9-footer__contact-card ${
                      footerContactStyle ? footerContactStyle : ""
                    }`}
                  >
                    <span className="rv-5-about__call-icon">
                      <i className="fa-regular fa-phone-volume"></i>
                    </span>
                    <div className="rv-5-about__call-txt">
                      <h6>Our Phone</h6>
                      <a href="tel:123654564388" className="">
                        +2348066713592, +2349026847322, +2348058154308
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div
                    className={`rv-5-about__call rv-9-footer__contact-card ${
                      footerContactStyle ? footerContactStyle : ""
                    }`}
                  >
                    <span className="rv-5-about__call-icon">
                      <i className="fa-light fa-envelopes"></i>
                    </span>
                    <div className="rv-5-about__call-txt">
                      <h6>Our Email</h6>
                      <a href="tel:123654564388" className="">
                        hackathon@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div
                    className={`rv-5-about__call rv-9-footer__contact-card ${
                      footerContactStyle ? footerContactStyle : ""
                    }`}
                  >
                    <span className="rv-5-about__call-icon">
                      <i className="fa-light fa-location-dot"></i>
                    </span>
                    <div className="rv-5-about__call-txt">
                      <h6>Our Address</h6>
                      <a href="tel:08066713592" className="">
                        FCMB Hackathon
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rv-8-footer-middle">
          <div className="row gy-4 gx-lg-4 gx-md-5 gx-3 justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-7">
              <div className="rv-1-footer__about">
                <h5 className="rv-1-footer-widget__title">About us</h5>
                <p className="rv-1-footer__about-txt">
                  Skilled Web Application Developer, Software Developer, Mobile App Developer, UI/UX
                </p>
                <div className="rv-1-socials rv-15-socials rv-20-socials">
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-pinterest-p"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-md-6 col-sm-5">
              <div className="rv-1-footer-widget rv-20-footer-widget">
                <h5 className="rv-1-footer-widget__title">Our Services</h5>
                <ul className="rv-8-footer-widget__links">
                  <li>
                    <a href="#">Web Development</a>
                  </li>
                  <li>
                    <a href="#">Software Development</a>
                  </li>
                  <li>
                    <a href="#">UI/UX Design</a>
                  </li>
                  <li>
                    <a href="#">Mobile App Development</a>
                  </li>
                  <li>
                    <a href="#">IT Consultant</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-4 col-lg-5 col-md-6">
              <div className="rv-1-footer-widget rv-8-footer-articles">
                <h5 className="rv-1-footer-widget__title">Recent Posts</h5>
                <div className="rv-8-footer-article rv-20-footer-article">
                  <img
                    src="assets/img/about/farm3.jpeg"
                    alt="Article image"
                    className="rv-8-footer-article-img"
                  />

                  <div className="rv-8-footer-article-txt">
                    <span className="rv-8-footer-article-date">
                      <i className="fa-regular fa-clock"></i> September 19, 2024
                    </span>
                    <h5 className="rv-8-footer-article-title">
                      <a href="#">Rice crop with a verge hactre of land</a>
                    </h5>
                  </div>
                </div>

                <div className="rv-8-footer-article rv-20-footer-article">
                  <img
                    src="assets/img/about/farmbg1.jpg"
                    alt="Article image"
                    className="rv-8-footer-article-img"
                  />

                  <div className="rv-8-footer-article-txt">
                    <span className="rv-8-footer-article-date">
                      <i className="fa-regular fa-clock"></i> September 19, 2024
                    </span>
                    <h5 className="rv-8-footer-article-title">
                      <a href="#">
                        Beans crop with a verge hactre of land
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-5 col-md-6">
              <div className="rv-1-footer-nwsltr">
                <h5 className="rv-1-footer-widget__title">Newsletter Signup</h5>
                <form
                  action="#"
                  className={`rv-6-footer-nwsltr__form  rv-8-footer-nwsltr__form ${footerFormStyle}`}
                >
                  <div className="nwsltr-top">
                    <input
                      type="email"
                      name="email"
                      id="rv-8-subs-form"
                      placeholder="Enter your Email..."
                      required
                    />
                    <button>
                      <i className="fa-light fa-arrow-right"></i>
                    </button>
                  </div>
                  <div className="rv-6-footer-nwsltr__checkbox">
                    <input
                      type="checkbox"
                      id="nwsltr-checkbox"
                      name="checkbox"
                      value="1"
                    />
                    <label htmlFor="nwsltr-checkbox">
                      I agree to the <a href="#">Privacy Policy</a>.
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rv-2-footer rv-8-footer-bottom">
        <div className="container">
          <div className="row align-items-center gy-3">
            <div className="col-md-7">
              <p className="rv-2-copyright rv-1-copyright mb-0 text-center text-md-start">
                &copy; {new Date().getFullYear()} Hackathon All Rights Reserved
                by site
              </p>
            </div>

            <div className="col-md-5">
              <div className="rv-2-footer__nav rv-20-footer-bottom__nav">
                <a href="#">Privacy Policy</a>
                <a href="#">Term of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection3;
