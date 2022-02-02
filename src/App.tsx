import React from 'react';
import { ClientProvider } from 'providers/clientProvider/ClientProvider';
import { BreedListContainer } from 'app/BreedList/BreedListContainer';

function App() {
  return (
    <ClientProvider>
      <h1 className="text-center text-4xl font-bold">DOGS</h1>
      <div className="p-4">
        <BreedListContainer />
      </div>
    </ClientProvider>
  );
}

export default App;
