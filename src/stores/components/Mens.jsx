import React from 'react'
import { mensData } from '../data/men'
const mens = () => {
  const firstFiveImages=mensData.slice(0,5)
     return (
      <>
      <div className='protitle'>
        <h2>Mens Fashion</h2>
      </div>
      
       <div className='proSection'>
   {
   firstFiveImages.map((item)=>{
     return (
       <div className='imgBox'>
         <img className='proImage' src={item.image} alt="" />
       </div>
     )
   })
   
   }
       </div>
      </>
      )
}

export default mens