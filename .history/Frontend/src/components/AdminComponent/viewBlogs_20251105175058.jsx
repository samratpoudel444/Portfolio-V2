import samrat from "../../assets/Samrat1.png";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../../utils/axiosInstance";
import BlogPopUp from "./PopUps/BlogPopup";

const ViewBlogs = () => {
  const [openPopUP, setOpenPopUP] = useState(false);

  const [blogs, setBlogs] = useState([]);

  const [id, setId] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axiosInstance.get("/getAllBlogs");
        setBlogs(response.data.data);
      } catch (err) {
        toast.error(err.response.data.message);
      }
    };
    fetchBlogs();
  }, [blogs]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {openPopUP && <BlogPopUp onClose={() => setOpenPopUP(true)} />}
      <div className="h-16 w-full bg-gray-300 flex flex-row justify-start items-center shadow-md text-white text-3xl font-semibold">
        <Link to={-1}>
          <button className="border rounded-2xl p-2 text-xl text-black">
            <ArrowBackIcon /> Back
          </button>
        </Link>
        <h1 className="mx-auto">View Blogs</h1>
      </div>

      <div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>S.N.</TableCell>
                <TableCell>Blog Title</TableCell>
                <TableCell>Description </TableCell>
                <TableCell>Content</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {blogs.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{row.blogTitle}</TableCell>
                  <TableCell>{row.Description}</TableCell>
                  <TableCell>{row.Content}</TableCell>
                  <TableCell>
                    <img
                      src={row.AddImage}
                      alt="samrat Blog Image"
                      className="w-16 h-16"
                    />
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-4">
                      <button
                        className="p-2 rounded-2xl border bg-red-500 text-white w-16  hover:bg-red-700"
                        onClick={()=>{setOpenPopUP();
                          
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default ViewBlogs;
