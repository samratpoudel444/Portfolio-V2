import { useSelector } from ("react-redux");
const { useNavigate } = require("react-router");


const ProtectedRoute=({children})=>
{
    const navigate= useNavigate();
        const user= useSelector((state)=> state.user.data)
        if(!user)
        {
            navigate('/login');
        }
        return children
}


export default ProtectedRoute;
