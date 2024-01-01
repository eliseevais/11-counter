import React, {useEffect, useState} from "react";
import {Styles} from "../startWindow/Start.window_Styled";

export const CounterWindow = () => {

  const [value, setValue] = useState(0);

  useEffect(() => {
    const valueAsString = localStorage.getItem('myValue')
    if (valueAsString) {
      const valueAsNumber = JSON.parse(valueAsString);
      setValue(valueAsNumber)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('myValue', JSON.stringify(value))
  }, [value]);

  const incHandler = () => {
    setValue(value + 1)
  };

  const resetHandler = () => {
    localStorage.clear();
    setValue(0);
  }

  return (
    <Styles.Wrapper>
      <Styles.WrapperForValues>
        {value}
      </Styles.WrapperForValues>

      <Styles.WrapperForButton>
        <button onClick={incHandler}>inc</button>
        <button onClick={resetHandler}>reset</button>
      </Styles.WrapperForButton>

    </Styles.Wrapper>
  )
}