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


const ViewEducation = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="h-16 w-full bg-gray-300 flex justify-center items-center shadow-md text-white text-3xl font-semibold">
        <h1>View Education</h1>
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
                  <TableCell><div>
                    <button>Edit</button>
                    </div></TableCell>
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
