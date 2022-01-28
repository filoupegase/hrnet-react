import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyle = makeStyles(() => ({
  form: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

const CreateEmployeeForm = () => {
  const classes = useStyle();
  const [firstName, setFirstName] = useState('');
  console.log(firstName);

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
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
        />
        <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
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