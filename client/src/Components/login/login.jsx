import React, { useEffect, useState } from "react";
import image from "../login/images/metro-login.webp";
import google from "../login/images/google.svg";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const Login = () => {
  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }, []);


  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [login, setLogin] = useState(false);
  const [registration, setRegistration] = useState(false);
  const [showPassword, setShowPassword] = useState(false);


  const handleEmail = (event)=>{
    setEmail(event.target.value);
  }

  const handlePassword = (event)=>{
    setPassword(event.target.value);
  }


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handhleLogin = async () => {
    // setLogin(!login);
    try {
      const response = await fetch("http://localhost:5000/login");
      if (response.ok) {
        setLogin(true);
      } else {
        // Handle error
        console.error("Failed to fetch data from the server");
      }
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  return (
    <div>
      <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
          {/* left side */}
          <div class="flex flex-col justify-center p-8 md:p-14">
            <span class="mb-3 text-4xl font-bold">Welcome back</span>
            <span class="font-light text-gray-400 mb-8">
              Welcom back! Please enter your details
            </span>
            <div class="py-4">
              <span class="mb-2 text-md ">Email</span>
              <input
                type="text"
                value={email}
                class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                name="email"
                id="email"
              />
            </div>
            <div class="py-4">
              <span class="mb-2 text-md">Password</span>
              <div className="relative">
              <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    // value={password}
                    // onChange={handlePasswordChange}
                    class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    class="absolute right-2 top-1/2 transform -translate-y-1/2"
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </button>
              </div>
            </div>
            <div class="flex justify-between w-full py-4">
              <div class="mr-24">
                <input type="checkbox" name="ch" id="ch" class="mr-2" />
                <span class="text-md">Remember for 30 days</span>
              </div>
              <span class="font-bold text-md">Forgot password</span>
            </div>
            <button class="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300">
              Sign in
            </button>
            <button class="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white">
              <img src={google} alt="img" class="w-6 h-6 inline mr-2" />
              Sign in with Google
            </button>
            <div class="text-center text-gray-400">
              Dont'have an account?
              <span class="font-bold text-black px-2 hover:cursor-pointer">
                Sign up for free
              </span>
            </div>
          </div>
          {/* right side */}
          <div class="relative">
            <img
              src={image}
              alt="img"
              class="w-[600px] h-full hidden rounded-r-2xl md:block object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
