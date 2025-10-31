import { useSelector } from "react-redux";
import samrat from "../../assets/samrat2.png";

const MyProfile= ()=>
{
    const user = useSelector((state) => state.user.data);

    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <div className="h-16 w-full bg-gray-300 flex flex-row justify-start items-center shadow-md text-white text-3xl font-semibold">
          <h1 className="mx-auto">My Profile</h1>
        </div>
        <div className="w-2/3 mx-auto mt-16 border flex flex-col justify-center ">
            <img src={samrat} alt=""  className="rounded-full w-64 border"/>
        </div>
      </div>
    );
}

export default MyProfile;