/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function BlogForm({ blogData }) {
  const navigate = useNavigate();
  const [blog, setBlog] = useState({
    title: "",
    description: "",
    image: "",
  });

  const onSave = async () => {
    try {
      let response;
      if (blogData) {
        response = await axios.put(`/api/blogs/${blogData._id}`, blog);
      } else {
        response = await axios.post("/api/blogs", blog);
      }
      toast.success(response.data.message);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (blogData) {
      setBlog(blogData);
    }
  }, [blogData]);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <label htmlFor="title" className="text-gray-600 text/sm">
          Title
        </label>
        <input
          type="text"
          placeholder="Title of your new blog post"
          value={blog.title}
          onChange={(e) => setBlog({ ...blog, title: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="description" className="text-gray-600 text/sm">
          Post Body
        </label>
        <textarea
          type="text"
          placeholder="Write your blog post here"
          value={blog.description}
          onChange={(e) => setBlog({ ...blog, description: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="image" className="text-gray-600 text-sm">
          Image
        </label>
        <input
          value={blog.image}
          onChange={(e) => setBlog({ ...blog, image: e.target.value })}
          type="text"
          placeholder="Enter image url"
        />
        <div className="flex justify-end gap-8">
          <button className="btn-outlined" onClick={() => navigate("/")}>
            Cancel
          </button>
          <button className="btn-contained" onClick={onSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogForm;
