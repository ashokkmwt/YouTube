import React from 'react'

const GeneralComponent = ({ p }) => {
    return (
        <div style={
            {
                width: '100%',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem'
            }
        }>
            <h1>{p}</h1>
        </div>
    )
}

export default GeneralComponent