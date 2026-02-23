import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import DeviceListPage from './components/list/page/DeviceListPage';
import DeviceFetchPage from './components/fetch/page/DeviceFetchPage';
import AdditionDeviceForm from './components/addition/form/AdditionDeviceForm';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/addition" element={<AdditionDeviceForm />} />
                <Route path="/list" element={<DeviceListPage />} />
                <Route path="/list/:id" element={<DeviceFetchPage />} />
            </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
