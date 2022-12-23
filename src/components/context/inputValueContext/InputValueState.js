import React, { useState } from 'react'
import InputValueContext from './InputValueContext';

const InputValueState = (props) => {

    const [inputValue, setInputValue] = useState("India");

    return (
        <InputValueContext.Provider value={{ inputValue, setInputValue }}>
            {props.children}
        </InputValueContext.Provider>
    )
}

export default InputValueState;
