import React from "react";
import "./App.css";
import { CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import MainPage from "./pages/MainPage";
import Objects from "./pages/Objects/Objects";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App() {
    return (
        <div className="App">
            <CssBaseline />
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="*" element={<ErrorPage />} />
                        <Route path="/" element={<MainPage />} />
                        <Route path="objects" element={<Objects />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
