import React from 'react';
import { Container, Toolbar } from '@mui/material';
import DeviceFetchForm from '../form/DeviceFetchForm';
import { useFetchDevice } from '../hooks/useFetchDevice';
import { useParams } from 'react-router-dom';


function DeviceFetchPage() {

    const { id } = useParams();
    const device = useFetchDevice(id);

    return (
        <Container sx={{ py: 4 }}>
            <Toolbar />
            <DeviceFetchForm device={device} />
        </Container>
    );
};

export default DeviceFetchPage;