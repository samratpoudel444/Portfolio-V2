import  samrat from "../../assets/Samrat1.png";

const blogs = [
  {
    BlogTitle: "",
    Description: "",
    Content: "",
    AddImage: { samrat },
  },
  {
    BlogTitle: "",
    Description: "",
    Content: "",
    AddImage: { samrat },
  },
  {
    BlogTitle: "",
    Description: "",
    Content: "",
    AddImage: { samrat },
  },
];

const ViewBlogs= ()=>
{
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <div className="h-16 w-full bg-gray-300 flex justify-center items-center shadow-md text-white text-3xl font-semibold">
          <h1>View Blogs</h1>
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
                    <TableCell>{row.BlogTitle}</TableCell>
                    <TableCell>{row.Description}</TableCell>
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
}

export default ViewBlogs;