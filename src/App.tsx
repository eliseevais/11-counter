import React, {useState} from 'react';
import './App.css';
import styled from "styled-components";

function App() {
  const [value, setValue] = useState(0)
  const incHandler = () => {
    setValue(value + 1)
  };
  const setToLocalStorageHandler = () => {
    localStorage.setItem('counterValue', JSON.stringify(value));
    localStorage.setItem('counterValue + 1', JSON.stringify(value + 1));
  };
  const getFromLocalStorageHandler = () => {
    let valueAsString = localStorage.getItem('counterValue');
    if (valueAsString) {
      let newValue = JSON.parse(valueAsString);
      setValue(newValue)
    }
  };
  const clearLocalStorageHandler = () => {
    localStorage.clear();
    setValue(0)
  };
  const removeItemFromLocalStorageHandler = () => {
    localStorage.removeItem('counterValue + 1')
  }

  return (
    <AppWrapper>
      <p>Counter</p>
      {value}
      <button onClick={incHandler}>inc</button>
      <button onClick={setToLocalStorageHandler}>setToLocalStorage</button>
      <button onClick={getFromLocalStorageHandler}>getFromLocalStorage</button>
      <button onClick={clearLocalStorageHandler}>clearLocalStorage</button>
      <button onClick={removeItemFromLocalStorageHandler}>removeItemFromLocalStorage</button>

    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`


