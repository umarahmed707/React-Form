import React from "react";

const Apicard = (props) => {
 const {dishes} = props
  // const { product } = props

  // // const discountedPrice = (
  // //   product.price -
  // //   (product.price * product.discountPercentage) / 100
  // // ).toFixed(2);

  return (
//     <div className="card">
//       <div className="card-body">
//         <img src={product.thumbnail} alt={product.title} className="card-img" />

// <div style={{marginTop:"10px"}}>

//         <h2 className="title">{product.title}</h2>
//         <p className="brand">{product.brand}</p>

//         <p className="description">{product.description}</p>

//         <div className="price-section">
//           <span className="price">${discountedPrice}</span>
//           <span className="old-price">${product.price}</span>
//           <span className="discount">-{product.discountPercentage}%</span>
//         </div>

//         <div className="meta">
//           <span>⭐ {product.rating}</span>
//           <span>Stock: {product.stock}</span>
//         </div>
//         </div>

//       </div>

//       <button className="btn">Add to Cart</button>



//     </div>
<div className="card">
  <img src={dishes.image} alt="" />
<h3>{dishes.name}</h3>
<p>{dishes.ingredients}</p>
<p>{dishes.userId}</p>
<p>{dishes.tags}</p>
<p>{dishes.rating}</p>
<p>{dishes.reviewCount}</p>
</div>
  );

};

export default Apicard;
