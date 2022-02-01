import React from 'react';
import { LABEL_DATA_GRID } from '../../utils/constants';
import DataTables from 'datatables-plugin-react';


export const DataGrid = ({ data }) => {
  return data.length > 0 && <DataTables labels={ LABEL_DATA_GRID } data={ data } />;
};