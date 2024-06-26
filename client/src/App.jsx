import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import AddBlog from "./pages/AddBlog";
import EditBlog from "./pages/EditBlog";
import Layout from "./components/layout";
import { AuthProvider } from "./context/AuthContext";
import Callback from "./components/Callback";
import TermsOfService from "./pages/Legal/TermsOfService";
import PrivacyPolicy from "./pages/Legal/PrivacyPolicy";

// Custom hook for tracking page views
const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
  }, [location]);
};

// Main application component that sets up routing and context providers
function App() {

  return (
    // Provides authentication context to all child components
    <AuthProvider>
      {/* Router component to manage navigation within the app */}
      <BrowserRouter>
      <PageTracker />
        {/* Define all application routes */}
        <Routes>
          {/* Home page route */}
          <Route
            path="/"
            element={
              // Layout component wraps around the Home component
              <Layout>
                <Home />
              </Layout>
            }
          />
          {/* Callback route for handling authentication responses */}
          <Route path="/callback" element={<Callback />} />
          {/* Route for viewing a specific blog post */}
          <Route
            path="/blog/:id"
            element={
              // Layout component wraps around the Blog component
              <Layout>
                <Blog />
              </Layout>
            }
          />
          {/* Route for adding a new blog post */}
          <Route
            path="/add-blog/"
            element={
              // Layout component wraps around the AddBlog component
              <Layout>
                <AddBlog />
              </Layout>
            }
          />
          {/* Route for editing an existing blog post */}
          <Route
            path="/edit-blog/:id"
            element={
              // Layout component wraps around the EditBlog component
              <Layout>
                <EditBlog />
              </Layout>
            }
          />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

// Component to handle page tracking
const PageTracker = () => {
  usePageTracking();
  return null;
};

export default App;
