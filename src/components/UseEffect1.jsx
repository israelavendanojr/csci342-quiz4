import React, { useState, useEffect } from 'react'

function UseEffect1() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`Count is changed: ${count}`);
    }, [count])

    const handleClick = () => {
        setCount(prevCount => prevCount + 1)
    }

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={handleClick}>Click Me!</button>
        </div>
    )
}

export default UseEffect1
