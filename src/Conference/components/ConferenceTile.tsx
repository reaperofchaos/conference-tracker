import React from 'react';
import { Card, CardHeader } from '@mui/material'
import { type ConferenceTileProps } from '../types/conference.props.types';

const ConferenceTile = ({ conference }: ConferenceTileProps) => {
  return (
        <Card onClick={()=>{}}>
            <CardHeader title={conference.name} />
        </Card>
  )
}

export default ConferenceTile;
