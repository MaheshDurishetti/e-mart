import React from 'react'
import Mobiles from './Mobiles'
import Books from './Books'
import Computer from './Computer'
import Fridge from './Fridge'
import AC from './AC'
import Watches from './Watches'
import Mens from './Mens'
import WoMens from './WoMens'
import Kitchen from './Kitchen'
import Furniture from './Furniture'
const Products = () => {
  return (
    <div style={{textAlign:"center"}}>
      <h1 className="scrolling-text">🚀NEW ARRIVAILS!!!</h1>
       <Watches/>
      
      <Books/>
      <Computer/>
      <Fridge/>
      <AC/>
     <Mobiles/>
     <WoMens/>
      <Mens/>
      <Kitchen/>
      <Furniture/>
     
      
    </div>

  )
}

export default Products