import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <div className="container-md">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/checkout">Checkout</Link></li>
                </ul>
            </div>
        </nav>
        
        </>
    )
}
export default Navbar