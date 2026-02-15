import React from 'react';
import { Container, Toolbar } from '@mui/material';
import DeviceList from '../list/DeviceList';
import { useFetchDevices } from '../hooks/useFetchDevices';

function DeviceListPage() {

    const devices = useFetchDevices();

    return (
        <Container sx={{ py: 4 }}>
            <Toolbar />
            <DeviceList devices={devices} />
        </Container>
    );
};

export default DeviceListPage;
