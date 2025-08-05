import React from 'react'
import NavBar from '../components/NavBar'
import { acData } from '../data/ac'
const ACPage = () => {
  return (
     <>
   <NavBar/>
   <div className='pageSection'>
{acData.map((item)=>{
    return (
        <div>
        <div className='pageImg'>
    <img src={item.image} alt=''/>
        </div>
        <div className='proModel'>
            {item.title}
        </div>
        </div>
      
    )
})}
   </div>
   </>
  )
}

export default ACPage