import ErrorIcon from "@mui/icons-material/Error";
import e from "express";

const EducationPopUp = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex flex-col">
        <p>
          <ErrorIcon />
          Are You Sure you want to delete Record?
        </p>
        <div>
            <button>
                Delete 
            </button>
            <button>
                Close
            </button>
        </div>
      </div>
    </div>
  );
};

export default EducationPopUp