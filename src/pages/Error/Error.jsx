import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
const Error = () => {
  return (
    <>
      <div className="text-center my-8 mx-auto sm:px-10 px-3 text-white">
        <h2 className="font-semibold md:text-[100px] text-6xl">404</h2>
        <p className=" text-4xl font-bold py-2">Page Not Found</p>
        <p className="text-lg mt-2">
          The page you are looking for does not exists.
        </p>
        <br />
        <NavLink to="/" replace>
          <p className="text-white/40 hover:text-white hover:underline transition-all">
            Back to Home
          </p>
        </NavLink>
      </div>
      <Footer />
    </>
  );
};

export default Error;
