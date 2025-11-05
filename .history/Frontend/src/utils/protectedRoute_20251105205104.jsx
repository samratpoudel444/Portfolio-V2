const { useSelector } = require("react-redux");
const { useNavigate } = require("react-router");


const ProtectedRoute=({children})=>
{
    const navigate= useNavigate();
        const user= useSelector((state)=> state.user.data)
        if(!user)
        {
            return
        }
        return children
}
