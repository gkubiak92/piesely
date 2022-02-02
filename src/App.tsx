import React from 'react';
import { ClientProvider } from 'providers/clientProvider/ClientProvider';
import { BreedList } from 'app/BreedList/BreedList';

function App() {
  return (
    <ClientProvider>
      <h1>PIESEŁY</h1>
      <BreedList />
    </ClientProvider>
  );
}

export default App;
