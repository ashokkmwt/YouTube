import React, { useState } from 'react'
import SignInContext from './SignInContext'

const SignInState = (props) => {

    const [isSignIn, setIsSignIn] = useState(false);

    return (
        <SignInContext.Provider value={{ isSignIn, setIsSignIn }}>
            {props.children}
        </SignInContext.Provider>
    )
}

export default SignInState