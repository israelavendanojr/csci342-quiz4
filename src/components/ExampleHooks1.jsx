import React, { useState } from 'react'

function ExampleHooks1() {
    const [name, setName] = useState("Israel")

    const handleClick = () => {
        console.log("Hello", name)
        setName("Junior")
    }

    return (
        <div>
            <h1>Hello, {name}</h1>
            <button onClick={handleClick}>Click Me!</button>
        </div>
    )
}

export default ExampleHooks1
