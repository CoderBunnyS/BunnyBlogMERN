// src/context/AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();

  const login = () => loginWithRedirect();
  const isAdmin = user && user.name === "Bunny"; // Check if the logged-in user is "Bunny"

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};
