import React from "react";
import MyAppBar from "../AppBar/MyAppBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <MyAppBar />
            <Outlet />
        </div>
    );
};

export default Layout;
