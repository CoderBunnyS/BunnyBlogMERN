import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import Comments from "../../components/Comments";
import CommentForm from "../../components/CommentForm";

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

  const onDelete = async () => {
    try {
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
  useEffect(() => {
    getData();
  }, []);
  console.log(loading);
  return (
    <div className="flex flex-col gap-8">
    {loading && <Loader />}
      <div className="flex justify-between items-center">
        
        <div className="flex gap-3 buttonBox">
          <button
            className="btn-outlined"
            onClick={() => {
              navigate("/");
            }}
          >
            Back
          </button>
          <button
            className="btn-contained"
            onClick={() => navigate(`/edit-blog/${id}`)}
          >
            Edit
          </button>
          <button className="btn-outlined" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
       <div className="title">
       <h1 className="text-3xl contained contained-content-center title">{blog?.title}</h1>
       </div>
      <div className="container" >
      <img src={blog?.image} className="contained object-bover rounded" />
     
      </div>
      <p className=" blogPara">{blog?.description}</p>
      <Comments />
      <CommentForm />
    </div>
  );
}

export default Blog;
