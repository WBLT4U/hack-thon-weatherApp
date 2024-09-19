import ContactForm from "../form/ContactForm";
import DivAnimateXAxis from "../utils/DivAnimateXAxis";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";
type Props = {
  innerPage?: boolean;
};
const ContactSection2 = ({ innerPage }: Props) => {
  return (
    <section
      className={`rv-2-contact ${
        innerPage ? "rv-inner-contact rv-section-spacing" : ""
      }`}
      id="contact"
    >
      <div className="container">
        {innerPage ? (
          <DivAnimateYAxis className="rv-inner-contact-info-cards">
            <div className="rv-inner-contact-info">
              <div className="rv-inner-contact-info__heading">
                <div className="rv-inner-contact-info__icon">
                  <i className="fa-regular fa-phone"></i>
                </div>
                <div>
                  <h5 className="rv-inner-contact-info__title">
                    Contact Numbers
                  </h5>
                </div>
              </div>

              <div className="rv-inner-contact-info__bottom">
                <ul className="rv-5-footer-timings">
                  <li>
                    <a href="tel:0123456789">+2348066713592</a>
                  </li>
                  <li>
                    <a href="tel:9876543210">+2349026847322</a>
                  </li>
                  <li>
                    <a href="tel:9876543210">+2348058154308</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rv-inner-contact-info">
              <div className="rv-inner-contact-info__heading">
                <div className="rv-inner-contact-info__icon">
                  <i className="fa-regular fa-envelope"></i>
                </div>
                <div>
                  <h5 className="rv-inner-contact-info__title">
                    Email Address
                  </h5>
                </div>
              </div>

              <div className="rv-inner-contact-info__bottom">
                <ul className="rv-5-footer-timings">
                  <li>
                    <a href="mailto:info@vercel.com">info@vercel.com</a>
                  </li>
                  <li>
                    <a href="mailto:test@vercel.com">test@vercel.com</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rv-inner-contact-info">
              <div className="rv-inner-contact-info__heading">
                <div className="rv-inner-contact-info__icon">
                  <i className="fa-regular fa-clock"></i>
                </div>
                <div>
                  <h5 className="rv-inner-contact-info__title">
                    Hours of Operation
                  </h5>
                </div>
              </div>

              <div className="rv-inner-contact-info__bottom">
                <ul className="rv-5-footer-timings">
                  <li>
                    <span className="key">Monday - Friday : </span>
                    <span className="value">08:30 am - 10:00 pm</span>
                  </li>
                  <li>
                    <span className="key">Saturday - Sunday : </span>
                    <span className="value">10:30 am - 08:00 pm</span>
                  </li>
                </ul>
              </div>
            </div>
          </DivAnimateYAxis>
        ) : (
          <div>
            <h2 className="rv-2-section-title rv-text-anime">
              Ready to bring your ideas to life? I'm here to help.
            </h2>
          </div>
        )}

        <div className="row gy-3 gy-sm-4">
          <DivAnimateXAxis position={-60} className="col-xxl-8 col-lg-7">
            <div
              className={`rv-2-contact__txt ${
                innerPage ? "rv-inner-contact__txt" : ""
              }`}
            >
              <div>
                <h3 className="rv-2-contact-form-title">Let's Connect.</h3>
              </div>

              <ContactForm innerPage={innerPage ? true : false} />
            </div>
          </DivAnimateXAxis>

          <DivAnimateXAxis className="col-xxl-4 col-lg-5" position={60}>
            <iframe
              
            ></iframe>
          </DivAnimateXAxis>
        </div>
      </div>
    </section>
  );
};

export default ContactSection2;
