import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import AdditionDeviceForm from './components/form/addition/AdditionDeviceForm';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/addition" element={<AdditionDeviceForm />} />
            </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
