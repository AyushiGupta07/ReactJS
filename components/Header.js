import { LOGOI_URL } from "../utils/constants";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import { About } from "./About";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  useEffect(() => {
    console.log("useEffect called");
  }, [btnName]);
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGOI_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "✅":"🔴"}</li>
          <li><Link to="/">Home</Link></li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li><Link to="/contactUs"> Contact Us</Link></li>
          <li>Cart</li>
          <li><Link to="/groceries" >Groceries</Link> </li>
          <button
            className="login"
            onClick={() => {
              btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
