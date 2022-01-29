import { LABEL_DATA_GRID } from '../../utils/constants';
import DataTables from 'datatables-plugin-react';
import React from 'react';


export const DataGrid = ({data}) => {
  return <DataTables labels={ LABEL_DATA_GRID } data={ data } />;
};