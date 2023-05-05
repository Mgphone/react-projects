import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({id,name,glass,info,Image}) => {
  return <article className='cocktail' key={id}>
  <img className='img-container' src={Image} alt={name} />
  <div className='cocktail-footer'>
    <h3>{name}</h3>
    <h4>{glass}</h4>
    <p>{info}</p>
   
    <Link to={`/cocktail/${id}`} className='btn btn-primary btn-details'>Details</Link>
  </div>
      </article>
}

export default Cocktail
