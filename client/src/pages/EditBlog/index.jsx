import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import BlogForm from "../../components/BlogForm";
import Loader from "../../components/Loader";

// Functional component for editing an existing blog post
function EditBlog() {
  const [blog, setBlog] = useState(); // State for holding blog data
  const [loading, setLoading] = useState(false); // State to manage loading indicator
  const { id } = useParams(); // Hook to get blog ID from URL parameters

  // Function to fetch blog data from the server
  const getData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/blogs/${id}`);
      setBlog(response.data.data); // Set the blog data from server in the state
    } catch (error) {
      toast.error(error.mesage); // Display error message if request fails
    } finally {
      setLoading(false); //Ensure loading state is false after fetch operation
    }
  };

  // Fetch blog data when the component mounts
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col gap-10">
      {loading && <Loader />} 
      <h1 className="text-2xl font-bold text-gray-800">Edit Blog Post</h1>
      <hr />
      <BlogForm blogData={blog} />
    </div>
  );
}

export default EditBlog;
