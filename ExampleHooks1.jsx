import React from 'react'

function ExampleHooks() {
    const [name, setName] = useState("John")
    
    const handleClick = () => {
        let name = "John";
        console.log("Hello", name)
        setName("Mary")
    }

    return (
        <div>
            <h1>Hello, {name}</h1>
            <button onClick={handleClick}>Click Me!</button>
        </div>
    )
}