import React, { useState } from "react";
import "./login.scss";
import { Link, Navigate } from "react-router-dom";
import sideImage from "../../images/bg.webp";
import { FaEyeSlash, FaEye } from "react-icons/fa6";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const Login = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalidFlag, setInvalidFlag] = useState(false);

  const handlePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const handleOnChange = (e, setter, errorMessage) => {
    const value = e.target.value.trim();

    // Clear custom validity and reset error message
    e.target.setCustomValidity("");
    setter(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = {};
    if (!email.trim()) {
      errors.email = "Please enter your email";
    } else if (!emailRegex.test(email)) {
      errors.email = "Invalid email. Please re-enter your email";
    }

    if (!password.trim()) {
      errors.password = "Please enter your password";
    }

    console.log(errors);

    if (Object.keys(errors).length > 0) {
      // Set custom validity for each input field
      Object.keys(errors)
        .reverse()
        .forEach((field) => {
          console.log(field);
          const inputElement = document.getElementById(field);
          if (inputElement) {
            console.log(inputElement);
            inputElement.setCustomValidity(errors[field]);
            inputElement.reportValidity();
          }
        });
      return;
    }

    try {
      //   const response = await axios.post("http://localhost:5000/login", {
      //     email,
      //     password,
      //   });
      //   console.log(response);
      const data = { email, password };
      console.log(data);
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "success") {
            // Redirect to homepage or perform navigation here
            const userData = JSON.stringify(data.data);
            window.location.href = `/homepage?param1=${encodeURIComponent(userData)}`; // or any other navigation method
          } else {
            setInvalidFlag(true);
            console.log("Invalid email or password");
            toast.error("Invalid email or password", {
              toastId: "invalid-login",
            });
            return <ToastContainer />;
          }
        });

      if (response.ok) {
        console.log("Object sent successfully!");
        // Handle success, if needed
      } else {
        console.error("Failed to send object:", response.statusText);
        // Handle error, if needed
      }
    } catch (error) {
      console.log("Errors: " + error);
    }
  };

  console.log(email, password);
  return (
    <div>
      <section class="bg-gray-50 min-h-screen flex items-center justify-center h-14 bg-gradient-to-r from-cyan-500 to-blue-500 backgroundImage">
        {/* login container */}
        <div class="bg-gray-100 flex rounded-2xl shadow-2xl max-w-full p-5 items-center outline outline-offset-2 outline-gray-500">
          {/* form  */}
          <div class="md:w-1/2 px-8 md:px-16">
            <h2 class="font-bold text-2xl text-[#002D74]">Login</h2>
            <p class="text-xs mt-4 text-[#002D74]">
              If you are already a member, easily log in
            </p>

            <form
              action=""
              class="flex flex-col gap-4"
              onSubmit={handleSubmit}
              noValidate
            >
              <input
                class="p-2 mt-8 rounded-xl border"
                type="email"
                value={email}
                id="email"
                name="email"
                placeholder="Email"
                onChange={(event) => {
                  handleOnChange(event, setEmail, "Please enter your email");
                }}
              />
              <div class="relative">
                <input
                  type={passwordVisibility ? "text" : "password"}
                  class="p-2 rounded-xl border w-full"
                  name="password"
                  value={password}
                  id="password"
                  placeholder="Password"
                  onChange={(event) => {
                    handleOnChange(
                      event,
                      setPassword,
                      "Please enter your password"
                    );
                  }}
                />
                <button
                  type="button"
                  onClick={handlePasswordVisibility}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 focus:outline-none"
                >
                  {passwordVisibility ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <button class="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">
                Login
              </button>
            </form>

            <div class="mt-6 grid grid-cols-3 items-center text-gray-400">
              <hr class="border-gray-400" />
              <p class="text-center text-sm">OR</p>
              <hr class="border-gray-400" />
            </div>

            <button class="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
              <svg
                class="mr-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="25px"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                />
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                />
              </svg>
              Login with Google
            </button>

            <div class="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
              <a href="#">Forgot your password?</a>
            </div>

            <div class="mt-3 text-xs flex justify-between items-center text-[#002D74]">
              <p>Don't have an account?</p>
              <button class="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">
                <Link to="/registration">Register</Link>
              </button>
            </div>
            {invalidFlag && (
              <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-sky-500/100 p-4 rounded shadow-md">
                <p className="text-white-500">
                  Invalid email or password. Please try again.
                </p>
                <button
                  onClick={() => setInvalidFlag(false)}
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Close
                </button>
              </div>
            )}
          </div>

          {/* <!-- image --> */}
          <div class="md:block hidden w-full h-auto">
            <img
              class="rounded-2xl w-full h-auto"
              src={sideImage}
              alt="Login"
            />
            <div>
              <p>Welcome to metro Rail BD</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
