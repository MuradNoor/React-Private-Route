import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading} =  useContext(AuthContext);

    if(loading){
        return <span className="loading loading-spinner loading-xl"></span>
    }

    if(user)
    {
        return children;
    }

    return (
      <Navigate to='/login'></Navigate>
    );
};

export default PrivateRoute;