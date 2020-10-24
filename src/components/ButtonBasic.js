import React from 'react'

function ButtonBasic(props) {
    const buttonStyle = {
        width: props.width,
        height: props.height,
        backgroundColor: props.backgroundColor,
        color:props.color
    }
    return (
        <div>
            <button style={buttonStyle}>{props.text}</button>
        </div>
    )
}

export default ButtonBasic
