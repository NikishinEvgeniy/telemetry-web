import { useEffect, useState } from "react"
import { API_URL } from "../../../config/config";

export const useFetchDevice = (id) => {
    const [device, setDevice] = useState({});

    useEffect(() => {
        fetch(`${API_URL}/api/v1/devices/${id}`)
        .then(res => res.json())
        .then(data => setDevice(data))
        .catch(err => console.error('Error: ', err));
    }, []);
    return device
}