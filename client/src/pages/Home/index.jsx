import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Loader from '../../components/Loader';
import UserGreeting from "../../components/UserGreeting";
import { useAuth } from '../../context/AuthContext'; // Ensure this import path is correct
import { Link } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [blogs, setBlogs] = useState([]);
    const { isAdmin } = useAuth(); // Get isAdmin from context

    const getData = async () => {
        try {
            setLoading(true);
            const response = await axios.get("/api/blogs");
            setBlogs(response.data.data);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            {loading && <Loader />}
            <div className="flex justify-between items-center">
                {isAdmin && // Use isAdmin to conditionally render the link
                    <Link to="/add-blog" className="btn-contained">
                        Write a Blog Post
                    </Link>
                }
                <UserGreeting />
            </div>
            <div className="grid grid-cols-4 gap-5 mt-5">
                {blogs.map((blog) => (
                    <div
                        key={blog._id}
                        className="cursor-pointer border p-3 rounded border-gray-300"
                        onClick={() => navigate(`blog/${blog._id}`)}
                    >
                        <img
                            src={blog.image}
                            alt=""
                            className="h-64 w-full object-cover rounded"
                        />
                        <h1 className="text-2xl text-gray-700 mt-3">{blog.title}</h1>
                        <h2 className="text-l text-gray-700 mt-3">{new Date(blog.createdAt).toLocaleDateString("en-US")}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
