import React from 'react'
import ButtonBasic from './ButtonBasic'

function CardBasic({ width, height, backgroundColor, color}) {
    const cardStyle = {
        width,
        height,
        backgroundColor,
        color
    }
    return (
        <div style={cardStyle}>
            <h2>Inner card</h2>
            <ButtonBasic
                width="100px"
                height="50px"
                backgroundColor="lightgreen"
                color="red"
            />
        </div>
    )
}

export default CardBasic
