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
import SkillsPopUp from "./PopUps/SkillsPopUps";




const ViewSkills= ()=>
{
  const [openPopUP,setOpenPopUP]= useState(false);
  const []
  const [skills, setSkills]= useState([]);
  useEffect(()=>
  {
    const fetchSkill= async()=>
    {
      try{
        const response= await axiosInstance.get("/getSkills");
        setSkills(response.data.data);
        console.log("daa",response.data.data);
      }
      catch(err)
      {
        toast.error(err.response.data.message)
      }
    }
    fetchSkill()
  },[])
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <div className="h-16 w-full bg-gray-300 flex justify-start items-center shadow-md text-white text-3xl font-semibold">
          <Link to={-1}>
            <button className="border rounded-2xl p-2 text-xl text-black">
              <ArrowBackIcon /> Back
            </button>
          </Link>
          <h1 className="mx-auto">View Skills</h1>
        </div>
        <div>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>S.N.</TableCell>
                  <TableCell>Skill Name </TableCell>
                  <TableCell> Skill Image</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {skills.map((row, index) => (
                  <TableRow key={row.name}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{row.skillName}</TableCell>
                    <TableCell>
                      {" "}
                      <img
                        src={row.skillImage}
                        alt="samrat Blog Image"
                        className="w-16 h-16"
                      />
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-4">
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
}

export default ViewSkills;