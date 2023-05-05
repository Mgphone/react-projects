import React from 'react'
// import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const {cocktails}=useGlobalContext();

 const{drinks}=cocktails;
 console.log(drinks);
  return (
    <div className='section'>
     <h2 className='section-title'>Cocktails</h2>
     <div className='cocktails-center'>
    
     
    {drinks.map((item)=>{
      
     return(
      <div className='cocktail' key={item.idDrink}>

      <img className="img-container" src={item.strDrinkThumb} alt={item.strDrink} />
      </div>
      )

    })}
    
    </div>
    </div>
    
    
  )
}

export default CocktailList
