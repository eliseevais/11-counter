import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {MyTheme} from "./styles/MyTheme";
import {Styles} from "./styles/Windows_Styled";

const App = () => {

  const [maxValue, setMaxValue] = useState(0);
  const onChangeMaxValueHandler = (e: any) => {
    setMaxValue(+e.currentTarget.value);
  };

  const [startValue, setStartValue] = useState(0);
  useEffect(() => {
    const valueAsString = localStorage.getItem('startValue')
    if (valueAsString) {
      const valueAsNumber = JSON.parse(valueAsString);
      setStartValue(valueAsNumber)
    }
  }, []);
  const onChangeHandler = (e: any) => {
    setStartValue(+e.currentTarget.value)
  };
  const setStartValueHandler = () => {
    localStorage.setItem('startValue', JSON.stringify(startValue));
    if (+startValue <= +maxValue ) {
      setValue(startValue);
    }
    if (+startValue > +maxValue ) {
      setError('Incorrect value');
    }
  };

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
    setError(null);
  };

  const [error, setError] = useState<string | null>(null);

  return (
    <AppWrapper>
      <div>
        <Styles.Wrapper>
          <Styles.WrapperForValues>
            <Styles.WrapperForGroup>
              <div>max value:</div>
              <input value={maxValue} type={"number"}
                     onChange={onChangeMaxValueHandler}
              />
            </Styles.WrapperForGroup>

            <Styles.WrapperForGroup>
              <div>start value:</div>
              <input value={startValue} type={"number"}
                     onChange={onChangeHandler}
              />
            </Styles.WrapperForGroup>
          </Styles.WrapperForValues>

          <Styles.WrapperForButton>
            <button onClick={setStartValueHandler}>set</button>
          </Styles.WrapperForButton>
        </Styles.Wrapper>
        )
      </div>
      <div>
        <Styles.Wrapper>

          <Styles.WrapperForValues>
            {value}
            {error}
          </Styles.WrapperForValues>

          <Styles.WrapperForButton>
            <button onClick={incHandler}>inc</button>
            <button onClick={resetHandler}>reset</button>
          </Styles.WrapperForButton>
        </Styles.Wrapper>
      </div>
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
