import React from "react";
import { products } from "../../data/products";
import { Image } from "@heroui/react";
import { useLocation, Link } from "react-router-dom";
function ProductsShowCase({ deal, sliceRange, path }) {
  const location = useLocation();
  return (
    <section className="flex flex-col py-12 md:px-20 px-4">
      <div className="flex gap-4 items-center" data-aos="fade-up">
        <p className="text-2xl font-semibold text-white">{deal}</p>
        {location.pathname == "/" && (
          <p className="text-white/80 text-xl hover:scale-110 transition-transform cursor-pointer ">
            <Link to={path} className="flex items-center">
              See all
              <svg
                className="stroke-white/80"
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="butt"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </Link>
          </p>
        )}
      </div>
      <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 text-white py-3">
        {products
          .filter((product) => product.dealLabel === deal)
          .slice(0, sliceRange)
          .map((product) => {
            const {
              name,
              dealLabel,
              category,
              discountedPrice,
              originalPrice,
              images,
              id,
            } = product;

            return (
              <Link to={`/product/${id}`} key={id}>
                <div
                  className="flex flex-col  gap-2 cursor-pointer"
                  data-aos="fade-up"
                >
                  <div className="relative rounded-3xl">
                    <Image
                      className="aspect-[360/330] w-full object-center object-cover"
                      isZoomed
                      src={images[0]}
                    />
                    <div className="absolute w-fit h-fit z-50 inset-3">
                      <span className="text-sm px-3 py-2 rounded-2xl bg-[#141414]/60 backdrop-blur-lg">
                        {dealLabel}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-medium">{name}</p>
                    <p className="flex items-center gap-2 text-lg font-medium">
                      <span
                        className={`${
                          discountedPrice ? "line-through" : ""
                        } text-white/70 text-sm`}
                      >
                        ${originalPrice}
                      </span>
                      ${discountedPrice}
                    </p>
                  </div>
                  <p className="text-white/80">{category}</p>
                </div>
              </Link>
            );
          })}
      </div>
    </section>
  );
}

export default ProductsShowCase;
