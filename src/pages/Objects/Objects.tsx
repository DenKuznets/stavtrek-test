import React, { useState } from "react";
import SearchAppBar from "../../components/AppBar/SearchBar";
import DataTable from "../../components/Table/Table";

const Objects = () => {
    const [filter, setFilter] = useState("");
    return (
        <div>
            <SearchAppBar setFilter={setFilter} />
            <DataTable filter={filter} />
        </div>
    );
};

export default Objects;
