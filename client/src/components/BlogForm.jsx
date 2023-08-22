import { useState } from "react";
import axios from "axios";
import {toast} from "react-hot-toast";

function BlogForm() {
  const [blog, setBlog] = useState({
    title: "",
    description: "",
    image: "",
  });

  const onSave = async() => {
    try {
      const response = await axios.post("/api/blogs", blog);
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };
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
          Title
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
          <button className="btn-outlined">Cancel</button>
          <button className="btn-contained" onClick={onSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogForm;
