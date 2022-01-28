import React from 'react';
import { Link } from '@mui/material';
import paths from '../Router/paths';


const DataGridEmployee = () => {
  return (
      <>
        <Link href={ paths.ROOT } underline="always">
          Home
        </Link>
      </>
  );
};

export default DataGridEmployee;
