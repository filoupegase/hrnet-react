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

const CreateEmployeeForm = ({ handleSubmit }) => {
  const classes = useStyle();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(new Date('1997-01-01'));
  const [startDate, setStartDate] = useState(new Date());
  const [streetValue, setStreetValue] = useState('');
  const [cityValue, setCityValue] = useState('');
  const [selectCity, setSelectCity] = useState([]);
  const [zipCode, setZipCode] = useState('');
  const [selectDepartment, setSelectDepartment] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const onOpenModal = () => setOpenModal(true);
  const onCloseModal = () => setOpenModal(false);

  const handleSubmitForm = (event) => {
    event.preventDefault();
    handleSubmit({
      firstName,
      lastName,
      dateOfBirth: convertDate(dateOfBirth),
      startDate: convertDate(startDate),
      streetValue,
      selectCity,
      zipCode,
      selectDepartment
    });
    onOpenModal();
  };

  const convertDate = (date) => {
    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate() + 1;
    const year = date.getUTCFullYear();
    return `${ year }-${ month }-${ day }`;
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
            onSubmit={ handleSubmitForm }
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
                onChange={ (date) => handleChangeDate(date, setDateOfBirth) }
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
          <Button
              type="submit"
              variant="contained"
              disableElevation
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