import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children, adminRoute = false }) => {
    const token = sessionStorage.getItem('token');
    const role = sessionStorage.getItem('role');

    const user = !!token;
    const isAdmin = role === 'admin';

    useEffect(() => {
        // You can perform additional logic here if needed
    }, [token, role]);

    if (!user) {
        return <Navigate to="/login" />;
    }

    if (adminRoute && !isAdmin) {
        return <Navigate to="/not-authorized" />; // Redirect to a not authorized page or any other page
    }

    return children;
};

export default ProtectedRoutes;
