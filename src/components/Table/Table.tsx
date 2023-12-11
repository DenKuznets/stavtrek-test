import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useState } from "react";
import jsonData from "../../utils/devices.json";

interface DeviceType {
    [id: number]: JSONValue;
    name: string;
    uniqueId: string;
    status: string;
    lastUpdate: string;
}

type JSONValue =
    | string
    | number
    | boolean
    | { [x: string]: JSONValue }
    | Array<JSONValue>;

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 130 },
    { field: "uniqueId", headerName: "Unique ID", width: 230, type: "number" },
    {
        field: "status",
        headerName: "Status",
        width: 90,
    },
    {
        field: "lastUpdate",
        headerName: "Last Update",
        // description: "This column has a value getter and is not sortable.",
        // sortable: false,
        width: 230,
        // valueGetter: (params: GridValueGetterParams) =>
        //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
];

export default function DataTable() {
    const [rows, setRows] = useState<null | DeviceType[]>();

    useEffect(() => {
        // getDevices();
        // console.log(jsonData);
        setRows(
            jsonData.map((item) => {
                return {
                    id: item.id,
                    name: item.name,
                    uniqueId: item.uniqueId,
                    status: item.status,
                    lastUpdate: item.lastUpdate,
                };
            })
        );
        return () => {};
    }, []);

    return (
        <div style={{ height: 400, width: "100%" }}>
            {rows && (
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            )}
        </div>
    );
}
