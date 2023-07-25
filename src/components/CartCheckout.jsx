function CartCheckout() {
    return (
        <>
        <div className="col-md-6">
          <h2>Order Summary</h2>
          <ul className="list-group">
            {selectedProducts.map((product) => (
              <li key={product.id} className="list-group-item d-flex justify-content-between align-items-center">
                {product.title}
                <span className="badge bg-primary rounded-pill">${product.price}</span>
              </li>
            ))}
          </ul>
          <h3>Total: ${totalAmount}</h3>
        </div>
        
        </>
    )
}