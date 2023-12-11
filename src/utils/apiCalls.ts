import axios from "axios";

export async function getDevices() {
    try {
        const response = await axios.request({
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`,
            },
            method: "GET",
            url: "https://gps.autotracker.group/api/devices",
        });
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}
