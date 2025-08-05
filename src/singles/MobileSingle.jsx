import React from 'react'
import { useParams } from 'react-router-dom'
import { mobilesData } from '../stores/data/mobiles'
import NavBar from '../stores/components/NavBar'
import { useCart } from '../stores/context/CartContext'
const MobileSingle = () => {
    const {id}=useParams()
    const {addToCart,cartItem}=useCart();
    const product=mobilesData.find((item)=>item.id===id)
    console.log(id)
  return (
   <>
   <NavBar/>
    <div className="ind-section  ">
<div className="ind-image">
<img src={product.image} alt="" />
</div>
<div className="ind-details space">
    <div className="ind-company space">
        <h3>{product.company}</h3>
    </div>
<div className="ind-model space">
    <h3>{product.model}</h3>
</div>

<div className="ind-price space">
    <h2>{product.price}</h2>
</div>
<div className="ind-desc space">
    <p>
        {product.description}
    </p>
</div>
<button onClick={()=>addToCart(product)} >ADD to CArt</button>
</div>

    </div>
   </>
  )
}

export default MobileSingle