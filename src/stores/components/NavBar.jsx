import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
const NavBar = () => {
  const {cartItems}=useCart()
  return (
    
<>
<div className="navSection">
    <div className="title">
        <h2>E-Mart</h2>
    </div>
    <div className="search">
        <input type='text' placeholder='search...'/>
    </div>
    <div className="user">
<div className="user-details">
    SignIN/SignUp
</div>

<Link to='/cart'>
<div className="cart">
  Cart
  <span>{cartItems.length}</span>
</div>
</Link>


  </div>
  
</div>

<div className="subMenu">
  <ul>
    <li><Link to="/mobiles">Mobiles</Link></li>
    <li><Link to="/computers">Computers</Link></li>
    <li><Link to="/watches">Watches</Link></li>
    <li><Link to="/mensfashion">Men's Fashion</Link></li>
    <li><Link to="/womenfashion">Women's Fashion</Link></li>
    <li><Link to="/furniture">Furniture</Link></li>
    <li><Link to="/AC">AC</Link></li>
    <li><Link to="/fridge">Fridges</Link></li>
    <li><Link to="/kitchen">Kitchen</Link></li>
    <li><Link to="/tv">TV</Link></li>
    <li><Link to="/speaker">Speakers</Link></li>
    <li><Link to="/books">Books</Link></li>
  </ul>
</div>

</>
   
  )
}

export default NavBar