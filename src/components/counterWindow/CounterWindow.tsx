import React, {useEffect, useState} from "react";

export const CounterWindow = () => {

  const [value, setValue] = useState(0);

  useEffect(() => {
    localStorage.setItem('myValue', JSON.stringify(value))
  }, [value]);

  useEffect(() => {
    const valueAsString = localStorage.getItem('myValue')
    if (valueAsString) {
      const valueAsNumber = JSON.parse(valueAsString);
      setValue(valueAsNumber)
    }
  }, []);

  const incHandler = () => {
    setValue(value + 1)
  };

  const resetHandler = () => {
    localStorage.clear()
  }

  return (
    <>
    <div>Counter window</div>
      {value}
      <button onClick={incHandler}>inc</button>
      <button onClick={resetHandler}>reset</button>
    </>
  )
}