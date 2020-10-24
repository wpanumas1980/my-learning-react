import React from 'react'
import TextContext from '../contextVariable/TextContext'

function ButtonBasic({width,height,backgroundColor,color}) {
    const txt = React.useContext(TextContext);    
    const buttonStyle = {
        width,
        height,
        backgroundColor,
        color:txt.color
    }
    return (
        <div>
            {/* <TextContext.Consumer> */}
            <button onClick={txt.changeBg} style={buttonStyle}>{txt.text}</button>
            {/* </TextContext.Consumer> */}
        </div>
    )
}

export default ButtonBasic
