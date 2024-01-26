import React, { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa6";
import "./registration.scss";

const Registration = () => {

    // useState hooks for every instance 
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    //handle hooks 
    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
      };
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };

  return (
    <div>
      <div
        class="min-h-screen py-40"
        style={{ backgroundImage: "linear-gradient(115deg, #9F7AEA, #FEE2FE)" }}
      >
        <div class="container mx-auto">
          <div class="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
            <div
              class="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center sideImage "
            >
              <div class="flex flex-col align-bottom">
              <h1 class="text-white text-3xl mb-3">Welcome</h1>
                <p class="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean suspendisse aliquam varius rutrum purus maecenas ac{" "}
                  <a href="#" class="text-purple-500 font-semibold">
                    Learn more
                  </a>
                </p>
              </div>
            </div>
            <div class="w-full lg:w-1/2 py-16 px-12">
              <h2 class="text-3xl mb-4">Register</h2>
              <p class="mb-4">
                Create your account. It’s free and only takes a minute
              </p>
              <form>
                <div class="grid grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Firstname"
                    class="border border-gray-400 py-1 px-2"
                  />
                  <input
                    type="text"
                    placeholder="Surname"
                    class="border border-gray-400 py-1 px-2"
                  />
                </div>
                <div class="mt-5">
                  <input
                    type="text"
                    placeholder="NID number"
                    class="border border-gray-400 py-1 px-2 w-full"
                  />
                </div>
                <div class="mt-5">
                  <input
                    type="number"
                    placeholder="Mobile Number"
                    class="border border-gray-400 py-1 px-2 w-full"
                  />
                </div>
                <div class="mt-5">
                  <input
                    type="text"
                    placeholder="Email"
                    class="border border-gray-400 py-1 px-2 w-full"
                  />
                </div>
                <div class="mt-5 relative">
                  <input
                    type={showPassword?"text":"password"}
                    placeholder="Password"
                    className="border border-gray-400 py-1 px-2 w-full pr-10"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 focus:outline-none"
                  >
                    {
                        showPassword ? <FaEyeSlash/> : <FaEye/>
                    }
                  </button>
                </div>
                <div class="mt-5 relative">
                  <input
                    type= {showConfirmPassword? "text":"password"}
                    placeholder="Confirm Password"
                    className="border border-gray-400 py-1 px-2 w-full pr-10"
                  />
                  <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 focus:outline-none"
                  >
                    {
                        showConfirmPassword ? <FaEyeSlash/> : <FaEye/>
                    }
                  </button>
                </div>
                <div class="mt-5">
                  <label class="flex items-center">
                    <input
                      type="checkbox"
                      class="border border-gray-400 me-2"
                    />
                    <span>
                      I accept the{" "}
                      <a href="#" class="text-purple-500 font-semibold">
                        Terms of Use
                      </a>{" "}
                      &{" "}
                      <a href="#" class="text-purple-500 font-semibold">
                        Privacy Policy
                      </a>
                    </span>
                  </label>
                </div>
                <div class="mt-5">
                  <button
                    type="submit"
                    class="w-full bg-purple-500 py-3 text-center text-white"
                  >
                    Register Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
