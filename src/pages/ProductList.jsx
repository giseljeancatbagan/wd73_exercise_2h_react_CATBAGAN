import { useState, useEffect } from "react"
import Products from "../components/Products"

function ProductList() {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
      setProducts(data)
    })
  }, [])

  useEffect(()  =>{
    document.title = 'Products'
  })
    return (
        <>
        <div className="d-flex flex-wrap">
        {
          products.map(
            product => <Products 
            key={product.id}
            title={product.title}
            description={product.description}
            image={product.image}
            price={product.price}
            category={product.category}
            /> 
          )  
        }
      </div>
        </>
    )
}

export default ProductList