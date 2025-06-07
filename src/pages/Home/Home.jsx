import HeroSection from "../../components/HeroSection/HeroSection";
import ProductsShowCase from "../../components/ProductsShowCase/ProductsShowCase";
import Reviews from "../../components/Reviews/Reviews";
import NewsSection from "../../components/NewsSection/NewsSection";

function Home() {
  return (
    <>
      <HeroSection />
      <ProductsShowCase deal="New Arrivals" sliceRange={3} path={"New-Arrivals"} />
      <ProductsShowCase deal="Hot Deals 🔥" sliceRange={3} path={"Hot-Deals"} />
      <ProductsShowCase deal="Discounts✨" sliceRange={3} path={"Discounts"} />
      <ProductsShowCase deal="Black Friday Deals" sliceRange={3} path={"Black-Friday-Deals"} />
      <Reviews />
      <NewsSection />
    </>
  );
}

export default Home;
