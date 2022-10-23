import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import ClearButton from "./components/ClearButton";
import Display from "./components/Display";
import { evaluate } from "mathjs";
function App() {
  const [input, setInput] = useState("");

  const addInput = (value) => {
    setInput(input + value); // here the " + ""  is for concat and not for adding
  };
  const resolveOperation = () => {
    if (input) setInput(evaluate(input));
    else {
      alert("Must enter a value to calculate");
    }
  };
  const handleClear = () => {
    setInput("");
  };

  return (
    <div className="App">
      <div className="logo-container">
        <h1 className="calculator-title">Calculator by Julian</h1>
      </div>
      <div className="calculator-container">
        <Display input={input} />

        <div className="fila">
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className="fila">
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>-</Button>
        </div>
        <div className="fila">
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>*</Button>
        </div>

        <div className="fila">
          <Button handleClick={resolveOperation}>=</Button>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={addInput}>/</Button>
        </div>

        <div className="fila">
          <ClearButton handleClear={handleClear}>CLEAR</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
