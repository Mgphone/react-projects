import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
import Luckydraw from './pages/Luckydraw'
// import components
import Navbar from './components/Navbar'
import SearchForm from './components/SearchForm'
import CocktailList from './components/CocktailList'

function App() {
  return (
   <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Home" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/LuckyDraw" element={<Luckydraw />} />
      <Route path="/cocktail/:id" element={<SingleCocktail/>} />
      <Route path="*" element={<Error/>} />
    </Routes>
   </Router>
   
   
 
    
  )
}

export default App
