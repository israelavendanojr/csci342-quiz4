import React from 'react'

function ClickCounter() {

    const handleClick = () => {
        console.log("Button Clicky Click Click!")
    }
    return (
        <div>
            <h2></h2>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}

export default ClickCounter
