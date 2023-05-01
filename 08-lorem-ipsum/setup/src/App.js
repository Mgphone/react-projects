import React, { useState } from 'react';
import data from './data';
function App() {
  const [number,setNumber]=useState("");
  const[value,setValue]=useState([])
function handleSubmit(e){

  e.preventDefault(true)
  let intNumber=parseInt(number)
  // console.log(typeof intNumber)
  if(intNumber<=0){
    intNumber=1
  }
  if(intNumber>8){
    intNumber=8
  }
  setValue(data.slice(0,intNumber))
  


 
}
  
  return (
  <section className='section-center' onSubmit={handleSubmit}>
   <h4>Tired of Boring Lorem Ipsum</h4>
   <form className='lorem-form'>
    <label>Paragraphs</label>
    <input type="number" 
    // name="amount" 
    // min="1" max="8" 
    value={number}
    onChange={(e)=>setNumber(e.target.value)}
    />
    <button className='btn'>Generate</button>
   </form>
   <article className='lorem-text'>
   {value.map((item,index)=>{
    return <p key={index}>{item}</p>
   })}
    
   </article>
  </section>
    )
}

export default App;
