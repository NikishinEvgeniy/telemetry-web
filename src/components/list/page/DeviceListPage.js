import React from 'react';
import { Container, Toolbar } from '@mui/material';
import DeviceList from '../list/DeviceList';

function DeviceListPage() {

    const devices = [
        { id: 1, name: 'Бур' },
        { id: 2, name: 'Дрель' },
        { id: 3, name: 'Лампа' },
        { id: 4, name: 'Ноутбук' },
        { id: 5, name: 'Машина' },
        { id: 6, name: 'Шаха' }
    ];

    return (
        <Container sx={{ py: 4 }}>
            <Toolbar />
            <DeviceList devices={devices} />
        </Container>
    );
};

export default DeviceListPage;
