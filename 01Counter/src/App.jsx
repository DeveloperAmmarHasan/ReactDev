import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  const addValue = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };
  const removeValue = () => {
    if(counter === 0){
      const isDisabled = true;
      counter = 0;
      setCounter(counter);
    }else{

      setCounter((prevCounter) => prevCounter - 1);
    }
  };
  return (
    <div className="counter">
      <h1 className="value">Counter : {counter}</h1>
      <div className="buttons">
        <button className="Increase" onClick={addValue}>
          Increase
        </button>
        <button className="Decrease" onClick={removeValue}>
          Decrease
        </button>
      </div>
    </div>
  );
}

export default App;
