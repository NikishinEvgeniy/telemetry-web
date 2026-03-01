import { API_URL } from "../../../config/config";

export const useRemovalDevice = (navigate) => {
    const removeDevice = (id) =>
        fetch(`${API_URL}/api/v1/devices/${id}`, { method: 'DELETE' })
        .then(() => navigate("/list"));
    return removeDevice;
}