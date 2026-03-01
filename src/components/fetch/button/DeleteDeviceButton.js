import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useRemovalDevice } from "../hooks/useRemovalDevice";
import { useNavigate } from "react-router-dom";

function DeleteDeviceButton({id}) {
    const navigate = useNavigate();
    const removeDevice = useRemovalDevice(navigate);

    return (
        <IconButton>
            <DeleteIcon onClick={() => removeDevice(id)} />
        </IconButton>
    );
}

export default DeleteDeviceButton;