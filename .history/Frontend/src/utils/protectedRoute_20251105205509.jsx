import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


const ProtectedRoute=({children})=>
{
    const navigate= useNavigate();
        const user= useSelector((state)=> state.user.data)
        if(!user)
        {
               return <Navigate to="/login" replace />;
        }
        return children
}


export default ProtectedRoute;
