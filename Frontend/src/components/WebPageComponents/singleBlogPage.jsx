import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../../utils/axiosInstance";
import { Helmet } from "react-helmet"; 

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
    <>
      {/* Dynamic meta tags for SEO */}
      <Helmet>
        <title>{blog.blogTitle} | Samrat Poudel Blog</title>
        <meta name="description" content={blog.Content.slice(0, 160)} />
        <meta property="og:title" content={blog.blogTitle} />
        <meta property="og:description" content={blog.Content.slice(0, 160)} />
        <meta property="og:image" content={blog.AddImage} />
        <meta property="og:type" content="article" />
      </Helmet>

      <article className="sm:p-16 p-4">
        <div className="p-6 rounded-2xl bg-gray-100 shadow-lg">
          <img
            src={blog.AddImage}
            alt={blog.blogTitle}
            className="rounded-2xl mb-4"
          />

          <div className="flex flex-row gap-4 mb-4">
            <time className="p-2 rounded-2xl bg-yellow-500 font-bold">
              {new Date(blog.createdAt).toLocaleDateString()}
            </time>
          </div>

          <h1 className="text-3xl font-bold mb-4">{blog.blogTitle}</h1>
          <p className="text-lg">{blog.Content}</p>

          {/* JSON-LD Structured Data for SEO */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: blog.blogTitle,
              image: blog.AddImage,
              author: {
                "@type": "Person",
                name: "Samrat Poudel",
              },
              datePublished: blog.createdAt,
              description: blog.Content.slice(0, 160),
              url: window.location.href,
            })}
          </script>
        </div>
      </article>
    </>
  );
};

export default SingleBlogPage;
