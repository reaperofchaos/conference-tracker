import React, { useState } from 'react';
import { AuthorDropdownOption, DropdownOption, PresentationFormProps } from "../types";
import { Box, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Section } from '../types/Presentation.types';
import { DatePicker } from '@mui/x-date-pickers';

const PresentationForm = ({conferenceOptions, authorOptions, submit}: PresentationFormProps)=>{
    const [selectedConference, setSelectedConference] = useState<string>("");
    const [selectedAuthors, setSelectedAuthors] = useState<string[]>([]);
    const [title, setTitle] = useState<string | undefined>(undefined);
    const [description, setDescription] = useState<string | undefined>(undefined);
    const [date, setDate] = useState<Date | null>(new Date());
    const [notes, setNotes] = useState<Section[]>([]);


    const handleUpdateAuthor = (value: string, index: number){
        const updatedAuthors = _.cloneDeep(selectedAuthors); 
        if(selectedAuthors.length -1 < index){
            updatedAuthors.push(value);
        }else{
            updatedAuthors[index] = value;
            setSelectedAuthors(updatedAuthors)
        }
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Typography>Title</Typography>
                <TextField value={title} onChange={(e) => { setTitle(e.target.value); }}/>
            </Box>
            <Select label="conference" value={selectedConference} onChange={(e)=>setSelectedConference(e.target.value)}>
                {conferenceOptions.map((option: DropdownOption)=>(
                    <MenuItem key={option.key} value={option.value}>{option.display}</MenuItem>
                ))}
            </Select>
            <Select label="Presenter" value={selectedAuthors[0] ?? ""} onChange={(e)=>handleUpdateAuthor(e.target.value, 0)}>
                {authorOptions.map((option: AuthorDropdownOption)=>(
                    <MenuItem key={option.key} value={option.key}>{option.display}</MenuItem>
                ))}
            </Select>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Typography>Description</Typography>
                <TextField value={description} onChange={(e) => { setDescription(e.target.value); }}/>
            </Box>
             <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Typography>Notes</Typography>
                <TextField value={notes} multiline minRows={20} onChange={(e) => {  }}/>
            </Box>
              <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Typography>Dates</Typography>
                <DatePicker label="Date" value={date} onChange={(newValue) => { setDate(newValue) }} />
            </Box>
        </Box>)
}
export default PresentationForm;
