import React,{useEffect, useState} from "react";
import {Link} from "react-router-dom"
import Loading from '../components/Loading'

const url='https://www.thecocktaildb.com/api/json/v1/1/random.php'

const LuckyDraw=()=>{
  const [loading,setLoading]=useState(false)
  const [cocktail,setCocktail]=useState(null)
  const getCocktail=async()=>{
    try {
      const response=await fetch(url)
      const data=await response.json()
      if(data.drinks){
        const{
          strDrink:name,
          strDrinkThumb:image,
          strGlass:glass,
          strAlcoholic:info,
          strCategory:category,
          strInstructions:instruction,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        }=data.drinks[0]
        const ingredients=[strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,]
        const newCocktail={name,image,glass,info,category,instruction,ingredients}
        setCocktail(newCocktail)
      }
      else{
        setCocktail(null)
      }
      
    } catch (error) {
      console.log(error);
    }
    setLoading(false)
  }
  useEffect(()=>{
   
    getCocktail()

  },[])

  if(loading){
    return <Loading />
  }
  if(!cocktail){
    return(
      <section className="section cocktail-section">
        <h1>No Cocktail try another time</h1>
      </section>
    )
  }
  else{
    const {name,image,glass,info,category,instruction,ingredients}=cocktail
    return(
      <section className="section cocktail-section">
      <Link to="/" className='btn btn-primary '>Back Home</Link>
        <h1 className="section-title">Random Cocktail Is {name}</h1>
        <div className="drink">
        <img src={image} alt={name}/>
        <div className="drink-info">
        <p>
        <span className='drink-data'>name:</span>{name}
      </p>
      <p>
        <span className='drink-data'>category:</span>{category}
      </p>
      <p>
        <span className='drink-data'>info:</span>{info}
      </p>
      <p>
        <span className='drink-data'>glass:</span>{glass}
      </p>
      <p>
        <span className="drink-data">ingredients</span>
        {ingredients.map((item,index)=>{
          return item? <span key={index}>{item}</span>:null
        })}
      </p>
      <p>
        <span className='drink-data'>instruction:</span>{instruction}
      </p>
  
        </div>
        </div>
      </section>
    )
  }
  
}

export default LuckyDraw