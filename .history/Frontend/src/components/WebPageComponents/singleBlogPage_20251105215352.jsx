import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../../utils/axiosInstance";
import Samrat from "../../assets/Samrat2.png";

const SingleBlogPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axiosInstance.get(`/getBlogsById/${id}`);
        setBlog(response.data.data);
      } catch (err) {
        toast.error(err.response?.data?.message || "Failed to fetch blog");
        navigate("/blogs");
      }
    };
    fetchBlog();
  }, [id, navigate]);

  if (!blog) return <div className="p-16 text-center">Loading...</div>;

  return (
    <div className="sm:p-16 p-4">

      <div className="p-6 rounded-2xl bg-gray-100 shadow-lg">
        <img src={Samrat} alt={blog.Title} className="rounded-2xl mb-4" />
        <div className="flex flex-row gap-4 mb-4">
          <span className="p-2 rounded-2xl bg-yellow-500 font-bold">
            {blog.Genre}
          </span>
          <span className="p-2 rounded-2xl bg-yellow-500 font-bold">
            {blog.Date}
          </span>
        </div>
        <h1 className="text-3xl font-bold mb-4">{blog.Title}</h1>
        <p className="text-lg">{blog.Content}</p>
      </div>
    </div>
  );
};

export default SingleBlogPage;
