import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import AdditionDeviceForm from './components/addition/form/AdditionDeviceForm';
import DeviceListPage from './components/list/page/DeviceListPage';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/addition" element={<AdditionDeviceForm />} />
                <Route path="/list" element={<DeviceListPage />} />
            </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
