import { API_URL } from "../../../config/config";

export const useAdditionalDevice = () => {
    const addDevice = (additionalDevice) =>
        fetch(`${API_URL}/api/v1/devices`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(additionalDevice)
        });
    
    return addDevice;
}