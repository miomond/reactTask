import React from 'react'

function Product({data}) {
    let res = data;


      function details (){
        
      }
    
    
    return (

<div className="card" style={{ width: "18rem" }}>
  <img src={res.thumbnail} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{res.brand}</h5>
    <p className="card-text">
      {res.description}
    </p>
    <button onClick={details} className="btn btn-primary">
      Go somewhere
    </button>
  </div>
</div>

    )
}

export default Product