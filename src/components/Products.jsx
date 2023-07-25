function Products(props) {
  const { image, title, description, price, category } = props;
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
        
      </div>
      
        </>
    )
}

export default Products