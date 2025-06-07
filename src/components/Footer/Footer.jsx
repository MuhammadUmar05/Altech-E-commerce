import { FooterLogo } from "../../assets/index";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-[#f9f9f914] flex flex-col gap-6 md:px-20 px-4 py-10 text-white">
      <div className="grid md:grid-cols-2 gap-6 justify-between py-2">
        <div className="flex flex-col gap-6">
          <p className="text-3xl">
            All tech products.
            <br />
            One place.
          </p>
          <p className="text-lg text-white/70">
            Shop all gadget related to making your work life easy.
            <br /> 70% cash back guarantee!
          </p>
        </div>
        <div className="flex justify-between flex-wrap gap-6 gap-y-10 ">
          <ul className="flex flex-col gap-4">
            <li className="hover:underline cursor-pointer transition-all font-bold text-lg">
              Products
            </li>
            <li className="hover:underline cursor-pointer transition-all">
              <NavLink
                to="Hot-Deals"
                className={({ isActive }) => `${isActive ? "underline" : ""}`}
              >
                Hotdeals
              </NavLink>
            </li>
            <li className="hover:underline cursor-pointer transition-all">
              <NavLink
                to="Discounts"
                className={({ isActive }) => `${isActive ? "underline" : ""}`}
              >
                Discounts
              </NavLink>
            </li>
            <li className="hover:underline cursor-pointer transition-all">
              <NavLink
                to="New-Arrivals"
                className={({ isActive }) => `${isActive ? "underline" : ""}`}
              >
                New-Arrivals
              </NavLink>
            </li>
            <li className="hover:underline cursor-pointer transition-all">
              <NavLink
                to="Black-Friday-Deals"
                className={({ isActive }) => `${isActive ? "underline" : ""}`}
              >
                Black Friday Deals
              </NavLink>
            </li>
          </ul>
          <ul className="flex flex-col gap-4 first:font-bold">
            <li className="hover:underline cursor-pointer transition-all font-bold text-lg">
              Socials
            </li>
            <li className="hover:underline cursor-pointer transition-all">
              Support
            </li>
            <li className="hover:underline cursor-pointer transition-all">
              Twitter
            </li>
            <li className="hover:underline cursor-pointer transition-all">
              Instagram
            </li>
            <li className="hover:underline cursor-pointer transition-all">
              Facebook
            </li>
          </ul>
          <ul className="flex flex-col gap-4 first:font-bold">
            <li className="hover:underline cursor-pointer transition-all font-bold text-lg">
              Information
            </li>
            <li className="hover:underline cursor-pointer transition-all">
              News
            </li>
            <li className="hover:underline cursor-pointer transition-all">
              FAQ
            </li>
            <li className="hover:underline cursor-pointer transition-all">
              About
            </li>
            <li className="hover:underline cursor-pointer transition-all">
              Privacy Policy
            </li>
          </ul>
        </div>
      </div>
      <div className="py-6">
        <img className="w-full" src={FooterLogo} alt="" />
      </div>
    </footer>
  );
}

export default Footer;
