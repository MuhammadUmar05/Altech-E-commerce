import { Link } from "react-router-dom";
function Checkout() {
  return (
    <section className="flex flex-col items-center justify-center px-4 h-96 text-white/70">
      <p className="md:text-5xl text-3xl text-center font-extrabold mb-4">
        Order Placed Successfully
      </p>
      <p className="md:text-2xl text-lg text-center text-white/90 mb-4">
        Your order has been placed and will be delivered to you in a few days
      </p>
      <p className="text-lg text-center text-white font-medium hover:underline">
        <Link to="/">Continue shopping and add items to your cart {'>'}</Link>
      </p>
    </section>
  );
}

export default Checkout;
