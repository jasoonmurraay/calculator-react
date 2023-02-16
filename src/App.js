import "./App.css";
import NumButton from "./components/NumButton";
import OperateButton from "./components/OperateButton";
import ClearButton from "./components/ClearButton";
import { useState, useEffect, useCallback } from "react";

function App() {
  let [display, setDisplay] = useState(0);
  const [arg1, setArg1] = useState(null);
  const [newArg, setNewArg] = useState(false);
  const [operator, setOperator] = useState(null);

  const digitAddHandler = (e) => {
    let enteredValue = e.target.innerHTML;
    if (newArg === true) {
      setDisplay(enteredValue);
      setNewArg(false);
    } else {
      setDisplay(display + enteredValue);
    }
    if (arg1) {
      console.log("arg1");
    } else {
      setArg1(display);
    }
    if (display === 0) {
      if (enteredValue === "0") {
        setDisplay(0);
      } else {
        setDisplay(enteredValue);
      }
    }
    enteredValue = "";
  };

  const operateHandler = (e) => {
    let enteredOperation = e.target.innerHTML;
    if (enteredOperation === "+/-") {
      setDisplay(-Number(display));
      if (arg1) {
        setArg1(-Number(display))
      }
      return;
    }
    if (enteredOperation === "%") {
      let percentage = Number(display) / 100;
      setDisplay(percentage);
      setArg1(percentage);
      return;
    }
    if (newArg) {
      setOperator(enteredOperation);
      return;
    }
    console.log("Operator clicked!");

    console.log("Entered Operation: ", enteredOperation);
    console.log("arg1: ", arg1);
    console.log("display: ", display);
    if (arg1 && operator) {
      if (operator === "+") {
        let sum = Number(arg1) + Number(display);
        setDisplay(sum);
        setArg1(sum);
      }
      if (operator === "-") {
        let difference = Number(arg1) - Number(display);
        setDisplay(difference);
        setArg1(difference);
      }
      if (operator === "/") {
        if (Number(display) === 0) {
          setDisplay("ERR");
          setArg1(null);
        } else {
          let division = Number(arg1) / Number(display);
          setDisplay(division);
          setArg1(division);
        }
      }
      if (operator === "*") {
        let product = Number(arg1) * Number(display);
        setDisplay(product);
        setArg1(product);
      }
      if (operator === "^") {
        let exponential = Number(arg1) ** Number(display);
        setDisplay(exponential);
        setArg1(exponential);
      }
    } else {
      setArg1(display);
    }
    setNewArg(true);
    setOperator(enteredOperation);
    if (enteredOperation === "=") {
      console.log("Equals");
      setOperator(null);
    }
  };

  // useEffect(() => {
  //   setDisplay(display);
  //   console.log(display);
  // }, [operateHandler]);

  const clearHandler = () => {
    setDisplay(0);
    setArg1(null);
    setNewArg(false);
    setOperator(null);
  };

  return (
    <div>
      <h1>Calculator</h1>
      <div className="bigContainer">
        <div id="total">{display}</div>
        <div className="d-flex flex-row justify-content-center">
          <div className="container">
            <div className="row">
              <div className="col">
                <ClearButton clearHandler={clearHandler}></ClearButton>
                <OperateButton
                  operateHandler={operateHandler}
                  value="+/-"
                ></OperateButton>
                <OperateButton
                  operateHandler={operateHandler}
                  value="%"
                ></OperateButton>
                <OperateButton
                  operateHandler={operateHandler}
                  value="^"
                ></OperateButton>
              </div>
            </div>
            <div className="row w-100">
              <div className="col">
                <NumButton addDigit={digitAddHandler} value="7"></NumButton>
                <NumButton addDigit={digitAddHandler} value="8"></NumButton>
                <NumButton addDigit={digitAddHandler} value="9"></NumButton>
                <OperateButton
                  operateHandler={operateHandler}
                  value="+"
                ></OperateButton>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <NumButton addDigit={digitAddHandler} value="4"></NumButton>
                <NumButton addDigit={digitAddHandler} value="5"></NumButton>
                <NumButton addDigit={digitAddHandler} value="6"></NumButton>
                <OperateButton
                  operateHandler={operateHandler}
                  value="-"
                ></OperateButton>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <NumButton addDigit={digitAddHandler} value="1"></NumButton>
                <NumButton addDigit={digitAddHandler} value="2"></NumButton>
                <NumButton addDigit={digitAddHandler} value="3"></NumButton>
                <OperateButton
                  operateHandler={operateHandler}
                  value="*"
                ></OperateButton>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <NumButton addDigit={digitAddHandler} value="0"></NumButton>
                <NumButton addDigit={digitAddHandler} value="."></NumButton>
                <OperateButton
                  operateHandler={operateHandler}
                  value="="
                ></OperateButton>
                <OperateButton
                  operateHandler={operateHandler}
                  value="/"
                ></OperateButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
