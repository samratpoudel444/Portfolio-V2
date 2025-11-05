import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../../utils/axiosInstance";
import EducationPopUp from "./PopUps/EducationPopUP";



const ViewEducation = () => {

  const [data, setData]=useState([]);
  const [loading, setLoading]= useState(false);
  const [error, setError]= useState(false);

  const [openPopUP, setOpenPopUP] = useState(false);

  useEffect(()=>
  {
    const fetchData= async()=>
    {
      setLoading(true);
      try{
        const response= await axiosInstance.get("/getEducation");
        console.log(response.data.data)
        setData(response.data.data);
      }
      catch(err)
      {
        toast.error(err.response.data.message);
      }
      finally{
        setLoading(false);
      }

    }
    fetchData();
},[])

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div>{openPopUP && <EducationPopUp  onClose{()=> set}/>}</div>
      <div className="h-16 w-full bg-gray-300 flex justify-start items-center shadow-md text-white text-3xl font-semibold">
        <Link to={-1}>
          <button className="border rounded-2xl p-2 text-xl text-black">
            <ArrowBackIcon /> Back
          </button>
        </Link>
        <h1 className="mx-auto">View Education</h1>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>S.N.</TableCell>
                <TableCell>Education Institute</TableCell>
                <TableCell>Education Year</TableCell>
                <TableCell>Education Faculty</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{row.EducationInstitute}</TableCell>
                  <TableCell>{row.EducationYear}</TableCell>
                  <TableCell>{row.EducationFaculty}</TableCell>
                  <TableCell>
                    <div className="flex gap-4">
                      <button className="p-2 rounded-2xl border bg-red-500 text-white w-16  hover:bg-red-700"
                      onClick={()=> setOpenPopUP(true)}>
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

export default ViewEducation;
