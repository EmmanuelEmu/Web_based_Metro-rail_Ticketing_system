import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../registration/registration.scss";
import { FaEyeSlash, FaRegEyeSlash, FaEye } from "react-icons/fa";
import Alpine from 'alpinejs';
import { Bd } from "react-flags-select";

window.Alpine = Alpine;
Alpine.start();

const Registration = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [nidNumber, setNIDnumber] = useState();
  const [mobileNumber, setMobilenumber] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [checked, setChecked] = useState(false);
  const [buttonStatus, setButtonStatus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const handleFNameChange = (event) => {
    setFName(event.target.value);
  };
  const handleLNameChange = (event) => {
    setLName(event.target.value);
  };
  const handleNIDNumberChange = (event) => {
    setNIDnumber(event.target.value);
  };
  const handleMobileNumberChange = (event) => {
    setMobilenumber(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };
  const handleCheckedChange = (event) => {
    setChecked(event.target.checked);
    if (buttonStatus) {
      setButtonStatus(false);
    } else {
      setButtonStatus(true);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  console.log(fName, lName, nidNumber, email, password, confirmPassword);
  const userData = {
    firstName: fName,
    lastName: lName,
    NID: nidNumber,
    mobile: mobileNumber,
    email: email,
    password: password,
  };
  console.log(checked);
  console.log(userData);
  const navigate = useNavigate();
  const sendDataToServer = async () => {
    try {
      const response = await fetch("http://localhost:5000/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log("Data sent successfully!");
        navigate('/login');
      } else {
        console.error("Failed to send data.");
      }
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <div>
      <div class="min-h-screen py-40 upperClass">
        <div class="container mx-auto">
          <div class="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
            <div class="w-full lg:w-1/2 flex flex-col items-center justify-end p-12 bg-no-repeat bg-cover bg-center sideImagebg sm:bg-transparent">
              <h1 class="text-black text-3xl mb-3">Welcome</h1>
              <div>
                <p class="text-black">
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
                Create your account. It’s free and only take a minute
              </p>
              <form action="#">
                <div class="grid grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Firstname"
                    value={fName}
                    onChange={handleFNameChange}
                    class="border border-gray-400 py-1 px-2"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Surname"
                    value={lName}
                    onChange={handleLNameChange}
                    class="border border-gray-400 py-1 px-2"
                    required
                  />
                </div>
                <div class="mt-5">
                  <input
                    type="number"
                    placeholder="NID number"
                    value={nidNumber}
                    onChange={handleNIDNumberChange}
                    class="border border-gray-400 py-1 px-2 w-full"
                    required
                  />
                </div>
                <div class="mt-5 flex align-middle">
                  <div class="block py-2 flex align-middle border border-gray-400 p-2 w-1/3">
                      <Bd class="w-1/2 my-1"/>
                      <span>+880</span>
                  </div>
                  <input
                    type="number"
                    placeholder="mobile number"
                    value={mobileNumber}
                    onChange={handleMobileNumberChange}
                    class="border border-gray-400 py-1 px-2 w-full ms-2"
                    required
                  />
                </div>
                <div class="mt-5">
                  <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                    class="border border-gray-400 py-1 px-2 w-full"
                    required
                  />
                </div>
                <div class="mt-5 relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    class="border border-gray-400 py-1 px-2 w-full"
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    class="absolute right-2 top-1/2 transform -translate-y-1/2"
                  >
                    {showPassword ? <FaEye /> : <FaRegEyeSlash />}
                  </button>
                </div>
                <div class="mt-5 relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    class="border border-gray-400 py-1 px-2 w-full"
                    required
                  />
                  <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                    class="absolute right-2 top-1/2 transform -translate-y-1/2"
                  >
                    {showConfirmPassword ? <FaEye /> : <FaRegEyeSlash />}
                  </button>
                  
                </div>
                <div class="mt-5">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={handleCheckedChange}
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
                </div>
                <div class="mt-5">
                  {buttonStatus ? (
                    <button
                      class="w-full bg-purple-500 py-3 text-center text-white hover:bg-violet-600 active:bg-violet-700"
                      onClick={sendDataToServer}
                    >
                      Register Now
                    </button>
                  ) : (
                    <button
                      class="w-full bg-purple-500 py-3 text-center text-white focus:outline-none"
                      disabled
                    >
                      Register Now
                    </button>
                  )}
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
