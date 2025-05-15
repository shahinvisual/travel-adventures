import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if (loading) {
        return (
            <div className="flex justify-center items-center mt-12">
                <span className="loading loading-bars loading-xl"></span>
            </div>
        );
    }

    if (!user) {
        return <Navigate state={{ from: location.pathname }} to='/loginModal'></Navigate>
    }
    return children;
};

export default PrivateRoute;