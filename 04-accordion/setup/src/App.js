import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [question,setQuestions]=useState(data);
  return (
    <main>
      <div className='container'>
     <h3>questions and answer about login</h3>
     <section className='info'>
      {question.map((question)=>{
        return(
          <SingleQuestion key={question.id} {...question}/>
        );
      })}
     </section>
      </div>
    
    </main>
  );
}

export default App;
