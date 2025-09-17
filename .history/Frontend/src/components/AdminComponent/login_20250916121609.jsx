import { useState } from "react";
import image from "../../assets/Screenshot 2025-08-25 at 11.13.12.png";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios"; 
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slice/userSlice";



const LoginComponent = () => {
  const [showLeft, setShowLeft] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

   const dispatch = useDispatch();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); 
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/login",
        formData,
        { withCredentials: true } 
      );
      console.log("User data ds:", res.data.user);
       dispatch(login({
        data: res.data.data,
      token}));
      toast.success(res.data.message);
      console.log("User data ds:", res);
    } catch (err) {
      console.log(err)
      setMessage(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div
        className={`${
          showLeft
            ? "hidden"
            : "w-full md:w-1/2 h-screen md:h-full bg-[#121212] flex flex-col items-center justify-center gap-10 p-4"
        }`}
      >
        <div className="flex justify-center items-center w-full">
          <img src={image} className="w-2/3 max-w-full" alt="Welcome" />
        </div>
        <div className="text-center w-[50%] sm:w-96">
          <p className="block text-2xl sm:text-5xl text-red-50 font-bold whitespace-nowrap overflow-hidden border-r-4 border-red-50 pr-2 animate-typewriter">
            Welcome Back !
          </p>
          <br />
          <p className="inline-block sm:text-2xl text-white font-bold mt-5 text-center">
            Good to see you again!
          </p>

          <button
            className="block md:hidden bg-[#121212] text-white px-4 py-2 rounded border border-white mt-16"
            onClick={() => setShowLeft(true)}
          >
            Click here to login
          </button>
        </div>

        <style>{`
          @keyframes typewriter {
            0% { width: 0 }
            50% { width: 100% }
            100% { width: 0 }
          }
          .animate-typewriter {
            width: 0;
            display: inline-block;
            animation: typewriter 6s steps(20, end) infinite;
          }
        `}</style>
      </div>

      <div
        className={`${
          showLeft ? "flex" : "hidden md:flex"
        } w-full md:w-1/2 h-full justify-center items-center`}
      >
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md flex flex-col gap-6 items-center"
        >
          <h1 className="text-3xl font-bold text-center">Login to Site</h1>

          <TextField
            label="Email"
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-2/3 md:w-2/3"
          />

          <FormControl className="w-2/3 md:w-2/3" variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          <Button
            variant="contained"
            color="primary"
            className="w-2/3 md:w-2/3"
            type="submit"
          >
            Login
          </Button>

          {/* Message */}
          {message && <p className="text-red-500 text-center">{message}</p>}

          <p className="text-center sm:text-right text-sm">
            Forgot Password?{" "}
            <a href="/forgot-password" className="text-blue-700">
              Click here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
