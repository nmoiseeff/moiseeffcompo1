import "./Navbar.css"
import CartWidget from "../CartWidget/Cartwidget"
const Navbar = () => {
    return (
    <nav>
        <div>
            <h1>Ecommerce</h1>
        </div>
        <div>
            <button>Productos 1</button>
            <button>Productos 2</button>
            <button>Productos 3</button>
        </div>
        <div>
            <CartWidget />
        </div>
    </nav>
    )
}

export default Navbar