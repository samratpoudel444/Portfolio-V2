import ErrorIcon from "@mui/icons-material/Error";

constEducationPopUp = () => {
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
                Cancel
            </button>
        </div>
      </div>
    </div>
  );
};
