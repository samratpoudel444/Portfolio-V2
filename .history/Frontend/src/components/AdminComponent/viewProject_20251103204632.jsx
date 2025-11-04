import samrat from "../../assets/Samrat1.png";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../../utils/axiosInstance";

const project = [
  {
    ProjectName: "ss",
    ProjectLink: "dasdsd",
    ProjectImage:  samrat ,
  },
  {
    ProjectName: "dsda",
    ProjectLink: "www.github.com/poudelsamrat444/protfoliov2",
    ProjectImage:  samrat ,
  },
  {
    ProjectName: "",
    ProjectLink: "",
    ProjectImage: samrat ,
  },
];

const ViewProjects = () => {
  const [data, setData]= useState([]);
  
  useEffect(()=>
  {
    const fetchProject= async()=>
    {
      try{
        const response= await axiosInstance.get('\getProject');
        setData9res
      }
      catch(err)
      {
        toast.error(err.response.data.message)
      }
    }
  },[])
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="h-16 w-full bg-gray-300 flex justify-start items-center shadow-md text-white text-3xl font-semibold">
        <Link to={-1}>
          <button className="border rounded-2xl p-2 text-xl text-black">
            <ArrowBackIcon /> Back
          </button>
        </Link>
        <h1 className="mx-auto">View Projects</h1>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>S.N.</TableCell>
                <TableCell>Project Name </TableCell>
                <TableCell>Project Link</TableCell>
                <TableCell>Project Image</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {project.map((row, index) => (
                <TableRow key={row.name}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{row.ProjectName}</TableCell>
                  <TableCell>{row.ProjectLink}</TableCell>
                  <TableCell>
                    {" "}
                    <img
                      src={row.ProjectImage}
                      alt="samrat Blog Image"
                      className="w-16 h-16"
                    />
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-4">
                      <button className="p-2 rounded-2xl border bg-green-500 text-white w-16 hover:bg-green-700">
                        Edit
                      </button>
                      <button className="p-2 rounded-2xl border bg-red-500 text-white w-16  hover:bg-red-700">
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

export default ViewProjects;
