import React from 'react'
import ProductDetail from "../Pages/ProductDetail";
import {Navigate} from "react-router-dom";

const PrivateRoute = ({authenticated}) => {
    return authenticated === true?<ProductDetail/>:<Navigate to="/login" />
}

export default PrivateRoute