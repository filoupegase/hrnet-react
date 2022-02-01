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
  console.log(employeeList);

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
          { employeeList.length > 0 ? <DataGrid
                  data={ employeeList } />
              : <p>salut</p>
          }
        </Box>
      </Box>
  );
};

export default DataGridEmployee;
