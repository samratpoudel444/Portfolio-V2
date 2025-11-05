import ErrorIcon from "@mui/icons-material/Error";
import { useState } from "react";
import axiosInstance from "../../../utils/axiosInstance";
import { toast } from "react-toastify";

const ExperincePopUp = ({ id, onClose, setReload }) => {
  const [loading, setLoading] = useState(false);
  const handleDelete = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.delete(`/deleteBlog/${id}`);
      toast.success(response.data.message);
      setReload((prev) => !prev);
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className=" fixed border flex inset-0 backdrop-blur-sm justify-center items-center">
      <div className="flex flex-col border w-1/2 p-16 gap-16 rounded-2xl bg-gray-300">
        <p className="flex  justify-center text-xl font-bold">
          <ErrorIcon />
          Are You Sure you want to delete Blog?
        </p>
        <div className="flex gap-8 justify-center">
          <button
            className={`p-2 bg-red-500 rounded-2xl text-white hover:bg-red-600 ${
              loading ? "opacity-50" : ""
            }`}
            disabled={loading}
            onClick={async () => {
              await handleDelete();
              onClose();
            }}
          >
            {loading ? "Deleting" : "Delete"}
          </button>
          <button
            className="p-2 bg-green-500 rounded-2xl text-white hover:bg-green-600 "
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPopUp;
