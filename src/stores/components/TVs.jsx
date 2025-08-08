import React from 'react'
import { watchData } from '../data/watchData'
const TVs = () => {
  const firstFiveImages=watchData.slice(0,5)
   return (
    <>
    <div className='protitle'>
      <h2>TV</h2>
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

export default TVs