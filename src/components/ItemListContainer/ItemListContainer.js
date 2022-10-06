import {useState, useEffect} from "react"
import {getProducts} from "../../asyncMock"
import { Link } from "react-router-dom"

const ItemListContainer = ({ greetings }) => {
    const [products, setProducts] = useState([])

    useEffect (() => {getProducts().then(response=> {setProducts(response)
    })
}, [])

console.log(products)

    return (
    <div> 
        <h1>{greetings}</h1>
        <div>
            { products.map(prod=> (
                <div key= {prod.id}>
                    <h1>{prod.name}</h1>
                    <h2>$ {prod.price} </h2>
                    <link to={`/detail/${prod.id}`}>
                        <button> ver detalle </button>
                        </link>
                </div>))}
           
        </div>
    </div> 
    )
}

export default ItemListContainer