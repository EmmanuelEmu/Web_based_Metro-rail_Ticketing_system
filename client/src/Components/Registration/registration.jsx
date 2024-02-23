import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { FaEyeSlash, FaEye } from "react-icons/fa6";
import { MdError } from "react-icons/md";
import "./registration.scss";
import Icon from "react-icons-kit";
import { basic_eye } from "react-icons-kit/linea/basic_eye";
import { basic_eye_closed } from "react-icons-kit/linea/basic_eye_closed";
import { arrows_exclamation } from "react-icons-kit/linea/arrows_exclamation";
import { arrows_circle_check } from "react-icons-kit/linea/arrows_circle_check";
// import DatePicker from "react-datepicker";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const Registration = () => {
  // useState hooks for every instance
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [nid, setNID] = useState();
  const [mobile, setMobile] = useState();
  const [email, setEmail] = useState("");
  const [dob, setDob] = React.useState(dayjs(''));
  const [imageFile, setImageFile] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [passVal, setPassVal] = useState(false);
  const [passOK, setPassOK] = useState(false);

  const [lowerValidated, setLowerValidated] = useState(false);
  const [upperValidated, setUpperValidated] = useState(false);
  const [numberValidated, setNumberValidated] = useState(false);
  const [specialValidated, setSpecialValidated] = useState(false);
  const [lengthValidated, setLengthValidated] = useState(false);

  const handleChange = (value) => {
    const lower = new RegExp("(?=.*[a-z])");
    const upper = new RegExp("(?=.*[A-Z])");
    const number = new RegExp("(?=.*[0-9])");
    const special = new RegExp("(?=.*[!@#$%^&*])");
    const length = new RegExp("(?=.{8,})");

    console.log(
      value,
      lowerValidated,
      upperValidated,
      numberValidated,
      specialValidated,
      lengthValidated
    );
    if (lower.test(value)) {
      setLowerValidated(true);
    } else {
      setLowerValidated(false);
    }
    if (upper.test(value)) {
      setUpperValidated(true);
    } else {
      setUpperValidated(false);
    }
    if (number.test(value)) {
      setNumberValidated(true);
    } else {
      setNumberValidated(false);
    }
    if (special.test(value)) {
      setSpecialValidated(true);
    } else {
      setSpecialValidated(false);
    }
    if (length.test(value)) {
      setLengthValidated(true);
    } else {
      setLengthValidated(false);
    }

    console.log(
      lowerValidated,
      upperValidated,
      numberValidated,
      specialValidated,
      lengthValidated
    );

    // if (
    //   lowerValidated &&
    //   upperValidated &&
    //   numberValidated &&
    //   specialValidated &&
    //   lengthValidated
    // ) {

    //   setPassOK(true);
    // }
  };

  useEffect(() => {
    // Check all validations and setPassOK in useEffect
    if (
      lowerValidated &&
      upperValidated &&
      numberValidated &&
      specialValidated &&
      lengthValidated
    ) {
      setPassOK(true);
    } else {
      setPassOK(false);
    }
  }, [
    lowerValidated,
    upperValidated,
    numberValidated,
    specialValidated,
    lengthValidated,
  ]);

  //handle hooks

  // const handleFirstName = (event) => {
  //   setFName(event.target.value);
  // };
  // const handleLastName = (event) => {
  //   setLName(event.target.value);
  // };
  // const handleNID = (event) => {
  //   setNID(event.target.value);
  // };
  // const handleMobileNumber = (event) => {
  //   setMobile(event.target.value);
  // };
  // const handleEmail = (event) => {
  //   setEmail(event.target.value);
  // };
  // const handlePassword = (event) => {
  //   setPassword(event.target.value);
  // };
  // const handleConfirmPassword = (event) => {
  //   setConfirmPassword(event.target.value);
  // };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleIsChecked = () => {
    setIsChecked(!isChecked);
  };

  const handleValidation = (event, setter, customErrorMessage) => {
    // console.log(typeof(event.target.id));
    if(event.target.id === "imageFile"){
      console.log(event.target.files[0]);
      const image = event.target.files[0]
      setImageFile(image)
    }
    if (event.target.id === "password") {
      setPassVal(true);
      handleChange(event.target.value);
    } else {
      setPassVal(false);
    }
    const value = event.target.value.trim();

    // Clear custom validity and reset error message
    event.target.setCustomValidity("");
    setter(value);
  };

  const handleSubmit = (event) => {
    console.log("submit button triggered");
    event.preventDefault(); // Prevents default form submission

    // Your custom validation logic here
    const errors = {};

    if (!fName.trim()) {
      errors.fName = "Please enter your first name.";
    }

    if (!lName.trim()) {
      errors.lName = "Please enter your last name.";
    }

    if (!nid) {
      errors.nid = "Please enter your NID.";
    }

    if (!mobile) {
      errors.mobile = "Please enter your mobile number.";
    } else if (!/^\d{11}$/.test(mobile)) {
      errors.mobile = "Invalid mobile number. Please enter 11 digits.";
    }

    if (!email.trim()) {
      errors.email = "Please enter your email.";
    } else if (!emailRegex.test(email)) {
      errors.email =
        "Invalid email. Please enter your email with correct format";
    }
    if (!password.trim()) {
      errors.password = "Please enter your password.";
    } else if (!passOK) {
      console.log(passOK);
      errors.password = "Invaild password, Please enter the correct format";
    }
    if (!confirmPassword.trim()) {
      errors.confirmPassword = "Please confirm the password";
    }
    if (!imageFile) {
      errors.imageFile = "Please enter your image";
    }

    console.log(errors);
    console.log(Object.keys(errors));
    // If there are errors, set them and prevent submission
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
    const handlePostObject = async (data) => {
      try {
        const response = await fetch("http://localhost:5000/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          console.log("Object sent successfully!");
          // Handle success, if needed
        } else {
          console.error("Failed to send object:", response.statusText);
          // Handle error, if needed
        }
      } catch (error) {
        console.error("Error sending object:", error.message);
        // Handle error, if needed
      }
    };

    const userData = {
      firstName: fName,
      lastName: lName,
      NID: nid,
      mobile: mobile,
      dob: dob,
      email: email,
      password: password,
      picture: imageFile
    };
    handlePostObject(userData);

    // Your submission logic here
    console.log("Form submitted successfully!");
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const userData = {
  //     firstName: fName,
  //     lastName: lName,
  //     NID: nid,
  //     mobile: mobile,
  //     email: email,
  //     password: password,
  //   };

  //   // setFormErrors(validate(userData));
  //   // console.log(userData);
  //   setFormErrors(validate(userData));
  //   setIsSubmit(true);
  //   console.log("Submit success");
  // };

  // const validate = (value) => {
  //   console.log(value);
  //   const errors = {};
  //   if (!value.firstName) {
  //     errors.firstName = "User first Name is required";
  //   }
  //   if (!value.lastName) {
  //     errors.lastName = "User last Name is required";
  //   }
  //   if (!value.NID) {
  //     errors.NID = "Please give your NID number";
  //   }
  //   if (!value.mobile) {
  //     errors.mobile = "Please enter your phone number";
  //   }
  //   if (!value.password) {
  //     errors.password = "Please enter the password";
  //   }
  //   return errors;
  // };

  // useEffect(() => {
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log("Success");
  //   } else {
  //     console.log(formErrors);
  //   }
  // }, [formErrors]);
  console.log(fName, lName, nid, mobile, email, dob, imageFile, password, confirmPassword);
  // console.log(`${dob.$D}.${dob.$M}.${dob.$y}`);

  return (
    <div>
      <div class="min-h-screen py-40 backgroundImage">
        <div class="container mx-auto">
          <div class="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden outline outline-offset-2 outline-green-800">
            <div class="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center sideImage">
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
              <form onSubmit={handleSubmit} noValidate>
                <div class="grid grid-cols-2 gap-5">
                  <input
                    type="text"
                    value={fName}
                    id="fName"
                    placeholder="Firstname"
                    onChange={(event) =>
                      handleValidation(
                        event,
                        setFName,
                        "Please enter your first name"
                      )
                    }
                    class="border border-gray-400 py-1 px-2"
                    required
                  />
                  {/* {formErrors.firstName && (
                      <div class="error flex flex-row justify-start">
                        <div><MdError /></div> <div class="text-sm text-red-600">{formErrors.firstName}</div>
                      </div>
                    )} */}
                  <input
                    type="text"
                    value={lName}
                    id="lName"
                    placeholder="Surname"
                    onChange={(event) =>
                      handleValidation(
                        event,
                        setLName,
                        "Please enter your last name"
                      )
                    }
                    class="border border-gray-400 py-1 px-2"
                    required
                  />
                </div>
                <div class="mt-5">
                  <input
                    type="number"
                    value={nid}
                    id="nid"
                    placeholder="NID number"
                    onChange={(event) =>
                      handleValidation(
                        event,
                        setNID,
                        "Please enter your NID number"
                      )
                    }
                    class="border border-gray-400 py-1 px-2 w-full"
                    required
                  />
                </div>
                <div class="mt-5">
                  <input
                    type="number"
                    value={mobile}
                    id="mobile"
                    placeholder="Mobile Number"
                    onChange={(event) =>
                      handleValidation(
                        event,
                        setMobile,
                        "Please enter your mobile number"
                      )
                    }
                    class="border border-gray-400 py-1 px-2 w-full"
                    required
                  />
                </div>
                <div class="mt-5">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker
                        label="Enter your date of birth"
                        className="border border-gray-400 py-1 px-2 w-full"
                        value={dob}
                        onChange={(date) => {
                          setDob(date);
                        }}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
                <div class="mt-5">
                  <input
                    type="text"
                    value={email}
                    id="email"
                    placeholder="Email"
                    onChange={(event) =>
                      handleValidation(
                        event,
                        setEmail,
                        "Please enter your email address"
                      )
                    }
                    class="border border-gray-400 py-1 px-2 w-full"
                    required
                  />
                </div>
                <div class="mt-5 relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    id="password"
                    placeholder="Password"
                    onChange={(event) => {
                      handleValidation(
                        event,
                        setPassword,
                        "Please enter a valid password"
                      );
                    }}
                    className="border border-gray-400 py-1 px-2 w-full pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 focus:outline-none"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {passVal ? (
                  <div>
                    {/* <h1>This is password validation section</h1> */}
                    {/* validation tracker */}
                    <main class="tracker-box flex flex-col items-start justify-start">
                      <div
                        className={
                          lowerValidated ? "validated" : "not-validated"
                        }
                      >
                        {lowerValidated ? (
                          <span className="list-icon green">
                            <Icon icon={arrows_circle_check} />
                          </span>
                        ) : (
                          <span className="list-icon">
                            <Icon icon={arrows_exclamation} />
                          </span>
                        )}
                        At least one lowercase letter
                      </div>
                      <div
                        className={
                          upperValidated ? "validated" : "not-validated"
                        }
                      >
                        {upperValidated ? (
                          <span className="list-icon green">
                            <Icon icon={arrows_circle_check} />
                          </span>
                        ) : (
                          <span className="list-icon">
                            <Icon icon={arrows_exclamation} />
                          </span>
                        )}
                        At least one uppercase letter
                      </div>
                      <div
                        className={
                          numberValidated ? "validated" : "not-validated"
                        }
                      >
                        {numberValidated ? (
                          <span className="list-icon green">
                            <Icon icon={arrows_circle_check} />
                          </span>
                        ) : (
                          <span className="list-icon">
                            <Icon icon={arrows_exclamation} />
                          </span>
                        )}
                        At least one number
                      </div>
                      <div
                        className={
                          specialValidated ? "validated" : "not-validated"
                        }
                      >
                        {specialValidated ? (
                          <span className="list-icon green">
                            <Icon icon={arrows_circle_check} />
                          </span>
                        ) : (
                          <span className="list-icon">
                            <Icon icon={arrows_exclamation} />
                          </span>
                        )}
                        At least one special character
                      </div>
                      <div
                        className={
                          lengthValidated ? "validated" : "not-validated"
                        }
                      >
                        {lengthValidated ? (
                          <span className="list-icon green">
                            <Icon icon={arrows_circle_check} />
                          </span>
                        ) : (
                          <span className="list-icon">
                            <Icon icon={arrows_exclamation} />
                          </span>
                        )}
                        At least 8 characters
                      </div>
                    </main>
                  </div>
                ) : (
                  <></>
                )}
                <div class="mt-5 relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    onChange={(event) =>
                      handleValidation(
                        event,
                        setConfirmPassword,
                        "Please confirm the password"
                      )
                    }
                    className="border border-gray-400 py-1 px-2 w-full pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 focus:outline-none"
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <div class="mt-5 flex items-center">
                  <label htmlFor="fileInput" className="mr-2">
                    Select an image:
                  </label>
                  <input
                    type="file"
                    id="imageFile"
                    accept=".jpg, .png"
                    onChange={(event)=>{
                      handleValidation(
                        event,
                        setImageFile,
                        "Please enter you image"
                      )
                    }}
                    className="border border-gray-400 py-1 px-2 w-80 pr-10"
                    required
                  />
                </div>
                <div class="mt-5">
                  <label class="flex items-center">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleIsChecked}
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
                    disabled={!isChecked}
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
