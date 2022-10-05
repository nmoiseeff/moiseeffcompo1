import "./Navbar.css"
import CartWidget from "../CartWidget/Cartwidget"
const Navbar = () => {
    return (
    <nav>
        <div>
            <h1>Ecommerce</h1>
        </div>
        <div>
            <button>Celulares</button>
            <button>Tablets</button>
            <button>Notebooks</button>
        </div>
        <div>
            <CartWidget />
        </div>
    </nav>
    )
}

export default Navbar