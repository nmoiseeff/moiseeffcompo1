import { useState, useEffect } from 'react'
import { getProduct } from '../../asyncMock'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {
        getProduct(productId).then(response => {
            setProduct(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    return (
        <div>
            <h1>Detalle de producto</h1>
            {/* <ItemDetail {...product}/> */}
            <div style={{backgroundColor: "yellow", textAlign: "left", margin: "30px 500px", padding: "10px 100px"}} >
                <h2>Modelo: {product?.name}</h2>
                <h3>Categoria: {product?.category}</h3>
                <h3>Stock: {product?.stock}</h3>
                <h3>{product?.description}</h3>
                <h2>Precio: $ {product?.price}</h2>
            </div>
        </div>
    )
}

export default ItemDetailContainer