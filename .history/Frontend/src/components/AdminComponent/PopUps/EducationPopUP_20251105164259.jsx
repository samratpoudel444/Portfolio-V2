import ErrorIcon from "@mui/icons-material/Error";

const EducationPopUp = () => {
  return (
    <div className="w-full h-screen border flex justify-center items-center">
      <div className="flex flex-col border w-1/2 p-16 gap-16 ">
        <p>
          <ErrorIcon />
          Are You Sure you want to delete Record?
        </p>
        <div className="flex gap-8 justify-center">
          <button>Delete</button>
          <button>Close</button>
        </div>
      </div>
    </div>
  );
};

export default EducationPopUp;