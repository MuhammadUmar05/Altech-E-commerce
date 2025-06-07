import React from "react";
import ProductsShowCase from "../../components/ProductsShowCase/ProductsShowCase";
import NewsSection from "../../components/NewsSection/NewsSection";
import ProductSearch from "./../../components/ProductSearch/ProductSearch";
function Discount() {
  return (
    <main>
      <section className="flex flex-col justify-center items-center gap-4 py-10 md:px-20 px-4 md:max-w-3xl m-auto">
        <p
          className="bg-[#f9f9f91a] px-3 py-2 text-white rounded-3xl box-shadow"
          data-aos="fade-up"
        >
          Discounts✨
        </p>
        <p
          data-aos="fade-up"
          className="py-1 text-transparent bg-gradient-to-r from-neutral-100 to-neutral-100/40 bg-clip-text md:text-6xl text-3xl font-bold text-center"
        >
          Whopping Discounts, All On The House!
        </p>
        <div className="md:hidden text-white">
          <ProductSearch />
        </div>
      </section>
      <ProductsShowCase deal="Discounts✨" sliceRange={6} />
      <NewsSection />
    </main>
  );
}

export default Discount;
