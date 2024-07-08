import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const ReqAuth = ({children}) =>{
    const auth = useAuth()

    if(!auth.user){
        return <Navigate to='/login'/>
    }
    return children

}