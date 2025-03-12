// src/App.js
import React from 'react';
import Topo from './componentes/Topo';
import Banner from './componentes/Banner';
import Principal from './componentes/Principal';
import Rodape from './componentes/Rodape';

function App() {
  return (
    <div>
      <Topo />
      <Banner />
      <Principal />
      <Rodape />
    </div>
  );
}

export default App;