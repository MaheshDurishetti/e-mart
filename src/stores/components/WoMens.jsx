import React from 'react'
import { womensData } from '../data/women'
const woMens = () => {
  const firstFiveImages=womensData.slice(0,5)
     return (
      <>
      <div className='protitle'>
        <h2>Women Fashions</h2>
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

export default woMens