import React from 'react';
import { Link, Box } from '@mui/material';
import paths from '../Router/paths';
import DataTables from 'datatables-plugin-react';


const exampleLabels = [
  { text: 'First Name', value: 'firstName' },
  { text: 'Last Name', value: 'lastName' },
  { text: 'Start Date', value: 'startDate' },
  { text: 'Department', value: 'department' },
  { text: 'Date of Birth', value: 'dateOfBirth' },
  { text: 'Street', value: 'street' },
  { text: 'City', value: 'city' },
  { text: 'State', value: 'state' },
  { text: 'Zip Code', value: 'zipCode' }
];


const exampleData = [
  {
    firstName: 'John',
    lastName: 'Doe',
    startDate: '04/14/2021',
    department: 'Marketing',
    dateOfBirth: '01/01/1990',
    street: 'Main Street',
    city: 'NY',
    state: 'AL',
    zipCode: '01800'
  },
  {
    firstName: 'Elisa',
    lastName: 'Tyrel',
    startDate: '03/02/2020',
    department: 'Marketing',
    dateOfBirth: '01/25/1988',
    street: 'Helia Street',
    city: 'San Francisco',
    state: 'AK',
    zipCode: '85699'
  }
];

const DataGridEmployee = ({ employeesList }) => {

  /*  const employeesData = employeesList.map((elt) => ({
      ...elt,
      firstname: elt.firstname,
      lastname: elt.lastname,
      department: elt.department.text,
      state: elt.state.value,
    }));
    console.log(employeesData);*/

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
          <DataTables data={ exampleData } labels={ exampleLabels } />
        </Box>
      </Box>
  );
};

export default DataGridEmployee;
