import React, {useState} from "react";
import {Styles} from "./Start.window_Styled";

export const StartWindow = () => {


  return (
    <Styles.Wrapper>
      <Styles.WrapperForValues>

        <Styles.WrapperForGroup>
          <div>max value: </div>
          <input type={"number"}/>
        </Styles.WrapperForGroup>

        <Styles.WrapperForGroup>
          <div>start value: </div>
          <input type={"number"}/>
        </Styles.WrapperForGroup>

      </Styles.WrapperForValues>

      <Styles.WrapperForButton>
        <button>set</button>
      </Styles.WrapperForButton>
    </Styles.Wrapper>
  )
}