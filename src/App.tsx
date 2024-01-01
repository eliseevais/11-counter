import React from "react";
import styled from "styled-components";
import {StartWindow} from "./components/startWindow/StartWindow";
import {CounterWindow} from "./components/counterWindow/CounterWindow";
import {MyTheme} from "./styles/MyTheme";

const App = () => {

  return (
    <AppWrapper>
      <StartWindow/>
      <CounterWindow/>
    </AppWrapper>
  )
}

let AppWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${MyTheme.colors.background};
`

export default App;
