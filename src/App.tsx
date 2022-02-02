import React from 'react';
import { ClientProvider } from 'providers/clientProvider/ClientProvider';
import { BreedListContainer } from 'app/BreedList/BreedListContainer';

function App() {
  return (
    <ClientProvider>
      <h1>PIESEŁY</h1>
      <BreedListContainer />
    </ClientProvider>
  );
}

export default App;
