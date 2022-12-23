import React, { useState } from 'react'
import MicValueContext from './MicValueContext'

const MicValueState = (props) => {

    const [micValue, setMicValue] = useState("");

    return (
        <MicValueContext.Provider value={{ micValue, setMicValue }} >
            {props.children}
        </MicValueContext.Provider>
    )
}

export default MicValueState