import React from "react";

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
              </div>
            </div>

            <button className="text-wrapper-2">OTP Verification</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default OtpVerify;
