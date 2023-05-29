import React from 'react';
import { Box, Typography } from '@mui/material'
import { type ConferenceViewProps } from '../types/conference.props.types'

const ConferenceView = ({ conference }: ConferenceViewProps) => {
  return <Box sx={{display: 'flex', flexDirection: 'column'}}>
        <Typography>{conference.name}</Typography>
          <Typography>{conference.dateStart?.toDateString()} - {conference.dateEnd?.toDateString()}</Typography>
          <Typography>Description</Typography>
          <Typography>{conference.description}</Typography>
    </Box>
}

export default ConferenceView;
