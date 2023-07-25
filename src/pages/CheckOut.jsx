import { useEffect } from "react"

function CheckOut({ selectedProducts }) {
    const totalAmount = selectedProducts.reduce((total, product) => total + product.price, 0);
    useEffect(() => {
        document.title = 'CheckOut'
    })
    return (
        <>
       <div className="container">
      <h1>Checkout</h1>
      <div className="row">
        <div className="col-md-6">
          <h2>Shipping Information</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">
                Full Name
              </label>
              <input type="text" className="form-control" id="fullName" />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input type="text" className="form-control" id="address" />
            </div>
            <div className="mb-3">
              <label htmlFor="city" className="form-label">
                City
              </label>
              <input type="text" className="form-control" id="city" />
            </div>
            <div className="mb-3">
              <label htmlFor="zipcode" className="form-label">
                Zip Code
              </label>
              <input type="text" className="form-control" id="zipcode" />
            </div>
            <button type="submit" className="btn btn-primary">
              Continue to Payment
            </button>
          </form>
        </div>
      </div>
    </div>
        </>
    )
} 

export default CheckOut