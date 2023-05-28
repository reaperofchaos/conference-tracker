import React from 'react';
import { Box, Typography } from '@mui/material'
import { type ConferenceViewProps } from '../types/conference.props.types'

const ConferenceView = ({ conference }: ConferenceViewProps) => {
  return <Box>
        <Typography>{conference.name}</Typography>
    </Box>
}

export default ConferenceView;
