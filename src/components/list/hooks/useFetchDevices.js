import { useState, useEffect } from 'react';
import { API_URL } from '../../../config/config';

export const useFetchDevices = () => {
    const [devices, setDevices] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/api/v1/devices`)
        .then(res => res.json())
        .then(data => setDevices(data.devices))
        .catch(err => console.error('Error:', err));
    }, []);
    return devices;
};