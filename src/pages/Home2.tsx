import BannerSection2 from "../component/banner/BannerSection2";

import CategorySection from "../component/category/CategorySection";
import FeatureSection from "../component/feature/FeatureSection";
import GallerySection from "../component/gallery/GallerySection";
import HeaderSection2 from "../component/header/HeaderSection2";
import InfoSection from "../component/info/InfoSection";
import CartModal from "../component/modal/CartModal";
import SearchFormModal from "../component/modal/SearchFormModal";
import WishlistModal from "../component/modal/WishlistModal";
import PartnerSection from "../component/partner/PartnerSection";
import TestimonialSection2 from "../component/testimonial/TestimonialSection2";

const Home2 = () => {
  return (
    <main>
      <HeaderSection2 />
      <BannerSection2 />
      <FeatureSection />
      <CategorySection />
      
      <InfoSection />
      
      <TestimonialSection2 />
      
      <PartnerSection />
      <GallerySection />
      
      {/* Modal */}
      <SearchFormModal />
      <CartModal />
      <WishlistModal />
    </main>
  );
};

export default Home2;
