// src/context/AuthContext.js
import { createContext, useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";

// Create a context for managing auth state throughout the app
const AuthContext = createContext(null);

// Custom hook to use the auth context values
export function useAuth() {
  return useContext(AuthContext);
}

// Component to provide auth context to its children
export const AuthProvider = ({ children }) => {
  // Extract necessary methods and properties from the Auth0 hook
  const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();

    // Function to initiate login process
  const login = () => loginWithRedirect();

    // Check if the logged-in user has an admin role based on their email
  const isAdmin = user && user.email === "schaeferbunny@gmail.com"; // Check if the logged-in user's email is correct

    // Provide auth state and control methods to the component tree
  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, login, logout, isAdmin }}
    >
      {children}
    </AuthContext.Provider>
  );
};
