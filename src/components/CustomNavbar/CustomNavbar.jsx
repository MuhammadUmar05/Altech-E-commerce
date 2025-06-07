import { Navbar } from "@heroui/react";
import {
  Dropdown,
  DropdownSection,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Tooltip,
} from "@heroui/react";
import { Menu } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import ProductSearch from "../ProductSearch/ProductSearch";

function CustomNavbar() {
  const cart = useSelector((state) => state.cart);
  const cartLength = cart.length;
  const navigate = useNavigate();
  return (
    <Navbar shouldHideOnScroll className="bg-primary z-[999] h-[10vh]">
      <nav className="flex text-white flex-row justify-between md:px-14 px-4 py-3 items-center w-screen">
        <div className="cursor-pointer" onClick={() => navigate("")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100.944"
            height="23.978"
            fill="none"
          >
            <g>
              <path
                d="M 45.96 0 L 45.96 20.456 L 42.015 20.456 L 42.015 0 Z M 86.567 20.456 L 86.567 0 L 90.454 0 L 90.454 8.387 L 90.57 8.387 C 91.077 7.491 91.739 6.809 92.558 6.341 C 93.376 5.854 94.34 5.611 95.451 5.611 C 96.619 5.611 97.613 5.874 98.431 6.4 C 99.25 6.906 99.873 7.656 100.301 8.65 C 100.73 9.643 100.944 10.871 100.944 12.332 L 100.944 20.456 L 97.029 20.456 L 97.029 12.683 C 97.029 11.475 96.785 10.549 96.298 9.906 C 95.83 9.264 95.071 8.942 94.019 8.942 C 93.337 8.942 92.733 9.108 92.207 9.439 C 91.681 9.751 91.262 10.208 90.95 10.812 C 90.658 11.397 90.512 12.118 90.512 12.975 L 90.512 20.456 Z M 78.54 20.806 C 77.001 20.806 75.657 20.485 74.508 19.842 C 73.378 19.18 72.491 18.284 71.848 17.154 C 71.225 16.004 70.913 14.689 70.913 13.209 C 70.913 11.728 71.235 10.423 71.878 9.293 C 72.521 8.143 73.417 7.247 74.566 6.604 C 75.716 5.942 77.04 5.611 78.54 5.611 C 80.411 5.611 81.979 6.098 83.245 7.072 C 84.531 8.046 85.349 9.39 85.7 11.105 L 81.521 11.105 C 81.365 10.403 81.005 9.858 80.44 9.468 C 79.894 9.078 79.252 8.884 78.511 8.884 C 77.829 8.884 77.216 9.059 76.67 9.41 C 76.144 9.741 75.725 10.228 75.414 10.871 C 75.102 11.514 74.946 12.293 74.946 13.209 C 74.946 13.871 75.034 14.465 75.209 14.991 C 75.384 15.517 75.628 15.965 75.94 16.335 C 76.251 16.706 76.621 16.988 77.05 17.183 C 77.498 17.358 77.985 17.446 78.511 17.446 C 79.018 17.446 79.476 17.368 79.885 17.212 C 80.294 17.037 80.644 16.793 80.937 16.482 C 81.229 16.15 81.424 15.761 81.521 15.313 L 85.7 15.313 C 85.349 16.988 84.531 18.323 83.245 19.316 C 81.979 20.31 80.411 20.806 78.54 20.806 Z M 56.837 17.241 C 56.194 16.111 55.873 14.816 55.873 13.355 C 55.873 11.835 56.185 10.501 56.808 9.351 C 57.451 8.182 58.337 7.267 59.467 6.604 C 60.617 5.942 61.941 5.611 63.442 5.611 C 64.903 5.611 66.179 5.922 67.27 6.546 C 68.361 7.169 69.218 8.026 69.841 9.117 C 70.465 10.189 70.776 11.407 70.776 12.77 C 70.776 12.965 70.767 13.189 70.747 13.442 C 70.747 13.676 70.737 13.92 70.718 14.173 L 59.776 14.173 C 59.823 14.789 59.974 15.335 60.227 15.809 C 60.539 16.374 60.967 16.813 61.513 17.124 C 62.078 17.436 62.711 17.592 63.412 17.592 C 64.133 17.592 64.737 17.436 65.224 17.124 C 65.711 16.793 66.081 16.374 66.335 15.868 L 70.338 15.868 C 70.065 16.783 69.607 17.621 68.965 18.381 C 68.322 19.121 67.533 19.715 66.598 20.164 C 65.662 20.592 64.61 20.806 63.442 20.806 C 61.961 20.806 60.646 20.495 59.496 19.871 C 58.367 19.248 57.48 18.371 56.837 17.241 Z M 66.773 11.747 C 66.714 10.832 66.374 10.101 65.75 9.556 C 65.146 9.01 64.386 8.738 63.471 8.738 C 62.789 8.738 62.165 8.893 61.6 9.205 C 61.036 9.497 60.587 9.955 60.256 10.579 C 60.071 10.916 59.938 11.306 59.856 11.747 Z M 53.868 20.456 C 52.835 20.456 51.929 20.3 51.15 19.988 C 50.39 19.657 49.796 19.121 49.368 18.381 C 48.939 17.621 48.725 16.589 48.725 15.283 L 48.725 9.117 L 46.241 9.117 L 46.241 5.961 L 48.725 5.961 L 49.163 2.016 L 52.67 2.016 L 52.67 5.961 L 56.527 5.961 L 56.527 9.117 L 52.67 9.117 L 52.67 15.342 C 52.67 16.043 52.816 16.53 53.108 16.803 C 53.4 17.056 53.897 17.183 54.598 17.183 L 56.44 17.183 L 56.44 20.456 Z M 31.962 20.806 C 30.813 20.806 29.858 20.612 29.098 20.222 C 28.358 19.832 27.812 19.306 27.462 18.644 C 27.111 17.982 26.936 17.251 26.936 16.452 C 26.936 15.556 27.16 14.767 27.608 14.085 C 28.075 13.403 28.777 12.877 29.712 12.507 C 30.647 12.118 31.826 11.923 33.248 11.923 L 36.901 11.923 C 36.901 11.202 36.793 10.608 36.579 10.14 C 36.384 9.673 36.073 9.322 35.644 9.088 C 35.235 8.854 34.709 8.738 34.066 8.738 C 33.306 8.738 32.654 8.913 32.108 9.264 C 31.582 9.595 31.251 10.121 31.114 10.842 L 27.286 10.842 C 27.403 9.77 27.754 8.845 28.338 8.065 C 28.942 7.286 29.731 6.682 30.705 6.254 C 31.699 5.825 32.819 5.611 34.066 5.611 C 35.469 5.611 36.677 5.845 37.69 6.312 C 38.703 6.76 39.482 7.432 40.027 8.328 C 40.573 9.205 40.846 10.277 40.846 11.543 L 40.846 20.456 L 37.573 20.456 L 37.164 18.206 L 37.047 18.206 C 36.735 18.634 36.394 19.014 36.024 19.345 C 35.673 19.677 35.284 19.949 34.855 20.164 C 34.426 20.378 33.969 20.534 33.482 20.631 C 32.994 20.748 32.488 20.806 31.962 20.806 Z M 33.248 17.767 C 33.793 17.767 34.261 17.68 34.651 17.504 C 35.06 17.309 35.41 17.056 35.703 16.745 C 35.995 16.433 36.219 16.072 36.375 15.663 C 36.55 15.235 36.667 14.796 36.725 14.348 L 33.686 14.348 C 33.082 14.348 32.585 14.426 32.196 14.582 C 31.826 14.718 31.553 14.923 31.378 15.196 C 31.202 15.449 31.115 15.751 31.115 16.102 C 31.115 16.452 31.202 16.754 31.378 17.008 C 31.553 17.261 31.806 17.456 32.137 17.592 C 32.469 17.709 32.839 17.767 33.248 17.767 Z M 15.578 2.004 C 17.765 1.696 19.788 3.22 20.096 5.408 L 22.066 19.425 C 22.207 20.431 21.506 21.361 20.5 21.503 C 19.444 21.651 18.483 20.873 18.409 19.809 L 17.834 11.581 C 17.727 10.05 17.306 8.777 16.572 7.763 C 15.837 6.725 14.838 5.978 13.575 5.522 C 12.31 5.042 10.829 4.862 9.133 4.98 C 7.625 5.086 6.289 5.44 5.123 6.042 C 3.982 6.643 3.079 7.44 2.414 8.433 C 2.236 8.709 2.081 8.996 1.949 9.296 C 1.374 10.595 2.615 11.793 4.033 11.694 C 4.996 11.626 5.72 10.89 6.416 10.181 C 6.546 10.048 6.676 9.916 6.806 9.79 C 6.889 9.709 6.979 9.633 7.074 9.563 C 7.704 9.093 8.479 8.826 9.398 8.762 C 10.175 8.707 10.821 8.804 11.336 9.052 C 11.874 9.299 12.28 9.697 12.555 10.246 C 13.141 11.318 12.107 12.443 10.888 12.528 L 8.677 12.683 C 6.958 12.803 5.549 13.139 4.451 13.689 C 3.351 14.216 2.548 14.911 2.04 15.775 C 1.901 16.022 1.389 15.972 1.35 15.691 L 0.02 6.227 C -0.135 5.124 0.634 4.104 1.737 3.949 Z M 14.426 21.84 C 14.494 22.106 14.316 22.372 14.044 22.41 L 11.403 22.781 C 11.271 22.8 11.204 22.58 11.318 22.513 C 11.818 22.218 12.266 21.855 12.662 21.425 C 13.07 21.005 13.441 20.532 13.774 20.005 C 13.792 19.977 13.823 19.958 13.857 19.956 C 13.907 19.953 13.953 19.986 13.966 20.035 Z M 4.361 23.07 C 4.609 23.176 4.585 23.739 4.318 23.777 L 2.919 23.974 C 2.7 24.004 2.497 23.852 2.466 23.632 L 2.143 21.337 C 2.135 21.279 2.218 21.251 2.249 21.3 C 2.729 22.072 3.433 22.662 4.361 23.07 Z M 7.814 19.633 C 7.402 19.496 7.079 19.282 6.846 18.99 C 6.612 18.699 6.481 18.341 6.451 17.917 C 6.421 17.493 6.502 17.12 6.693 16.799 C 6.881 16.455 7.194 16.184 7.63 15.988 C 8.088 15.766 8.682 15.63 9.413 15.579 L 11.438 15.438 C 12.312 15.376 13.05 16.109 12.775 16.942 C 12.621 17.45 12.381 17.905 12.054 18.307 C 11.727 18.708 11.324 19.044 10.846 19.314 C 10.389 19.559 9.831 19.705 9.172 19.751 C 8.677 19.786 8.224 19.746 7.814 19.633 Z"
                fill="rgb(250,250,250)"
              ></path>
            </g>
          </svg>
        </div>
        <div className="md:block hidden">
          <ProductSearch />
        </div>
        <ul className="md:flex items-center gap-6 hidden">
          <li className="hover:underline cursor-pointer transition-all text-">
            <Dropdown
              backdrop="blur"
              showArrow
              classNames={{
                base: "before:bg-default-200 dark text-foreground bg-background ", // change arrow background
                content:
                  "py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black",
              }}
            >
              <DropdownTrigger>Category</DropdownTrigger>
              <DropdownMenu
                aria-label="Dropdown menu with description"
                variant="faded"
              >
                <DropdownSection title="Category">
                  <DropdownItem>
                    <NavLink
                      to="Black-Friday-Deals"
                      className={({ isActive }) =>
                        `${isActive ? "underline" : ""}`
                      }
                    >
                      Black Friday Deals
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink
                      to="New-Arrivals"
                      className={({ isActive }) =>
                        `${isActive ? "underline" : ""}`
                      }
                    >
                      New Arrivals
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem shortcut="🔥">
                    <NavLink
                      to="Hot-Deals"
                      className={({ isActive }) =>
                        `${isActive ? "underline" : ""}`
                      }
                    >
                      Hot Deals🔥
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem shortcut="✨">
                    <NavLink
                      to="Discounts"
                      className={({ isActive }) =>
                        `${isActive ? "underline" : ""}`
                      }
                    >
                      Discounts
                    </NavLink>
                  </DropdownItem>
                </DropdownSection>
              </DropdownMenu>
            </Dropdown>
          </li>
          <li>
            <NavLink
              to="about"
              className={({ isActive }) =>
                `hover:underline cursor-pointer transition-all" ${
                  isActive ? "underline" : ""
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li className="hover:underline cursor-pointer transition-all">
            <NavLink
              to="FAQ"
              className={({ isActive }) =>
                `hover:underline cursor-pointer transition-all" ${
                  isActive ? "underline" : ""
                }`
              }
            >
              FAQ
            </NavLink>
          </li>
          <li className="aspect-square rounded-full hover:bg-white/20 transition-colors p-2 ">
            <div className="relative cursor-pointer">
              <NavLink to="cart">
                <Tooltip content="Cart">
                  <ShoppingCart className="border-none outline-none" />
                </Tooltip>
              </NavLink>
              <p className="right-[-5px] top-[-5px] absolute size-4 flex items-center justify-center aspect-square rounded-full bg-white/80 text-black text-sm ">
                {cartLength}
              </p>
            </div>
          </li>
        </ul>
        <div className="md:hidden flex items-center gap-4">
          <div className="relative cursor-pointer">
            <NavLink to="cart">
              <Tooltip content="Cart">
                <ShoppingCart className="border-none outline-none" />
              </Tooltip>
            </NavLink>
            <p className="right-[-5px] top-[-5px] absolute size-4 flex items-center justify-center aspect-square rounded-full bg-white/80 text-black text-sm ">
              {cartLength}
            </p>
          </div>
          <Dropdown
            backdrop="blur"
            showArrow
            classNames={{
              base: "before:bg-default-200 dark text-foreground bg-background ", // change arrow background
              content:
                "py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black",
            }}
          >
            <DropdownTrigger>
              <Menu className="border-none outline-none" />
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Dropdown menu with description"
              variant="faded"
            >
              <DropdownSection title="Category">
                <DropdownItem>
                  <NavLink
                    to="Black-Friday-Deals"
                    className={({ isActive }) =>
                      `${isActive ? "underline" : ""}`
                    }
                  >
                    Black Friday Deals
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink
                    to="New-Arrivals"
                    className={({ isActive }) =>
                      `${isActive ? "underline" : ""}`
                    }
                  >
                    New Arrivals
                  </NavLink>
                </DropdownItem>
                <DropdownItem shortcut="🔥">
                  <NavLink
                    to="Hot-Deals"
                    className={({ isActive }) =>
                      `${isActive ? "underline" : ""}`
                    }
                  >
                    Hot Deals🔥
                  </NavLink>
                </DropdownItem>
                <DropdownItem shortcut="✨">
                  <NavLink
                    to="Discounts"
                    className={({ isActive }) =>
                      `${isActive ? "underline" : ""}`
                    }
                  >
                    Discounts
                  </NavLink>
                </DropdownItem>
              </DropdownSection>
              <DropdownSection title="More">
                <DropdownItem>
                  <NavLink
                    to="FAQ"
                    className={({ isActive }) =>
                      `${isActive ? "underline" : ""}`
                    }
                  >
                    FAQ
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink
                    to="about"
                    className={({ isActive }) =>
                      `${isActive ? "underline" : ""}`
                    }
                  >
                    About
                  </NavLink>
                </DropdownItem>
              </DropdownSection>
            </DropdownMenu>
          </Dropdown>
        </div>
      </nav>
    </Navbar>
  );
}

export default CustomNavbar;
