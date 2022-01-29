import React from 'react';
import { Box, Link } from '@mui/material';
import paths from '../Router/paths';
import CreateEmployeeForm from '../../components/CreateEmployeeForm';


function CreateEmployee({handleSubmit}) {
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
        <CreateEmployeeForm
            handleSubmit={handleSubmit}
        />
      </Box>
  );
}

export default CreateEmployee;
