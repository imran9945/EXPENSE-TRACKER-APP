import React from 'react';
import './App.css';
import Child from './child';
import {TProvider} from './Tcontext';
function App() {
  return (
    <div>
      <TProvider>
     <Child/>
     </TProvider>
    </div>
  );
}

export default App;
