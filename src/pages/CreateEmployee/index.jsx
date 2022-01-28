import React from 'react';
import { Box, Link } from '@mui/material';
import paths from '../Router/paths';
import CreateEmployeeForm from '../../components/CreateEmployeeForm';


function CreateEmployee() {
  return (
      <Box
          sx={ {
            display: 'flex',
            flexDirection: 'column'
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
