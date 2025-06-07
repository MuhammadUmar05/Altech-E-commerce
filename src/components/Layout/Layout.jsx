import React from "react";
import { Outlet } from "react-router-dom";
import CustomNavbar from "../CustomNavbar/CustomNavbar";
import Footer from "../Footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import { ToastProvider } from "@heroui/react";
function Layout() {
  React.useEffect(() => {
    Aos.init({
      once: true,
      duration: 600,
      easing: "linear",
      offset: 50,
    });
  }, []);
  return (
    <>
      <ToastProvider />
      <ScrollToTop />
      <CustomNavbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
