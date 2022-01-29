import React, { useState } from 'react';
import { TextField, MenuItem, Select, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { CITY_USA } from '../../utils/constants';
import { AlertDialog } from 'filou-dialog-modal';


const useStyle = makeStyles(() => ({
  form: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

const CreateEmployeeForm = () => {
  const classes = useStyle();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [dateBirth, setDateBirth] = useState(new Date('1997-01-01'));
  const [startDate, setStartDate] = useState(new Date());
  const [street, setStreet] = useState('');
  const [stateName, setStateName] = useState('');
  console.log('stateName', stateName);
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [department, setDepartment] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const onOpenModal = () => setOpenModal(true);
  const onCloseModal = () => setOpenModal(false);

  let infoLocalStorage = JSON.parse(localStorage.getItem('employee')) || [];

  const convertDate = (date) => {
    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate() + 1;
    const year = date.getUTCFullYear();
    return `${ year }-${ month }-${ day }`;
  };

  const infoEmployee = {
    firstname,
    lastname,
    startDate: convertDate(startDate),
    department,
    dateBirth: convertDate(dateBirth),
    street,
    city,
    stateName,
    zipCode
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    infoLocalStorage.push(infoEmployee);

    const infosEmployeeStorage = JSON.stringify(infoLocalStorage);
    localStorage.setItem('employee', infosEmployeeStorage);

    onOpenModal();
  };

  const handleChange = (e, set) => {
    set(e.target.value);
  };

  const handleChangeDepartment = (event) => {
    setDepartment(event.target.value);
  };

  const handleChangeDate = (date, setter) => {
    const month = date.getUTCMonth();
    const day = date.getUTCDate() + 1;
    const year = date.getUTCFullYear();
    const formattedDate = new Date(year, month, day);
    setter(formattedDate);
  };


  return (
      <>
        <form
            className={ classes.form }
        >
          <TextField
              type="text"
              id="firstname"
              label="FirstName"
              variant="outlined"
              value={ firstname }
              onChange={
                (e) => handleChange(e, setFirstname) }
          />
          <TextField
              type="text"
              id="lastName"
              label="LastName"
              variant="outlined"
              value={ lastname }
              onChange={
                (e) => handleChange(e, setLastname) }
          />
          <LocalizationProvider dateAdapter={ AdapterDateFns }>
            <DatePicker
                label="Date of Birth"
                value={ dateBirth }
                onChange={ (date) => handleChangeDate(date, setDateBirth) }
                renderInput={ (params) => <TextField { ...params } /> }
            />
          </LocalizationProvider>

          <LocalizationProvider dateAdapter={ AdapterDateFns }>
            <DatePicker
                label="Start Date"
                value={ startDate }
                onChange={ (date) => handleChangeDate(date, setStartDate) }
                renderInput={ (params) => <TextField { ...params } /> }
            />
          </LocalizationProvider>
          <TextField
              type="text"
              id="street"
              label="Street"
              variant="outlined"
              value={ street }
              onChange={
                (e) => handleChange(e, setStreet) }
          />
          <TextField
              type="text"
              id="city"
              label="City"
              variant="outlined"
              value={ city }
              onChange={
                (e) => handleChange(e, setCity) }
          />
          <select aria-required="true" name="state" id="state" onChange={ (e) => setStateName(e.target.value) } required
                  value={ stateName }>
            { CITY_USA.map(state => {
              return (<option key={ state.name } value={ state.name }>{ state.name }</option>);
            }) }
          </select>
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
              value={ department }
              label="Department"
              onChange={ handleChangeDepartment }
          >
            <MenuItem value="sales">Sales</MenuItem>
            <MenuItem value="engineering">Engineering</MenuItem>
            <MenuItem value="hr">Human Resources</MenuItem>
            <MenuItem value="legal">Legal</MenuItem>
          </Select>
          <Button
              type="submit"
              variant="contained"
              disableElevation
              onClick={ (e) => handleSubmit(e) }
          >
            Save
          </Button>
        </form>
        <AlertDialog
            title="Good Job"
            description="Employee successfully created !"
            btnCloseContent="close"
            open={ openModal }
            onCancel={ onCloseModal }
        />
      </>
  );
};

export default CreateEmployeeForm;