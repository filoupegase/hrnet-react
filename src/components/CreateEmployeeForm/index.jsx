import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';


const useStyle = makeStyles(() => ({
  form: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

const CreateEmployeeForm = () => {
  const classes = useStyle();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [streetValue, setStreetValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (e, set) => {
    set(e.target.value);
  };

  return (
      <form
          onSubmit={ handleSubmit }
          className={ classes.form }
      >
        <TextField
            type="text"
            id="firstname"
            label="FirstName"
            variant="outlined"
            value={ firstName }
            onChange={
              (e) => handleChange(e, setFirstName) }
        />
        <TextField
            type="text"
            id="lastName"
            label="LastName"
            variant="outlined"
            value={ lastName }
            onChange={
              (e) => handleChange(e, setLastName) }
        />
        <LocalizationProvider dateAdapter={ AdapterDateFns }>
          <DatePicker
              label="Date of Birth"
              value={ dateOfBirth }
              onChange={ (newValue) => {
                setDateOfBirth(newValue);
              } }
              renderInput={ (params) => <TextField { ...params } /> }
          />
        </LocalizationProvider>

        <LocalizationProvider dateAdapter={ AdapterDateFns }>
          <DatePicker
              label="Start Date"
              value={ startDate }
              onChange={ (newValue) => {
                setStartDate(newValue);
              } }
              renderInput={ (params) => <TextField { ...params } /> }
          />
        </LocalizationProvider>
        <TextField
            type="text"
            id="street"
            label="Street"
            variant="outlined"
            value={ streetValue }
            onChange={
              (e) => handleChange(e, setStreetValue) }
        />
        <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
        />
      </form>
  );
};

export default CreateEmployeeForm;