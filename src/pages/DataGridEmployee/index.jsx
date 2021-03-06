import React, { useState, useEffect } from 'react';
import { Link, Box } from '@mui/material';
import paths from '../Router/paths';
import { DataGrid } from '../../components/DataGrid';


const DataGridEmployee = () => {
  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem('employee'));
    setEmployeeList(data);
  }, []);

  return (
      <Box
          sx={ {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: 9
          } }
      >
        <Link href={ paths.ROOT } underline="always">
          Home
        </Link>
        <Box
            sx={ { m: 10 } }
        >
          {
            !employeeList
                ? <>
                  <p>There are no employees at the moment, Create it !</p>
                  <Link href={ paths.ROOT } underline="always">
                    Create Employee
                  </Link>
                </>
                : <DataGrid
                    data={ employeeList } />
          }
        </Box>
      </Box>
  );
};

export default DataGridEmployee;
