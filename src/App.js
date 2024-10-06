import './App.css';
import { useState } from "react";

function Key({ label, clickHandler }) {
  return (
    <button className='ButtonKeys' onClick={clickHandler}>
      {label}
    </button>
  )
}

function Display({ display }) {
  return (
    <div className="Display">
      {display}
    </div>
  );
}

function NameAndSection(){
  return(
    <div>
      <p>
        Calculator of Milagros Darlene Mae Bulaon - IT3A
      </p>
    </div>
  )
}

function App() {

  const [disp, setDisp] = useState(0);
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [op, setOp] = useState(null);

  const nameClickHandler = (e) => {
    e.preventDefault();
    setDisp('Milagros Darlene Mae M. Bulaon');
    setNum1(null);
    setNum2(null);
    setOp(null);
  }

  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    if (num1 === null) {
      setNum1(value);
      setDisp(value);
    } else if (op === null) {
      setNum1(num1 + value);
      setDisp(num1 + value);
    } else {
      if (num2 === null) {
        setNum2(value);
        setDisp(value);
      } else {
        setNum2(num2 + value);
        setDisp(num2 + value);
      }
    }
  }

  const opClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setOp(value);
    setDisp(value);
  }

  const equalsClickHandler = () => {
    if (num1 !== null && num2 !== null && op !== null) {
      let result;
      switch (op) {
        case "+":
          result = parseInt(num1) + parseInt(num2);
          break;
        case "-":
          result = parseInt(num1) - parseInt(num2);
          break;
        case "*":
          result = parseInt(num1) * parseInt(num2);
          break;
        case "÷":
          result = parseInt(num1) / parseInt(num2);
          break;
        default:
          result = 0;
      }
      setDisp(result);
      setNum1(null);
      setNum2(null);
      setOp(null);
    }
  }

  const clearClickHandler = () => {
    setDisp(0);
    setNum1(null);
    setNum2(null);
    setOp(null);
  }

  return (
    <div className="App">
      <div className='NameContainer'>
          <NameAndSection/>
        </div>

      <div className="Calc">
        <div className="Disp">
          <Display display={disp}/>
        </div>

        <div className="Buttons">
          <Key label={7} clickHandler={numClickHandler}/>
          <Key label={8} clickHandler={numClickHandler}/>
          <Key label={9} clickHandler={numClickHandler}/>
          <Key label={"÷"} clickHandler={opClickHandler}/>
          <Key label={4} clickHandler={numClickHandler}/>
          <Key label={5} clickHandler={numClickHandler}/>
          <Key label={6} clickHandler={numClickHandler}/>
          <Key label={"*"} clickHandler={opClickHandler}/>
          <Key label={1} clickHandler={numClickHandler}/>
          <Key label={2} clickHandler={numClickHandler}/>
          <Key label={3} clickHandler={numClickHandler}/>
          <Key label={"-"} clickHandler={opClickHandler}/>
          <Key label={"C"} clickHandler={clearClickHandler}/>
          <Key label={0} clickHandler={numClickHandler}/>
          <Key label={"="} clickHandler={equalsClickHandler}/>
          <Key label={"+"} clickHandler={opClickHandler}/>
          <Key label={'Bulaon'} clickHandler={nameClickHandler}/>
        </div>
      </div>
    </div>
  );
}

export default App;
