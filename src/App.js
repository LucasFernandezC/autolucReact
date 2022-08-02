import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import ItemContainer from './components/ItemContainer/ItemContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';

function App() {
  return (

    <div className="App">
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/producto' element={<Detail />}></Route>
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
