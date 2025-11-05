import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Samrat from "../../assets/Samrat2.png";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../../utils/axiosInstance";
import {Link} from "react-router-dom"


function TruncatedText({ text }) {
  return <p>{text.length > 80 ? text.substring(0, 80) + "..." : text}</p>;
}
function TruncatedDate({ text }) {
  return <p>{text.length > 11 ? text.substring(0, 10) + "" : text}</p>;
}


const BlogPage = () => {
   const [blogs, setBlogs] = useState([]);

   useEffect(() => {
     const getBlogs = async () => {
       try {
         const response = await axiosInstance.get("/getSpecificBlogs");
         console.log("gro", response.data.data);
         setBlogs(response.data.data);
       } catch (err) {
         toast.error(err.response?.data?.message || "Failed to fetch blogs");
       }
     };
     getBlogs();
   }, []);

  return (
    <div className="sm:p-16 p-4" id="blogs">
      <div className="sm:flex sm:flex-row flex flex-col sm:gap-8 sm:justify-between sm:items-end sm:mr-16 gap-4">
        <div className="flex  flex-col gap-8">
          <h1 className="text-2xl">
            <a className="text-yellow-500">-</a>News & Blogs
          </h1>
          <a className="text-4xl">
            Our Latest <br />
            News & Blogs
          </a>
        </div>
        <div>
          <button className="bg-green-900 py-2  rounded-4xl flex gap-2 font-bold items-center">
            <div className="bg-yellow-500 rounded-4xl p-2">
              <Link to="/blogs">View All Blogs</Link>
            </div>
            <div className="mr-1">
              <a>
                <ArrowCircleRightIcon sx={{ color: "white" }} />
              </a>
            </div>
          </button>
        </div>
      </div>
      <div className="sm:mt-16 sm:grid sm:grid-cols-3 mt-8 flex flex-col gap-8 ">
        {blogs.map((data, items) => (
          <div className="p-4 rounded-4xl flex flex-col gap-4 bg-gray-100 shadow-lg hover:shadow-2xl">
            <img src={data.AddImage} alt="" className="rounded-4xl w-full h-48" />
            <div className="flex flex-row gap-4">
              <a className=" p-2 rounded-4xl bg-yellow-500 font-bold">
                <TruncatedDate text={data.createdAt} />
              </a>
            </div>
            <div className="text-2xl font-bold">{data.blogTitle}</div>
            <div>
              <TruncatedText text={data.Description} />
            </div>
            <div>
              <Link
                to={`/blog/${data.id}`} // Link to blog details page
                className="w-full text-center bg-green-900 text-white font-bold p-2 rounded-xl hover:bg-green-800 transition"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
