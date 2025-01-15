import React, { useState } from 'react';
import CareerList from './components/CareerList';
import CareerDetail from './components/CareerDetail';
import careers from './data/careers';

function App() {
  const [selectedCareer, setSelectedCareer] = useState(null);

  return (
    <div className="App">
      <h1>Guia de Carreiras</h1>
      <CareerList careers={careers} onSelectCareer={setSelectedCareer} />
      <CareerDetail profession={selectedCareer} />
    </div>
  );
}

export default App;
