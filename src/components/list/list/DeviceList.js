import React from 'react';
import { Grid } from '@mui/material';
import DeviceCard from '../card/DeviceCard';

function DeviceList({ devices }) {
    return (
        <Grid container spacing={2} justifyContent="center" alignItems= "center">
            {devices.map((device) => <DeviceCard device={device}/> )}
        </Grid>
    );
}

export  default DeviceList;