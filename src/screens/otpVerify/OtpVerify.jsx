import React from "react";
import otp_box from "../../assets/otp_box.svg";
import "./Style.css";

function OtpVerify() {
  return (
    <>
      <div className="container">
        <div className="group-wrapper">
          <div className="group">
            <button className="btn">
              <div className="overlap-group">
                <div className="text-wrapper">Verify</div>
              </div>

              <p className="resend_p">Resend OTP</p>
              <p className="another_p">Use another number</p>
            </button>

            <p className="description">
              We have sent an OTP to +919889898989. Please enter the code
              received to verify.
            </p>

            <div className="otp_input_box">
              <input
                className="input_box_css"
                type="text"
                src={otp_box}
                maxLength={1}
                autoFocus
              ></input>
              <input
                className="input_box_css"
                type="text"
                src={otp_box}
                maxLength={1}
              ></input>
              <input
                className="input_box_css"
                type="text"
                src={otp_box}
                maxLength={1}
              ></input>
              <input
                className="input_box_css"
                type="text"
                src={otp_box}
                maxLength={1}
              ></input>
            </div>

            <button className="text-wrapper-2">OTP Verification</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default OtpVerify;
