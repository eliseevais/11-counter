import React from "react";
import styled from "styled-components";
import {MyTheme} from "./MyTheme";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  
  min-width: 400px;
  min-height: 250px;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  
  border: 2px solid ${MyTheme.colors.accent};
  background-color: ${MyTheme.colors.background};
  color: ${MyTheme.colors.accent};

  font-size: 24px;
  font-weight: 600;
  
  button {
    min-width: 80px;
    min-height: 20px;
    font-size: 24px;
    font-weight: 600;
    margin: 10px;
    border: 2px solid ${MyTheme.colors.accent};
    border-radius: 4px;
    background-color: ${MyTheme.colors.button};
  }
  
  input {
    margin: 10px;
    border-radius: 4px;
    border: 2px solid ${MyTheme.colors.accent};
    text-align:center;
  }
  
  div {
    margin: 10px;
  }
`

const WrapperForValues = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  
  min-width: 380px;
  min-height: 160px;
  border-radius: 10px;
  border: 2px solid ${MyTheme.colors.accent};
`

const WrapperForButton = styled.div`
  min-width: 380px;
  min-height: 40px;
  border-radius: 10px;
  border: 2px solid ${MyTheme.colors.accent};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

const WrapperForGroup = styled.div`
  display: flex;
  flex-direction: row;
`

export const Styles = {
  Wrapper,
  WrapperForValues,
  WrapperForButton,
  WrapperForGroup
}