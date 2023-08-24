import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Blog() {
  const [blog, setBlog] = useState();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const getData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/blogs/${id}`);
      setBlog(response.data.data);
    } catch (error) {
      toast.error(error.mesage);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(loading);
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl title">{blog?.title}</h1>
        <div className="flex gap-3">
          <button className="btn-outlined"
          onClick={() => {
            navigate("/");
          }}
          >Back</button>
          <button className="btn-contained">Edit</button>
          <button className="btn-outlined">Delete</button>
        </div>
      </div>
      <img src={blog?.image} alt="" className="object-bover rounded" />
      <p>{blog?.description}</p>
    </div>
  );
}

export default Blog;
