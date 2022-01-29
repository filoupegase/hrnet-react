import React, { useState } from 'react';
import { TextField, MenuItem, InputLabel, Select, FormControl } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { CITY_USA } from '../../utils/constants';


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
  const [cityValue, setCityValue] = useState('');
  const [selectCity, setSelectCity] = useState([]);
  const [zipCode, setZipCode] = useState('');
  const [selectDepartment, setSelectDepartment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (e, set) => {
    set(e.target.value);
  };

  const handleChangeState = (event) => {
    const { target: { value } } = event;
    setSelectCity(value);
  };

  const handleChangeDepartment = (event) => {
    setSelectDepartment(event.target.value);
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
            type="text"
            id="city"
            label="City"
            variant="outlined"
            value={ cityValue }
            onChange={
              (e) => handleChange(e, setCityValue) }
        />
        <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            value={ selectCity }
            onChange={ handleChangeState }
        >
          { CITY_USA.map((city) => (
              <MenuItem
                  key={ city.value }
                  value={ city.value }
              >
                { city.text }
              </MenuItem>
          )) }
        </Select>
        <TextField
            id="outlined-number"
            label="Zip Code"
            type="number"
            InputLabelProps={ {
              shrink: true
            } }
            value={ zipCode }
            onChange={
              (e) => handleChange(e, setZipCode) }
        />
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={ selectDepartment }
            label="Department"
            onChange={ handleChangeDepartment }
        >
          <MenuItem value="sales">Sales</MenuItem>
          <MenuItem value="engineering">Engineering</MenuItem>
          <MenuItem value="hr">Human Resources</MenuItem>
          <MenuItem value="legal">Legal</MenuItem>
        </Select>
      </form>
  );
};

export default CreateEmployeeForm;