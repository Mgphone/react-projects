import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const[index,setIndex]=useState(0);
  const{id,name,title,quote,image}=data[index];
  const checkNumber=(number)=>{
    if(number>data.length-1){
      return 0;
    }
    if(number<0){
      return data.length-1
    }
    return number;
  }
  const nextPerson=()=>{
    setIndex((index)=>{
      let newIndex=index+1
      return checkNumber(newIndex);
    })
  }
  const prevPerson=()=>{
    setIndex((index)=>{
      let newIndex=index-1
      return checkNumber(newIndex)
    })
  }
  useEffect(()=>{
    let slider=setInterval(()=>{
      setIndex((oldIndex)=>{
        let index=oldIndex+1
        if(index>data.length-1){
          index=0
        }
        return index
      })
    },3000)
    return ()=>{
      clearInterval(slider)
    }
  },[index])
  return (
    <section className='section'>
    <div className='title'>
      <h2>
        <span>/</span>Reviews
      </h2>
    </div>
    <div className='section-center'>
    <article>
      <img className='person-img' src={image} alt={name}/>
      <h4>{name}</h4>
      <p className='title'>{title}</p>
      <p className='text'>{quote}</p>
      <FaQuoteRight className='icon' />
    </article>
    <button className='prev' onClick={prevPerson}><FiChevronLeft /></button>
    <button className='next'onClick={nextPerson}><FiChevronRight /></button>
    </div>

   
    </section>
  );
}

export default App;
