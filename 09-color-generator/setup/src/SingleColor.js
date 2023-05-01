import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb,weight,index,hexColor}) => {
  const[alert,setAlert]=useState(false)
  const bcg=rgb.join(',');
  useEffect(()=>{
    const timeout=setTimeout(() => {
      setAlert(false)
    }, 3000);
    return()=>clearTimeout(timeout)
  },[alert]);
  // const hex=rgbToHex(...rgb)
  
  return (<article className={`color${index > 10 && 'color-light'}`}
  style={{backgroundColor:`rgb(${bcg})`}}
  onClick={()=>{
    setAlert(true)
    navigator.clipboard.writeText("#"+hexColor);
  }}
  >
  <p>{weight}%</p>
  <p>#{hexColor}</p>
  {alert&&<p className='alert'>Copied to Clipboard</p>}
  </article>)
}

export default SingleColor
