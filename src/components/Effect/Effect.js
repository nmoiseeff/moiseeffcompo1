import { useState, useEffect } from "react"


const Effect = () => {

    const [title, setTitle] = useState ("Primer titulo")
    const [count, setCount] = useState (0)

    const handleClick = () => console.log ("hice click")

    useEffect(() => { console.log("cambio titulo")

    const boton = document .getElementById("boton")

    boton.addEventListener("click", handleClick)

    return () => boton.removeEventListener("click", handleClick)
}, [])
    console.log("Se hace render")
    



    return (
        <div>
        <h1>{title}</h1>
        <h1>{count}</h1>
        <button onClick={() => setTitle("Cambio el titulo")}>Cambiar titulo</button>
        <button onClick={() => setCount(count + 1)}>Sumar</button>
        <button id="boton">boton</button>
        </div>
    )
}
export default Effect