import React, { useState } from "react";
import { add, multiply, subtract, divide } from "../components/Calculator/Calculator";

function Calculate() {
    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(0);
    const [result, setResult] = useState(0);

    return (
        <div>
            <h1>Simple Calculator</h1>
            <input type="number" onChange={e => setLeft(e.target.value)} />
            <br />
            <br />
            <input type="number" onChange={e => setRight(e.target.value)} />
            <br />
            <br />
            <button onClick={e => setResult(add(left, right))}>Add</button>
            <button onClick={e => setResult(multiply(left, right))}>Multiply</button>
            <button onClick={e => setResult(subtract(left, right))}>Subtract</button>
            <button onClick={e => setResult(divide(left, right))}>Divide</button>
            <br />
            <br />
            <span>{result}</span>
        </div>
    )
};

export default Calculate;