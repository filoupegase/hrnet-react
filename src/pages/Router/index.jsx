import React from 'react';
import { BrowserRouter as ReactRouter, Navigate, Route, Routes } from 'react-router-dom';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import DataGridEmployee from '../DataGridEmployee';
import CreateEmployee from '../CreateEmployee';
import paths from './paths';


const useStyle = makeStyles((theme) => ({
  container: {
    backgroundColor: '#f4f7ea'
  }
}));

function Router() {
  const classes = useStyle();
  return (
      <>
        <ReactRouter>
          <Container
              className={ classes.container }
              fixed
          >
            <Routes>
              <Route path={ paths.ROOT }
                     element={ <CreateEmployee /> }
                     strict exact />
              <Route path={ paths.EMPLOYEE }
                     element={ <DataGridEmployee /> }
                     strict exact />
              <Route path={ paths.DEFAULT } element={
                <Navigate to={ paths.ROOT } /> }
                     strict exact />
            </Routes>
          </Container>
        </ReactRouter>
      </>
  );
}

export default Router;
