import React, { useState } from 'react';
import { Container, Typography, Paper, TextField, Button, Stack, Toolbar } from '@mui/material';

const AdditionDeviceForm = () => {
  const [deviceName, setDeviceName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Имя устройства:', deviceName);
    // Отправка на бек
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
                            value={deviceName}
                            onChange={(e) => setDeviceName(e.target.value)}
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
