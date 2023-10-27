import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Loginpage from "./screens/Login/Loginpage.jsx";
import OtpVerify from "./screens/otpVerify/OtpVerify.jsx";
import PlayerScreen from "./screens/player/PlayerScreen.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Loginpage />,
  },
  {
    path: "/otp",
    element: <OtpVerify />,
  },
  {
    path: "/player",
    element: <PlayerScreen />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
