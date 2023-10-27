import React from "react";
import "./Style.css";
import india_flag_icon from "../../assets/india_flag_icon.png";
import polygon from "../../assets/polygon.svg";
import { Link } from "react-router-dom";

function Loginpage() {
  return (
    <>
      <div className="container">
        <div className="group-wrapper">
          <div className="group">
            <Link to="/otp">
              <button className="btn">
                <div className="overlap-group">
                  <div className="text-wrapper">Sign In</div>
                </div>
              </button>
            </Link>

            <p className="description">
              Please enter your mobile number to login. We will send an OTP to
              verify your number.
            </p>

            <div className="overlap-wrapper">
              <div className="overlap">
                <div className="div">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    className="email-address"
                  />

                  <div className="email-address-2">+91</div>
                </div>
                <img
                  className="india-flag-icon"
                  alt="India_flag_icon"
                  src={india_flag_icon}
                />
                <img className="polygon" alt="Polygon" src={polygon} />
              </div>
            </div>

            <button className="text-wrapper-2">Sign In</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loginpage;
