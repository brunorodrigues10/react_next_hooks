import { useState } from "react"

export default () => {

    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(prevCount => prevCount + 1);
    }

    console.log("Component Rendered")

    return (
        <div>
            <p>Coubt: {count}</p>
            <button onClick={handleClick}>Increment</button>
        </div>

    )
}