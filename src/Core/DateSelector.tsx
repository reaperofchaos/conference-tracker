import React from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'

const DateSelector = ({ label, value, onChange }: { label: string, value: Date | null, onChange: (value: Date | null) => void }) => (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker label={label} value={value} onChange={onChange} />
    </LocalizationProvider>
)

export default DateSelector
