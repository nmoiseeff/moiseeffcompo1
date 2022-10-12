import { Link } from "react-router-dom"
import "./ItemList.css"
import Counter from "../Counter/Counter"

const ItemList = ({ products }) => {
    return (
        <ul style={{display: 'flex', flexDirection: 'row', justifyContent: "space-around", margin: "2em", }}>
            { products.map(product => <div key={product.id}><img className="itemImg" src= {product.img} alt='Nico'/><h1>{product.name}</h1><h2>$ {product.price}</h2><Link to={`/detail/${product.id}`}><button>Ver detalles</button></Link><Counter/></div>
            ) }
            
        </ul>
    )
}

export default ItemList
