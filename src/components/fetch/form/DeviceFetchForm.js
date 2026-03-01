import { Card, CardContent, Typography, Box, Divider } from "@mui/material";
import DeleteDeviceButton from "../button/DeleteDeviceButton";

function DeviceFetchForm({ device }) {
    return (
        <Card 
            elevation={6}
            sx={{ 
                maxWidth: 400,
                borderRadius: 3,
                bgcolor: 'white'
            }}
        >
            <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h5" fontWeight={500} gutterBottom>
                        {device.name}
                    </Typography>
                    <DeleteDeviceButton id={device.id}/>
                </Box>

                <Divider sx={{ my: 2 }} />
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body2" color="text.secondary">
                        Уникальный идентификатор
                    </Typography>
                    <Typography 
                        variant="body2" 
                        sx={{ 
                            bgcolor: 'grey.100',
                            px: 1.5,
                            py: 0.5,
                            borderRadius: 1,
                            fontFamily: 'monospace'
                            }}>
                        {device.id}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}

export default DeviceFetchForm;