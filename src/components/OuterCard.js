import React from 'react'
import CardBasic from './CardBasic'

function OuterCard({ width, height, backgroundColor, color, header }) {
    const outerStyle = {
        width,
        height,
        backgroundColor,
        color
    }
    return (
        <div style={outerStyle}>
            <h1>{header}</h1>
            <CardBasic
                width="200px"
                height="100px"
                backgroundColor="yellow"
                color="red"
                header={header}
            />
        </div>
    )
}

export default OuterCard
