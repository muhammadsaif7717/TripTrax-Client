import { useContext } from "react";

import PropTypes from 'prop-types'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from "../Contexts/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className="flex items-center justify-center h-[50vh]">
                <span className="loading loading-dots loading-lg"></span>
            </div>
        );
    }

    if (user) {
        return children;
    }

    return <Navigate state={ location.pathname} to='/sign-in' />;
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
};

export default PrivateRoute;
