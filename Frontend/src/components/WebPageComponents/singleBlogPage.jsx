import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../../utils/axiosInstance";


const SingleBlogPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axiosInstance.get(`/getBlogsById/${id}`);
        const [data] = response.data.data;
        setBlog(data);
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
        <img src={blog.AddImage} alt={blog.blogTitle} className="rounded-2xl mb-4" />
        <div className="flex flex-row gap-4 mb-4">
    
          <span className="p-2 rounded-2xl bg-yellow-500 font-bold">
            {blog.createdAt}
          </span>
        </div>
        <h1 className="text-3xl font-bold mb-4">{blog.blogTitle}</h1>
        <p className="text-lg">{blog.Content}</p>
      </div>
    </div>
  );
};

export default SingleBlogPage;
