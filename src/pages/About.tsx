import AboutSection from "../component/about/AboutSection";
import BreadcrumbSection from "../component/breadcrumb/BreadcrumbSection";
import CtaSection from "../component/cta/CtaSection";
import InnerLayout from "../component/layout/InnerLayout";

const About = () => {
  return (
    <main>
      <InnerLayout>
        <BreadcrumbSection title="About" currentPage="About Us" />
        <AboutSection />
        
        <CtaSection />
      </InnerLayout>
    </main>
  );
};

export default About;
