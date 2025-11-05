import ErrorIcon from "@mui/icons-material/Error";

const EducationPopUp = () => {
  return (
    <div className="w-full h-screen border justify-center">
      <div className="flex flex-col  justify-center  ">
        <p>
          <ErrorIcon />
          Are You Sure you want to delete Record?
        </p>
        <div>
          <button>Delete</button>
          <button>Close</button>
        </div>
      </div>
    </div>
  );
};

export default EducationPopUp;