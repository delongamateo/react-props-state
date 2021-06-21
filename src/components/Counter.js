import React, { useState } from 'react';

function Counter (props) {

    const [number, setNumber] = useState(0)

    const increase = () => {
        setNumber(number + 1)
    }

    const decrease = () => {
        setNumber(number - 1)
    }
    return (
        <div>
            <button onClick={increase}>+</button>
            <h1>{number + props.count}</h1>
            <button onClick={decrease}>-</button>
        </div>
    )
}

export default Counter;