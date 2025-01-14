import { Navigate, Outlet } from "react-router-dom";

const isUserLoggedIn = () => {

    return JSON.parse(sessionStorage.getItem('loggedInUser')) ? true : false;
}

const PrivateRoute = ({ children }) => {
    console.log("is logged in",  isUserLoggedIn());
    
    if (!isUserLoggedIn()) {
        return <Navigate to="/login" replace/>
    }
    return children;
}

export default PrivateRoute;
