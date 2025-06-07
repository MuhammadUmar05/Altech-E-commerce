import { HeroImage1, HeroImage2, HeroImage3 } from "../../assets/index";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Marquee from "react-fast-marquee";
import "swiper/css";
import ProductsShowCase from "../ProductsShowCase/ProductsShowCase";
function HeroSection() {
  const images = [HeroImage1, HeroImage2, HeroImage3];
  return (
    <>
      <main>
        <div className="relative w-full md:h-[90vh] h-[60vh]">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 6000 }}
            loop={true}
            slidesPerView={1}
            className="h-full"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute inset-0 z-50 h-full md:px-16 px-8 flex md:justify-start justify-between items-end py-12 md:max-w-2xl shadow-inner">
            <div className="drop-shadow-2xl">
              <p
                className="md:text-6xl text-3xl text-center md:text-start font-bold text-white/80"
                data-aos="fade-up"
              >
                All tech products.
                <br />
                One place.
              </p>
              <p
                className="text-xl text-center md:text-start font-semibold text-white/60"
                data-aos="fade-up"
              >
                Shop all gadget related to making your work life easy. 70% cash
                back guarantee!
              </p>
            </div>
          </div>
        </div>
        <Marquee gradient={false} speed={75} className="bg-[#3f3f3f] py-2">
          {Array(10).fill(
            <span className="mx-4 font-semibold text-white ">
              ⚡ Black Friday Deals!
            </span>
          )}
        </Marquee>
      </main>
    </>
  );
}

export default HeroSection;
