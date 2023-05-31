import React from 'react';
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

const ConferenceOutlet = () => (
    <Box>
        <Outlet />
    </Box>
);

export default ConferenceOutlet;
