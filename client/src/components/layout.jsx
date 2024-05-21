/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import LoginButton from "./LoginButton";
import LogoutButton from "./Logout";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';

function Layout({ children }) {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  console.log('Is Authenticated:', isAuthenticated); // Debugging line to check the authentication status
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <div className=" banner bg-gray-800 text-white p-5">
        <h1
          className="  text-4xl font-bold cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        > Bunny’s Solutions Engineering Blog
        </h1>
        <div id="login-button">{!isAuthenticated ? <LoginButton /> : <LogoutButton />}</div>
        
      </div>
      <div className="p-5">{children}</div>
      <footer>
        <Link to="/terms-of-service">Terms of Service</Link>
        <Link to="/privacy" className='privacy'>Privacy Policy</Link>
      </footer>
    </div>
  );
}

export default Layout;
