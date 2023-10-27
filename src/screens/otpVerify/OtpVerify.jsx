import React, { useState } from "react";
import otp_box from "../../assets/otp_box.svg";
import "./Style.css";
import { Link } from "react-router-dom";

function OtpVerify() {
  const [otpValues, setOtpValues] = useState(["", "", "", ""]); // State to store OTP input values
  const [isOtpCorrect, setIsOtpCorrect] = useState(false); // State to track if OTP is correct

  const handleOtpChange = (index, value) => {
    let newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);
    setIsOtpCorrect(false); // Reset the state when OTP values change
  };

  const handleSubmit = () => {
    const enteredOtp = otpValues.join(""); // Concatenate OTP input values into a single string
    if (enteredOtp === "5678") {
      setIsOtpCorrect(true); // Set state to indicate correct OTP
    } else {
      setIsOtpCorrect(false); // Set state to indicate incorrect OTP
    }
  };

  return (
    <>
      <div className="container">
        <div className="group-wrapper">
          <div className="group">
            <button className="btn">
              {/* {otpValues.join("") === "5678" && ( */}
              <Link to={isOtpCorrect ? "/player" : "#"}>
                <button className="overlap-group" onClick={handleSubmit}>
                  <div className="text-wrapper">Verify</div>
                </button>
              </Link>
              {/* )} */}

              <p className="resend_p">Resend OTP</p>
              <p className="another_p">Use another number</p>
            </button>

            <p className="description">
              We have sent an OTP to +919889898989. Please enter the code
              received to verify.
            </p>

            <div className="otp_input_box">
              {otpValues.map((value, index) => (
                <input
                  key={index}
                  className="input_box_css"
                  type="text"
                  maxLength={1}
                  value={value}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                />
              ))}
            </div>

            <button className="text-wrapper-2">OTP Verification</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default OtpVerify;
