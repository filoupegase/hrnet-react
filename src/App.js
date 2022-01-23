import React from 'react';
import { BrowserRouter as ReactRouter, Navigate, Route, Routes } from 'react-router-dom';
import DataGridEmployee from '../src/pages/DataGridEmployee';
import CreateEmployee from '../src/pages/CreateEmployee';
import './App.css';


function App() {
  return (
      <>
        <ReactRouter>
          <Routes>
            <Route path="/"
                   element={ <CreateEmployee /> }
                   strict exact />
            <Route path="/employee-grid"
                   element={ <DataGridEmployee /> }
                   strict exact />
            <Route path="*" element={
              <Navigate to="/" /> } strict exact />
          </Routes>
        </ReactRouter>
      </>
  );
}

export default App;
