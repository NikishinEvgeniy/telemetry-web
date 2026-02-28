import React, { useState } from 'react';
import { useAdditionalDevice } from '../hooks/useAdditionalDevice';
import { Container, Typography, Paper, TextField, Button, Stack, Toolbar } from '@mui/material';

const initialState = {
    name: '',
};

const AdditionDeviceForm = () => {
  const [device, setDevice] = useState(initialState);
  const addDevice = useAdditionalDevice();

  const handleChange = (e) => {
    setDevice({...device, name: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addDevice(device);
    setDevice(initialState);
  };
	return (
	<>
		<Toolbar />
		<Container maxWidth="lg" sx={{ py: 4 }}>
			<Typography variant="h5" gutterBottom align="center">
				Добавление нового устройства
			</Typography>
            <Paper elevation={3} sx={{ p: 4 }}>
                <form onSubmit={handleSubmit}>
                    <Stack spacing={3}>
                        <TextField
                            fullWidth
                            label="Название устройства"
                            variant="outlined"
                            value={device.name}
                            onChange={handleChange}
                            required/>
                        <Button 
                            type="submit" 
                            variant="contained" 
                            size="large"
                            sx={{ mt: 2 }}>Добавить устройство</Button>
                    </Stack>
                </form>
            </Paper>
		</Container>
	</>
    );
};

export default AdditionDeviceForm;
