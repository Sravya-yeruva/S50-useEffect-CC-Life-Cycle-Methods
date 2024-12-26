import logo from './logo.svg';
import './App.css';
import FunctionalC from './components/FunctionalC';
import { useState } from 'react';
import ClassC from './components/ClassC';

function App() {

  let [Show,setShow]=useState(true);
  return (
    <div className="App">
      
      <FunctionalC></FunctionalC>
      <button onClick={()=>{
        setShow(!Show);
      }}
      >Load/Unload Component</button>

      {Show == true? <FunctionalC></FunctionalC> : null}
      {Show == true? <ClassC></ClassC> : null}

    
    </div>
  );
}

export default App;
