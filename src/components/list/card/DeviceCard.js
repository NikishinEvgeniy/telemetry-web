import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardActionArea, Typography } from '@mui/material';

function DeviceCard({ device }) {
    return (
        <Card sx={{ 
            width: 280,             
            height: 160,            
            borderRadius: 3,
            boxShadow: 3
        }}>
            <CardActionArea sx={{ height: '100%' }} component={Link} to={`/list/${device.id}`}>
                <CardContent sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    textAlign: 'center'
                }}>
                    <Typography variant="h5">{device.name}</Typography>
                    <Typography variant="body2">Тело карточки</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default DeviceCard;
