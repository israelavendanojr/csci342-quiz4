import React from 'react'

function ExampleHooks() {
    
    const [count, setCount] = useState(0);
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