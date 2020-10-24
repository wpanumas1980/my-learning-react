import React from 'react'
import TextContext from '../contextVariable/TextContext'

function ButtonBasic({width,height,backgroundColor,color}) {
    const buttonStyle = {
        width,
        height,
        backgroundColor,
        color
    }
    // const txt = React.useContext(TextContext)    
    return (
        <div>
            <TextContext.Consumer>
            {theme => <button style={buttonStyle}>{theme.text}</button>}
            </TextContext.Consumer>
        </div>
    )
}

export default ButtonBasic
