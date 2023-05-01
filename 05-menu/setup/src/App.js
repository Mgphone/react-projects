import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
const allCateogries=["all",...new Set(items.map((item)=>item.category))]
console.log(allCateogries);
function App() {
  const [menuItems,setMenuItems]=useState(items);
  const [categories,setCategories]=useState(allCateogries);
  function filterItems(category){
    if(category==="all"){
      setMenuItems(items);
      return;
    }
    const newItems=items.filter((item)=>item.category===category);
    setMenuItems(newItems);
  }
  return (
   <main>
    <section className='menu'>
    <div className='title'>
      <div className='title'>
        <h2>Our Menu</h2>
        <div className='underline'></div>
      </div>
    </div>
    <Categories categories={categories} filterItems={filterItems}/>
    <Menu items={menuItems} />
 
    

    </section>
   </main>
  )
}

export default App;
