import { useDispatch } from "react-redux";
import { logout as logoutAction } from "../redux/slice/userSlice";
import { toast } from "react-toastify";
import axiosInstance from "./axiosInstance";
import { useNavigate } from "react-router";

const useLogout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = async () => {
    try {
      const response = await axiosInstance.delete("/logout");
      toast.success(response.data.message);
      dispatch(logoutAction());
      navigate("/login");
    } catch (err) {
      toast.error(err?.response?.data?.message || "Logout failed");
    }
  };

  return logout;
};

export default useLogout;
