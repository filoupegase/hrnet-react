import React from 'react';
import { Box, TextField, Link } from '@mui/material';
import paths from '../Router/paths';


function CreateEmployee() {
  return (
      <Box
          sx={ {
            display: 'flex',
            flexDirection: 'column'
          } }
      >
        <Link href={ paths.EMPLOYEE } underline="always">
          Grid >
        </Link>
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
        <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
        />
      </Box>
  );
}

export default CreateEmployee;
