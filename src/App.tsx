// import React, {useEffect, useState} from 'react';
// import './App.css';
// import styled from "styled-components";
//
// function App() {
//   const [value, setValue] = useState(0);
//
//   useEffect( () => {
//     let valueAsString = localStorage.getItem('counterValue');
//     if (valueAsString) {
//       let newValue = JSON.parse(valueAsString);
//       setValue(newValue);
//     }
//   }, []);
//
//   useEffect( () => {
//     localStorage.setItem('counterValue', JSON.stringify(value));
//   }, [value])
//   const incHandler = () => {
//     setValue(value + 1)
//   };
//
//   return (
//     <AppWrapper>
//       <p>Counter</p>
//       {value}
//       <button onClick={incHandler}>inc</button>
//     </AppWrapper>
//   );
// }
//
// export default App;
//
// const AppWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin: 0 auto;
// `


import React from "react";
import styled from "styled-components";
import {StartWindow} from "./components/startWindow/StartWindow";
import {CounterWindow} from "./components/counterWindow/CounterWindow";

const App = () => {

  return (
    <AppWrapper>
      My Counter
      <StartWindow/>
      <CounterWindow/>
    </AppWrapper>
  )
}

let AppWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default App;
