import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);

  const clearHandler = () => {
    setPeople([]);
  };
  return (
    <main>
      <section className='container'>
        <List people={people} />
        <button onClick={clearHandler}>clear all</button>
      </section>
    </main>
  );
}

export default App;
