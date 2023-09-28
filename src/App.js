import React from 'react';
import './App.css';
import Accordion from './components/Accordion';

function App() {
  return (
    <div className="App">
      <h2>Menu Accordéon avec React</h2>
      <Accordion title="Titre 1" content="Contenu de l'accordéon 1" />
      <Accordion title="Titre 2" content="Contenu de l'accordéon 2" />
      <Accordion title="Titre 3" content="Contenu de l'accordéon 3" />
    </div>
  );
}

export default App;