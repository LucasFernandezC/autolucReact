import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import ItemContainer from './components/ItemContainer/ItemContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <p>Hello World</p>
        <ItemContainer section="Autos en venta"/>
      </header>
    </div>
  );
}

export default App;
