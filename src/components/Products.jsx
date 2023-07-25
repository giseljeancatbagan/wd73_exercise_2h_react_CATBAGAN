import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartActions";

function Products(props) {
  const { image, title, description, price, category } = props;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const product = { title, description, price, category };
    dispatch(addToCart(product));
  }
    return (
        <>
    
        <div className="card" style={{ width: '18rem'}}>
          <img src={image} className="card-img-top" alt={image}/>
          <div className="card-body">
          <h5 className="card-title">{title}</h5>
         <p className="card-text">{description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">$ {price}</li>
          <li className="list-group-item">{category}</li>
        </ul>
        <button onClick={handleAddToCart} className="btn btn-primary">Add to Cart</button>
        
      </div>
      
        </>
    )
}

export default Products