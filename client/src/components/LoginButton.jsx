import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
//import { useNavigate } from "react-router-dom";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  //const navigate = useNavigate();

  const handleLogin = () => {
    // Store the current path to return to after authentication
    sessionStorage.setItem('postLoginRedirectPath', window.location.pathname + window.location.search);

    // Redirects the user to a fixed callback path
    loginWithRedirect({
      redirectUri: `${window.location.origin}/callback`
    });
  };
  
  return <button onClick={handleLogin}>Log In</button>;
};

export default LoginButton;
