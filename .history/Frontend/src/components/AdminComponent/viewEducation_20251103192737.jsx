const Education = [
  {
    "EducationInstitute": "hello",
    "Educationyear": "2020-2020",
    "EducationFaculty": "school",
  },
  {
    "EducationInstitute": "hello",
    "Educationyear": "2020-2020",
    "EducationFaculty": "school",
  },
  {
    "EducationInstitute": "hello",
    "Educationyear": "2020-2020",
    "EducationFaculty": "school",
  },
];
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState } from "react";


const ViewEducation = () => {

  const [data, setData]=useState([]);
  const [loading, setLoading]= useState();
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
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
              {Education.map((row, index) => (
                <TableRow key={row.name}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{row.EducationInstitute}</TableCell>
                  <TableCell>{row.Educationyear}</TableCell>
                  <TableCell>{row.EducationFaculty}</TableCell>
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

export default ViewEducation;
