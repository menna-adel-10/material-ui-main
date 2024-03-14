import { useState } from 'react'
import './App.css'
import DrawerAppBar from './components/navbar/NavBar'
import CoverPage from './components/coverPage/CoverPage'
import TextComponent from './components/text/Text'
import ProductCard from './components/cards/cards'

function App() {

  return (
    <>
      <div>
    <DrawerAppBar/>
    <CoverPage/>
    <TextComponent/>
   <ProductCard/>
        
        </div>
    
    </>
  )
}

export default App
