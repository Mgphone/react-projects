import React from 'react';

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
     {/* <button className='filter-btn' onClick={()=>filterItems("all")}>All</button>
     <button className='filter-btn' onClick={()=>filterItems("breakfast")}>breakfast</button> */}
  {categories.map((category,index)=>{
    return(
      <button
      type="button"
      className='filter-btn'
      key={index}
    onClick={()=>filterItems(category)}>
        {category}
      </button>
    );
  })}
  
    </div>
  );
};

export default Categories;