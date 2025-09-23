"use client";
import { useState } from "react";
import '../globals.css';
const Main = () =>{
    const [number,setNumber] = useState(0)
const addNumber = () =>{
    setNumber(number + 1);
}

return (
    <div>
        <form >
            <input type="number" 
            value={number}
            onChange={(e) => setNumber(e.target.value)}
             />
        </form>
    <span>{number}</span>
    <button onClick={addNumber}>Add value</button>
    </div>
)
}