import { useSelector } from "react-redux";
import samrat from "../../assets/samrat2.png";
import PopUpForm from "./CvPopUp";


const MyProfile= ()=>
{
  const [isOpen]
    const user = useSelector((state) => state.user.data);

    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <div className="h-16 w-full bg-gray-300 flex flex-row justify-start items-center shadow-md text-white text-3xl font-semibold">
          <h1 className="mx-auto">My Profile</h1>
        </div>
        <div className="w-2/3 mx-auto mt-16 border flex flex-col justify-center items-center p-16 rounded-2xl bg-gray-200 gap-8">
          <img
            src={samrat}
            alt=""
            className="rounded-full w-64 p-4 bg-white shadow-sm"
          />
          <h1 className="text-xl"> {user?.firstName + " " + user?.lastName}</h1>
          <div className="sm:flex sm:flex-row flex flex-col gap-4">
            <button className="text-xl p-2 rounded-2xl bg-blue-400">
              Update CV
            </button>
            <button className="text-xl p-2 rounded-2xl bg-blue-400">
              Logout
            </button>
          </div>
        </div>
      </div>
    );
}

export default MyProfile;