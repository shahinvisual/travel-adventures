import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import LoginModal from "../components/LoginModal";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        <span className="loading loading-bars loading-xl"></span>
    }
    if (!user) {
        return <LoginModal />;
    }
    return children;
};

export default PrivateRoute;