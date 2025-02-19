import React from 'react';
import { Routes , Route } from 'react-router-dom';
import Home from './components/Home';
import Market from './components/Market';
import Career from './components/Career';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Market' element={<Market/>}/>
        <Route exact path='/Career' element={<Career/>}/>
      </Routes>

    </div>
  );
}

export default App;
