import NumberCounter from "../utils/NumberCounter";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";
import SpeakerSection from "../speaker/SpeakerSection";
const AboutSection = () => {
  return (
    <section className="rv-20-about_section">
      <div className="container">
        <DivAnimateYAxis className="row">
          <div className="col-md-12  col-lg-6 col-xl-5">
            <div className="rv-20-about_image">
              <img src="assets/img/about/farm10.jpeg" alt="image" />

              <img src="assets/img/about/farmbg.jpg" alt="image" />
              <div className="rv-20-about_experience_txt">
                <NumberCounter
                  number={23}
                  initialNumber={10}
                  durationToComplete={2}
                  icon="+"
                />
                <p>Year of Experience</p>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-6 col-xl-7">
            <div className="rv-20-about_section_content">
              <div className="rv-20-about_section_heading">
                <div>
                  <p className="rv-20-about_sub_title rv-text-anime d-flex">
                    <span></span> About AgriInsghts
                  </p>
                </div>
                <div>
                  <h5>
                  
Is a comprehensive platform designed to empower smallholder farmers by providing innovative solutions that address key challenges in the agriculture sector.The platform integrates tools to enhance market access, productivity, and capacity building. It allows farmers to connect directly with buyers, track real-time weather forecasts, and receive expert advice tailored to their crops and location. Additionally, AgriInsghts offers training resources and expert consultations, enabling farmers to optimize their farming practices and increase yields.
Key features include real-time weather updates and AI-powered recommendations using ChatGPT for personalized farming advice. The platform also includes data-driven insights to help farmers make informed decisions based on local conditions, with access to logistics support and secure payment gateways for seamless transactions. Farmers can also rent land and equipment, further increasing their efficiency.
AgriInsghts is designed to be mobile-friendly, with support for local languages and offline functionality. It aims to provide a one-stop solution that meets the diverse needs of smallholder farmers, addressing barriers to market access and improving overall productivity.

                  </h5>
                </div>
              </div></div>
              
          </div>
        </DivAnimateYAxis>
        <SpeakerSection />
        <div className="additional-content">
        <div className="video-section">
          <h3>Weather Update</h3>
          <iframe
            width="320"
            height="240"
            src="https://www.youtube.com/embed/9xkQFVGihQU?si=iiDdA5Lg2WVSsolJ" // Replace YOUR_VIDEO_ID with the actual YouTube video ID
            title="Weather Update"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
      </div>
      
    </section>
    
  );
};

export default AboutSection;
