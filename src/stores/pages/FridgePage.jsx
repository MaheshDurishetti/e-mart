import React from 'react'
import { fridgeData } from '../data/fridge'
import NavBar from '../components/NavBar'
const FridgePage = () => {
  return (
     <>
       <NavBar/>
       <div className='pageSection'>
    {fridgeData.map((item)=>{
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
       </>  )
}

export default FridgePage