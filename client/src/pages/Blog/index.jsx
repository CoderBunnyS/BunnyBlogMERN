import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Loader from "../../components/Loader";
import { useAuth } from "../../context/AuthContext"; 
import UserGreeting from "../../components/UserGreeting";

// Functional component to display a specific blog post
function Blog() {
  const [blog, setBlog] = useState(); // State to hold blog data
  const [loading, setLoading] = useState(false); // State to manage loading indicator
  const { id } = useParams(); // Hook to get URL parameters
  const navigate = useNavigate(); // Hook to programmatically navigate
  const { isAdmin } = useAuth(); // Hook to access auth context

  // Function to fetch blog data from the server
  const getData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/blogs/${id}`);
      setBlog(response.data.data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Function to handle deletion of a blog post
  const onDelete = async () => {
    try {
      const confirmDelete = window.confirm("Are you sure you want to delete?");
      if (!confirmDelete) {
        return;
      }
      setLoading(true);
      const response = await axios.delete(`/api/blogs/${id}`);
      toast.success(response.data.message);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch blog data when the component mounts or the id changes
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col gap-8">
      {loading && <Loader />}
      <div className="flex justify-between items-center">
        <button className="btn-outlined" onClick={() => navigate("/")}>
          Back
        </button>
      </div>
      <div id="blogPageGreeting"><UserGreeting /></div>
      <div className="title">
        <h1 className="text-3xl contained contained-content-center title">{blog?.title}</h1>
      </div>
      <div className="container">
        <img src={blog?.image} className="contained object-cover rounded" alt="Blog Post" />
      </div>
      <p className="blogPara">{blog?.description}</p>
      {isAdmin && (
        <div className="flex gap-3 buttonBox">
          <button className="btn-contained" onClick={() => navigate(`/edit-blog/${id}`)}>
            Edit
          </button>
          <button className="btn-outlined" onClick={onDelete}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default Blog;
