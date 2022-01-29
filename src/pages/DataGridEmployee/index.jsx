import React, { useState, useEffect } from 'react';
import { Link, Box } from '@mui/material';
import paths from '../Router/paths';
import DataTables from 'datatables-plugin-react';
import { LABEL_DATA_GRID } from '../../utils/constants';


const DataGridEmployee = () => {
  const [employeeList, setEmployeeList] = useState([]);
  console.log('employeeList', employeeList);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem('employee'));
    setEmployeeList(data);
  }, []);

  const exampleLabels = [
    { text: 'First Name', value: 'firstname' },
    { text: 'Last Name', value: 'lastname' },
    { text: 'Start Date', value: 'startDate' },
    { text: 'Department', value: 'department' },
    { text: 'Date of Birth', value: 'dateOfBirth' },
    { text: 'Street', value: 'street' },
    { text: 'City', value: 'city' },
    { text: 'State', value: 'state' },
    { text: 'Zip Code', value: 'zipCode' },
  ];

  const exampleData = [
    {
      firstName: 'John',
      lastName: 'Doe',
      startDate: '04/14/2021',
      department: 'Marketing',
      dateOfBirth: '01/01/1990',
      street: 'Main Street',
      city: 'New York',
      state: 'AL',
      zipCode: '01800',
    },
    {city: "",
      dateBirth: "1997-01-01T00:00:00.000Z",
      department: "",
      firstname: "Big test",
      lastname: "",
      startDate: "2022-01-29T17:54:09.183Z",
      stateName: "",
      street: "",
      zipCode: "",},
    {
      firstName: '',
      lastName: 'Boyer',
      startDate: '03/02/2020',
      department: 'Legal',
      dateOfBirth: '01/25/1988',
      street: 'Helia Street',
      city: 'San Francisco',
      state: 'AK',
      zipCode: '85699',
    },
  ];


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
          <DataTables data={ employeeList } labels={ exampleLabels } />
        </Box>
      </Box>
  );
};

export default DataGridEmployee;
