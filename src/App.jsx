import React from 'react'
import "./App.css"
import LandingPage from './stores/pages/LandingPage'
import {Routes,Route} from 'react-router-dom'
import BooksPage from './stores/pages/BooksPage'
import MobilePage from './stores/pages/MobilePage'
import FridgePage from './stores/pages/FridgePage'
import ComputersPage from './stores/pages/ComputersPage'
import ACPage from './stores/pages/ACPage'
import TvPage from './stores/pages/TvPage'
import WatchesPage from './stores/pages/WatchesPage'
import FurniturePage from './stores/pages/FurniturePage'
import WomenPage from './stores/pages/WomenPage'
import MenPage from './stores/pages/MenPage'
import MobileSingle from './singles/MobileSingle'
import SpeakersPage from './stores/pages/SpeakersPage'
import KitchensPage from './stores/pages/KitchensPage'
import UserCart from './stores/UserCart'
const App = () => {
  return (
    <div>
     <Routes>
   <Route path='/' element={<LandingPage/>}/>
   <Route path='/books' element={<BooksPage/>}/>
   <Route path='/mobiles' element={<MobilePage/>}/>
    <Route path='/fridge' element={<FridgePage/>}/> 
    <Route path='/computers' element={<ComputersPage/>}/> 
      <Route path='/AC' element={<ACPage/>}/> 
      <Route path='/tv' element={<TvPage/>}/> 
      <Route path='/watches' element={<WatchesPage/>}/> 
     <Route path='/furniture' element={<FurniturePage/>}/> 
           <Route path='/mensfashion' element={<MenPage/>}/> 
       <Route path='/womenfashion' element={<WomenPage/>}/> 
       <Route path='/kitchen' element={<KitchensPage/>}/>
       <Route path='speaker' element={<SpeakersPage/>}/>
       <Route path='/mobiles/:id' element={<MobileSingle/>}/>
      <Route path='/cart' element={<UserCart/>}/>
         






     </Routes>
      
    </div>
  )
}

export default App