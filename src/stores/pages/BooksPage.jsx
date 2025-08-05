import React from 'react'

import { booksData } from '../data/books'
import NavBar from '../components/NavBar'
const BooksPage = () => {
  return (
   <>
   <NavBar/>
   <div className='pageSection'>
{booksData.map((item)=>{
    return (
        <div>
        <div className='pageImg'>
    <img src={item.image} alt=''/>
        </div>
        <div className='proModel'>
            {item.title}, {item.author}
        </div>
        </div>
      
    )
})}
   </div>
   </>
  )
}

export default BooksPage