import React from 'react';
import { BrowserRouter as ReactRouter, Navigate, Route, Routes } from 'react-router-dom';
import DataGridEmployee from '../pages/DataGridEmployee';
import CreateEmployee from '../pages/CreateEmployee';
import paths from './paths';


function Router() {
  return (
      <>
        <ReactRouter>
          <Routes>
            <Route path={ paths.ROOT }
                   element={ <CreateEmployee /> }
                   strict exact />
            <Route path={ paths.EMPLOYEE }
                   element={ <DataGridEmployee /> }
                   strict exact />
            <Route path={ paths.DEFAULT } element={
              <Navigate to={ paths.ROOT } /> } strict exact />
          </Routes>
        </ReactRouter>
      </>
  );
}

export default Router;
