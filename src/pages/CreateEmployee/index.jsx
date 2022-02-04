import React from 'react';
import { Box, Link } from '@mui/material';
import paths from '../Router/paths';
import CreateEmployeeForm from '../../components/CreateEmployeeForm';


function CreateEmployee() {
  return (
      <Box
          sx={ {
            mt: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          } }
      >
        <Link href={ paths.EMPLOYEE } underline="always">
          Current Employee >
        </Link>
        <CreateEmployeeForm />
      </Box>
  );
}

export default CreateEmployee;
