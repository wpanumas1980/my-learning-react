import React from 'react'

function ButtonBasic({width,height,backgroundColor,color,text}) {
    const buttonStyle = {
        width,
        height,
        backgroundColor,
        color
    }
    return (
        <div>
            <button style={buttonStyle}>{text}</button>
        </div>
    )
}

export default ButtonBasic
