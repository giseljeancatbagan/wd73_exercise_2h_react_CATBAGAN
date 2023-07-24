import { useEffect } from "react"
import ProductList from "./ProductList"

function Home() {
        useEffect(() => {
            document.title = 'Home'
        }, [])
        
    return (
        <>
        <div className="container">
      <h1>Welcome to our Shop</h1>
      <div className="row">
        <div className="col-md-8">
          {/* Display some featured products or a carousel */}
          <h2>Featured Products</h2>
          <ProductList />
        </div>
        <div className="col-md-4">
          {/* Display product categories or other content */}
          <h2>Categories</h2>
          <ul>
            <li>Women's clothing</li>
            <li>Electronics</li>
            <li>Jewelery</li>
            <li>Men's clothing</li>
            {/* Add more categories */}
          </ul>
        </div>
      </div>
      {/* Add more sections as needed */}
    </div>
        </>
    )
}

export default Home