import React, { type ChangeEvent, useState } from 'react';
import _ from 'lodash';
import { Box, Button, TextField, Typography } from '@mui/material';
import { type Conference, type LocationData } from '../types';
import { DatePicker } from '@mui/x-date-pickers';
import { type ConferenceFormProps } from '../types/conference.props.types';

const ConferenceForm = ({ submit }: ConferenceFormProps) => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [location, setLocation] = useState<LocationData | undefined>(undefined)
  const [startDate, setStartData] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  const handleCityChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const updatedLocation = (location != null) ? _.cloneDeep(location) : {};
    updatedLocation.city = e.target.value;
    setLocation(updatedLocation);
  }

  const handleStateChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const updatedLocation = (location != null) ? _.cloneDeep(location) : {};
    updatedLocation.state = e.target.value;
    setLocation(updatedLocation);
  }

  const handleCountryChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const updatedLocation = (location != null) ? _.cloneDeep(location) : {};
    updatedLocation.country = e.target.value;
    setLocation(updatedLocation);
  }

  const handleSubmit = () => {
    if (name !== '') {
      const conference: Conference = {
        name,
        description,
        location,
        dateStart: startDate ?? undefined,
        dateEnd: endDate ?? undefined
      }
      submit(conference);
    }
  }
  return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h3">Add a Conference</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Typography>Name</Typography>
                <TextField value={name} onChange={(e) => { setName(e.target.value); }}/>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Typography>Description</Typography>
                <TextField value={description} onChange={(e) => { setDescription(e.target.value); }}/>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Typography>Location</Typography>
                <TextField label="City" value={(location != null) ? location.city : ''} onChange={handleCityChange}/>
                <TextField label="State" value={(location != null) ? location.state : ''} onChange={handleStateChange}/>
                <TextField label="Country" value={(location != null) ? location.country : ''} onChange={handleCountryChange}/>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Typography>Dates</Typography>
                <DatePicker label="Start Date" value={startDate} onChange={(newValue) => { setStartData(newValue) }} />
                <DatePicker label="End Date" value={endDate} onChange={(newValue) => { setEndDate(newValue) }} />
            </Box>
            <Button onClick={() => handleSubmit()}>Submit</Button>
        </Box>
  )
}

export default ConferenceForm;