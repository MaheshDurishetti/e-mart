import React from 'react'
import Mobiles from './Mobiles'
import Books from './Books'
import Computer from './Computer'
import Fridge from './Fridge'
import AC from './AC'

const Products = () => {
  return (
    <div>Products
      <Mobiles/>
      <Books/>
      <Computer/>
      <Fridge/>
      <AC/>
    </div>
  )
}

export default Products