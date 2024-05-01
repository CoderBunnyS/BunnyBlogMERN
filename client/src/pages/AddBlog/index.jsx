import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import BlogForm from "../../components/BlogForm";

function AddBlog() {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect user to home page if not authenticated
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);  // Adding dependencies to useEffect ensures this runs correctly on update

  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-2xl font-bold text-gray-800">Add a Blog Post</h1>
      <hr />
      <BlogForm />
    </div>
  );
}

export default AddBlog;
