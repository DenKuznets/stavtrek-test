import React from "react";
import { Navigate } from "react-router-dom";

const mainPage = () => {
    return (
        <div>
            <Navigate to="objects" />
        </div>
    );
};

export default mainPage;
