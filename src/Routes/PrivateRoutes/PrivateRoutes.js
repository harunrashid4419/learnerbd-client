import React, { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";

const PrivateRoutes = ({ children }) => {
   const { user, loading } = useContext(AuthContext);
   const location = useLocation();
   if(loading){
      return <Spinner className="mx-auto" animation="border" variant="primary" />
   }
   if (user) {
      return children;
   }
   return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivateRoutes;
