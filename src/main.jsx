import { createRoot } from "react-dom/client";
import { HeroUIProvider } from "@heroui/react";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import FAQ from "./pages/FAQ/FAQ";
import BlackFridayDeals from "./pages/BlackFridayDeals/BlackFridayDeals";
import NewArrivals from "./pages/NewArrivals/NewArrivals.jsx";
import HotDeals from "./pages/HotDeals/HotDeals.jsx";
import Discount from "./pages/Discount/Discount";
import ProductDisplay from "./pages/ProductDisplay/ProductDisplay.jsx";
import Cart from "./pages/Cart/Cart";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import Checkout from "./pages/Checkout/Checkout.jsx";
import Error from "./pages/Error/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "FAQ", element: <FAQ /> },
      { path: "Black-Friday-Deals", element: <BlackFridayDeals /> },
      { path: "New-Arrivals", element: <NewArrivals /> },
      { path: "Hot-Deals", element: <HotDeals /> },
      { path: "Discounts", element: <Discount /> },
      { path: "product/:id", element: <ProductDisplay /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
    ],
  },
  
  {
    path: "*",
    element: <Error />,
  },
]);

createRoot(document.getElementById("root")).render(
  <HeroUIProvider>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </HeroUIProvider>
);
