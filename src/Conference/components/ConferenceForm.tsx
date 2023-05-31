import React, { type ChangeEvent, useState } from 'react';
import _ from 'lodash';
import { Box, Button, TextField, Typography } from '@mui/material';
import { type Conference, type LocationData } from '../types';
import { type ConferenceFormProps } from '../types/conference.props.types';
import DateSelector from '../../Core/DateSelector';

const ConferenceForm = ({ submit, cancel }: ConferenceFormProps) => {
  const [name, setName] = useState<string | undefined>(undefined);
  const [description, setDescription] = useState<string | undefined>(undefined);
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

  const clearForm = () => {
    setName(undefined);
    setDescription(undefined);
    setLocation(undefined);
    setStartData(new Date());
    setEndDate(new Date());
  }

  const handleSubmit = () => {
    if (name !== undefined) {
      const conference: Conference = {
        id: 'new',
        name,
        description,
        location,
        dateStart: startDate ?? undefined,
        dateEnd: endDate ?? undefined
      }
      submit(conference);
      clearForm();
    }
  }
  return (
        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '20px', alignItems: 'center' }}>
            <Typography variant="h3" sx={{ marginBottom: '20px' }}>Add a Conference</Typography>
            <Box sx={{ width: '55vw' }}>

            <Box sx={{ display: 'flex', flexDirection: 'row', columnGap: '10px', margin: '10px' }}>
                <Typography sx={{ width: '10vw' }}>Name</Typography>
                <TextField value={name} onChange={(e) => { setName(e.target.value); }}/>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', columnGap: '10px', margin: '10px' }}>
                <Typography sx={{ width: '10vw' }}>Description</Typography>
                <TextField value={description} onChange={(e) => { setDescription(e.target.value); }}/>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', columnGap: '10px', margin: '10px' }}>
                <Typography sx={{ width: '10vw' }}>Location</Typography>
                <TextField label="City" value={(location != null) ? location.city : ''} onChange={handleCityChange}/>
                <TextField label="State" value={(location != null) ? location.state : ''} onChange={handleStateChange}/>
                <TextField label="Country" value={(location != null) ? location.country : ''} onChange={handleCountryChange}/>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', columnGap: '10px', margin: '10px' }}>
                <Typography sx={{ width: '10vw' }}>Dates</Typography>
                <DateSelector label="Start Date" value={startDate} onChange={(newValue) => { setStartData(newValue) }} />
                <DateSelector label="End Date" value={endDate} onChange={(newValue) => { setEndDate(newValue) }} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'end', marginTop: '20px', columnGap: '20px' }}>
              <Button color="secondary" variant="contained" sx={{ paddingRight: '10px' }} onClick={() => handleSubmit()}>Cancel</Button>
              <Button color="primary" variant="contained" onClick={() => handleSubmit()}>Submit</Button>
            </Box>
                        </Box>

          </Box>
  )
}

export default ConferenceForm;
