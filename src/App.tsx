import React, {ChangeEvent, useEffect, useState} from "react";
import styled from "styled-components";
import {MyTheme} from "./styles/MyTheme";
import {Styles} from "./styles/Windows_Styled";

const App = () => {
  const [value, setValue] = useState(0);
  const [error, setError] = useState<string>('');
  const [touched, setTouched] = useState<boolean>(true);
  const [maxValue, setMaxValue] = useState(() => {
    const valueAsString = localStorage.getItem('maxValue');
    if (valueAsString) {
      return JSON.parse(valueAsString);
    }
    return 5
  });
  const [startValue, setStartValue] = useState(() => {
    const valueAsString = localStorage.getItem('startValue');
    if (valueAsString) {
      return JSON.parse(valueAsString);
    }
    return 0
  });

  const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = +e.currentTarget.value;
    if (value <= maxValue) {
      setStartValue(value);
      setError('');
      setTouched(true)
    } else {
      setError('Incorrect value');
      setTouched(false)
    }
  };

  const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = +e.currentTarget.value
    if (value >= startValue) {
      setMaxValue(value);
      setError('');
      setTouched(true);
    } else {
      setError('Incorrect value');
    }
  };

  const onSetClickHandler = () => {
    localStorage.setItem('startValue', JSON.stringify(startValue));
    localStorage.setItem('maxValue', JSON.stringify(maxValue));
    if (startValue > 0) {
      setValue(startValue);
    }
    if (startValue < 0) {
      setError('Value should be 0 or greater');
    }
  };


  const incHandler = () => {
    const newValue = value + 1
    if (newValue <= maxValue && newValue > 0) {
      setValue(value + 1)
    } else {
      setError('Incorrect value');
      setTouched(false)
    }
  };

  const resetHandler = () => {
    setValue(0);
  };

  return (
    <AppWrapper>
      <div>
        <Styles.Wrapper>
          <Styles.WrapperForValues>
            <Styles.WrapperForGroup>
              <div>max value:</div>
              <input
                value={maxValue}
                type={"number"}
                onChange={onChangeMaxValueHandler}
              />
            </Styles.WrapperForGroup>

            <Styles.WrapperForGroup>
              <div>start value:</div>
              <input value={startValue}
                     type={"number"}
                     onChange={onChangeStartValueHandler}
              />
            </Styles.WrapperForGroup>
          </Styles.WrapperForValues>

          <Styles.WrapperForButton>
            <button onClick={onSetClickHandler}
                    disabled={startValue == maxValue}
            >set</button>
          </Styles.WrapperForButton>
        </Styles.Wrapper>
      </div>
      <div>
        <Styles.Wrapper>

          <Styles.WrapperForValues>
              {error ? error : value}
          </Styles.WrapperForValues>

          <Styles.WrapperForButton>
            <button onClick={incHandler}
                    disabled={value >= maxValue || !!error || touched === false || startValue == maxValue}
            >inc
            </button>
            <button onClick={resetHandler}
                    disabled={!!error || value === startValue || touched === false || startValue == maxValue}>reset
            </button>
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
