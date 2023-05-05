import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='section error-page'>
    <div className='error-container'>
    <h2>error page dead end</h2>
    <Link to="/"><btn className="btn btn-primary">Back Home</btn></Link>
    
    </div>
      
    </div>
  )
}

export default Error
