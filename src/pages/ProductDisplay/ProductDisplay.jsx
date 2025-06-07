import { products } from "../../data/products";
import Reviews from "../../components/Reviews/Reviews";
import NewsSection from "../../components/NewsSection/NewsSection";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import { addToast } from "@heroui/react";
function ProductDisplay() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    if (!product) return;
    dispatch(addToCart(product));
    addToast({
      timeout: 2000,
      shouldShowTimeoutProgress: true,
      variant: "flat",
      title: `${product.name} added to cart`,
      color: "default",
      classNames: {
        base: "dark text-foreground background",
      },
    });
  };
  const cart = useSelector((state) => state.cart);
  const isInCart = cart.some((item) => item.id === product.id);


  return (
    <div>
      <article className="md:px-14 px-4 py-10 grid md:grid-cols-2 grid-cols-1 gap-6">
        <div className="rounded-3xl">
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            modules={[Navigation, Pagination]}
            className="rounded-3xl md:h-full"
          >
            {product.images.map((img) => (
              <SwiperSlide className="rounded-3xl md:h-full">
                <img
                  data-aos="fade-up"
                  src={img}
                  className=" w-full rounded-3xl h-[293px]  md:h-[638px] object-cover object-center aspect-[160:147]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex flex-col gap-4 items-start">
          <p
            className="bg-[#f9f9f91a] px-3 py-2 text-white rounded-3xl box-shadow text-sm font-semibold"
            data-aos="fade-up"
          >
            {product.category}
          </p>
          <p data-aos="fade-up" className="text-white text-3xl">
            {product.name}
          </p>
          <p
            data-aos="fade-up"
            className="flex items-center gap-2 text-lg text-white font-medium"
          >
            <span
              className={`${
                product.discountedPrice ? "line-through" : ""
              } text-white/70 text-sm`}
            >
              ${product.originalPrice}
            </span>
            {product.discountedPrice && `$${product.discountedPrice}`}
          </p>
          <p data-aos="fade-up" className=" text-white/70">
            {product.description}
          </p>
          <button
            data-aos="fade-up"
            className="rounded-full w-full py-3 text-white bg-[#f9f9f91a] box-shadow transition-all duration-300 ease-in-out"
            onClick={() => !isInCart && handleAddToCart(product)}
          >
            {isInCart ? "Added to Cart" : product.buttonLabel}
          </button>
        </div>
      </article>
      <Reviews />
      <NewsSection />
    </div>
  );
}

export default ProductDisplay;
