import {useState} from "react"
import Button from "../Button/Button"

const Counter = ( {children }) => {
    const initial= 0
const [count, setCount] = useState(initial)

    const decrement = () => {
        //accu = accu - 1
        if(count > 0) { 
        setCount(count - 1)}
    }
    const increment = () => {
        //accu = accu + 1
        setCount(count + 1)
    }
    const reset = () => {
        setCount(0)
    }
    return (
        <div>
            {children}
            <h1> {count} </h1>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={reset}>Agregar al carrito</button>
        </div>
    )
}

export default Counter