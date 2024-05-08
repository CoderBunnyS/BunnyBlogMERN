import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import BlogForm from "../../components/BlogForm";

// Functional component for adding a new blog post
function AddBlog() {
  const { isAuthenticated } = useAuth0(); // Hook to check if the user is authenticated
  const navigate = useNavigate(); // Hook for programmatic navigation

   // Effect hook to handle redirection based on authentication status
  useEffect(() => {
    // Redirect user to home page if not authenticated
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);  // Dependencies to rerun the effect when either isAuthenticated or navigate changes

  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-2xl font-bold text-gray-800">Add a Blog Post</h1>
      <hr />
      <BlogForm />
    </div>
  );
}

export default AddBlog;
