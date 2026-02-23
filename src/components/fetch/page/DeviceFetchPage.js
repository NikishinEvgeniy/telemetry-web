import React from 'react';
import { Container, Toolbar } from '@mui/material';
import DeviceFetchForm from '../form/DeviceFetchForm';


function DeviceFetchPage() {
    return (
        <Container sx={{ py: 4 }}>
            <Toolbar />
            <DeviceFetchForm device={{ id: '123', name: 'Test Device' }} />
        </Container>
    );
};

export default DeviceFetchPage;