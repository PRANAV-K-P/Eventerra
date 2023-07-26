import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const auth = false; // localStorage.getItem("user");

  const logout = () => {
    // localStorage.clear();
    localStorage.removeItem("user");
    localStorage.removeItem("userToken");
    navigate("/");
  };
  return (
    <header className="border-none py-6 shadow-xl bg-blue-300">
      <div className="flex item-center justify-between xl:max-w-11xl xl:mx-auto max-w-full px-[8%] flex-wrap w-full ">
        <h1 className="text-5xl font-bold text-dark-red w-70">
          <Link to="/">Eventerra</Link>
        </h1>

        <FiMenu
          className="lg:hidden block  h-6 w-6 cursor-pointer mt-3"
          onClick={() => setOpen(!open)}
        />

        <nav
          className={`${
            open ? "block" : "hidden"
          } w-full lg:flex lg:items-center lg:w-auto `}
        >
          <ul className="text-base text-gray-700 lg:flex lg:justify-between">
            <li className="group">
              <span className="lg:px-5 py-2 block hover:text-blue-700 font-bold">
                Services
              </span>
            </li>
            <li>
              <Link
                className="lg:px-5 py-2 block hover:text-blue-700 font-bold"
                to="/connect"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                className="lg:px-5 py-2 block hover:text-blue-700 font-bold"
                to="/about"
              >
                About
              </Link>
            </li>
            {auth ? (
              <>
                <li className="group">
                  <Link className="block" to="/profile">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className="lg:px-5 py-2 block hover:text-blue-700 font-bold"
                    onClick={logout}
                    to="/"
                  >
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    className="lg:px-5 py-2 block hover:text-blue-700 font-bold"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    className="lg:px-5 py-2 block hover:text-blue-700 font-bold"
                    to="/signup"
                  >
                    Signup
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
        <div
          className={`${
            open ? "block" : "hidden"
          } w-full lg:flex lg:items-center lg:w-auto`}
        ></div>
      </div>
    </header>
  );
};

export default NavBar;
