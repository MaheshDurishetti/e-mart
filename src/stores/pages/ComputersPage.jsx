import React from 'react'
import { computersData } from '../data/computers'
import NavBar from '../components/NavBar'
const ComputersPage = () => {
  return (
   <>
   <NavBar/>
   <div className='pageSection'>
{computersData.map((item)=>{
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

export default ComputersPage