import React from 'react'
import ConferenceTile from './ConferenceTile'
import { Box } from '@mui/material'
import { type ConferenceListProps } from '../types/conference.props.types'

const ConferenceList = ({ conferences }: ConferenceListProps) => {
  const keys = Object.keys(conferences);

  return (
        <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            {keys.map((key) =>
              (<ConferenceTile key={key} conference={conferences[key]}/>)
            )}
        </Box>
  )
}

export default ConferenceList;
