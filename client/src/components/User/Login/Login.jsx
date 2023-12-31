import React, { useEffect, useState } from "react";
import axiosInstance from "../../../api/axiosInstance";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const LOGIN_URL = "/users/login";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  const emailRegex = /^\s*([a-zA-Z0-9]+@[a-z]+\.[a-z]{2,3})\s*$/i;

  const passwordRegex =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{6,16}$/;

  const handleLogin = async () => {
    try {
      if (!emailRegex.test(email) || !passwordRegex.test(password)) {
        setError(true);
        return false;
      }
      let response = await axiosInstance.post(LOGIN_URL, { email, password });
      if (response.data.auth) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("userToken", JSON.stringify(response.data.auth));
          navigate("/");
      }
    } catch (err) {
      setServerError(true);
      setMessage(err.response.data.message);
    }
  };

  return (
    <div className="flex justify-center w-full min-h-screen">
      <div className="w-full max-w-4xl h-4/5 rounded-lg shadow-lg overflow-hidden mt-28 mb-4">
        <div className="flex flex-row">
          <div className="w-3/5 px-6 py-8 text-white">
            <h2 className="text-2xl font-bold mb-5 text-center">Signin</h2>
            {serverError && (
              <span className="mt-1 mb-1 p-2 text-white bg-red-500 font-medium block ml-0">
                {message}
              </span>
            )}
            <div className="mb-3 mt-9">
              <label htmlFor="firstName" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border-b-2 border-white placeholder-white text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-light-blue"
              />
              {error && !emailRegex.test(email) && (
                <span className="mt-1 text-red-500 font-medium block ml-0">
                  Please enter a valid email address.
                </span>
              )}
            </div>
            <div className="mb-10 relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type={show ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border-b-2 border-white placeholder-white text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-light-blue"
              />

              <div className="absolute top-2 right-0 pr-3 flex items-center leading-5">
                {
                  <FaRegEyeSlash
                    onClick={() => setShow(!show)}
                    className={`${
                      show ? "hidden" : "block"
                    } text-xl cursor-pointer`}
                  />
                }
                {
                  <FaRegEye
                    onClick={() => setShow(!show)}
                    className={`${
                      show ? "block" : "hidden"
                    } text-xl cursor-pointer`}
                  />
                }
              </div>

              {error && !passwordRegex.test(password) && (
                <span className="mt-1 text-red-500 font-medium block ml-0">
                  Please enter a valid password.
                </span>
              )}
            </div>
            <div className="w-full flex justify-center">
              <button
                className="bg-yellow-500 self-center hover:bg-yellow-600 rounded-full py-2 px-4 text-white font-bold w-40 mb-4"
                type="button"
                onClick={handleLogin}
              >
                Signin
              </button>
            </div>
            <div className="text-center">
              <p>
                Don't have an account?{" "}
                <span className="font-bold">
                  <Link to="/signup">Join now.</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
