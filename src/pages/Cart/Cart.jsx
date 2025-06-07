import { Plus, MinusIcon } from "lucide-react";
import Reviews from "./../../components/Reviews/Reviews";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  removeFromCart,
  checkout,
} from "../../features/cartSlice";
import { addToast } from "@heroui/react";
import { Link, useNavigate } from "react-router-dom";
function Cart() {
  const cart = useSelector((state) => state.cart);
  const totalAmount = cart.reduce(
    (sum, item) => sum + item.discountedPrice * item.quantity,
    0
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleIncrement = (id) => dispatch(increment(id));
  const handleDecrement = (id) => dispatch(decrement(id));
  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
    addToast({
      timeout: 2000,
      shouldShowTimeoutProgress: true,
      variant: "flat",
      title: "Product removed from cart",
      color: "success",
      classNames: {
        base: "dark text-foreground background",
      },
    });
  };
  const handleCheckout = () => {
    dispatch(checkout());
    navigate("/checkout");
  };
  return (
    <>
      {cart.length > 0 ? (
        <section className="flex lg:flex-row flex-col gap-6 md:px-14 px-4 py-24 max-w-6xl w-full mx-auto">
          <div className="flex flex-col gap-4 flex-1">
            {cart.map((product) => {
              const { name, discountedPrice, images, quantity, category, id } =
                product;
              return (
                <div
                  key={id}
                  className="flex sm:flex-row flex-col gap-x-6 gap-y-4 border-b-2 border-white/20 md:px-7 py-8"
                >
                  <div>
                    <img
                      src={images[0]}
                      className="aspect-square md:size-28 size-full object-center rounded-md"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col gap-2 p-1 min-w-[150px] max-w-[160px]">
                    <p className="bg-[#f9f9f91a] text-nowrap px-3 py-2 text-white rounded-3xl box-shadow text-sm text-center">
                      {category}
                    </p>
                    <p className="text-white/80 text-nowrap">{name}</p>
                    <p
                      onClick={() => handleRemoveItem(id)}
                      className="hover:underline transition-all cursor-pointer text-white/60"
                    >
                      Remove Item
                    </p>
                  </div>
                  <div className="flex items-center gap-5 self-end p-2">
                    <button
                      onClick={() => handleDecrement(id)}
                      className="box-shadow border p-1 rounded-full"
                    >
                      <MinusIcon color="white" />
                    </button>
                    <p className="text-white/90 font-bold text-lg">
                      {quantity}
                    </p>
                    <button
                      onClick={() => handleIncrement(id)}
                      className="box-shadow border p-1 rounded-full"
                    >
                      <Plus color="white" />
                    </button>
                  </div>
                  <p className=" text-white  font-medium ml-auto w-fit">
                    ${(discountedPrice * quantity).toFixed(2)}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-6 h-fit lg:max-w-80 w-full">
            <div className="p-6 flex flex-col gap-4 bg-[#f9f9f91a] box-shadow text-white rounded-xl ">
              <div className="flex items-center justify-between border-b-2 pb-2">
                <p>Subtotal</p>
                <p>${totalAmount.toFixed(2)}</p>
              </div>
              <div className="flex items-center justify-between border-b-2 pb-2">
                <p>Shipping</p>
                <p>$5</p>
              </div>
              <div className="flex items-center justify-between border-b-2 pb-2">
                <p>Tax</p>
                <p>${(totalAmount / 10).toFixed(2)}</p>
              </div>
              <div className="flex items-center justify-between pb-2">
                <p>Order Total</p>
                <p>${(totalAmount + 5 + totalAmount / 10).toFixed(2)}</p>
              </div>
            </div>
            <button
              onClick={handleCheckout}
              className="rounded-3xl py-3 text-white bg-[#f9f9f91f] box-shadow "
            >
              Proceed to checkout
            </button>
          </div>
        </section>
      ) : (
        <section className="flex flex-col items-center justify-center px-4 h-96 text-white/70">
          <p className="md:text-5xl text-3xl font-semibold mb-4">
            🛒 Your cart is empty
          </p>
          <p className="text-lg text-center hover:underline">
            <Link to="/">Start shopping and add items to your cart!</Link>
          </p>
        </section>
      )}
      <Reviews />
    </>
  );
}

export default Cart;
