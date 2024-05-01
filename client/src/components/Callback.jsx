import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Callback = () => {
  const { isAuthenticated, isLoading, error } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && !isLoading && !error) {
      const redirectPath = sessionStorage.getItem('postLoginRedirectPath') || '/';
      navigate(redirectPath);
      sessionStorage.removeItem('postLoginRedirectPath');
    }
    // Handle error or loading states as needed
  }, [isAuthenticated, isLoading, error, navigate]);

  return (
    <div>Loading...</div>  // Provide a loading indicator or handle errors appropriately
  );
};

export default Callback;
