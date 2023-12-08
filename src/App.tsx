import React from "react";
import "./App.css";
import { CssBaseline } from "@mui/material";
import MyAppBar from "./components/AppBar/MyAppBar";

function App() {
    return (
        <div className="App">
            <CssBaseline />
            <MyAppBar />
        </div>
    );
}

export default App;
