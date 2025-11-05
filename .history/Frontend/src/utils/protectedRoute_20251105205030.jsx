const { useSelector } = require("react-redux");


const ProtectedRoute=({children})=>
{
        const user= useSelector((state)=> state.user.data)
        if()
}
