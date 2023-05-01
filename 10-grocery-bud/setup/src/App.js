import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'
const getLocalStorage=()=>{
let list=localStorage.getItem('list')
if(list){
  //parse string to object
return(list=JSON.parse(localStorage.getItem('list')));
}
else{
  return[];
}
}
function App() {
  const [name,setName]=useState("");
  const[list,setList]=useState(getLocalStorage());
  const[isEditing,setIsEditing]=useState(false);
  const[editId,setEditID]=useState(null);
  const[alert,setAlert]=useState({
    show:false,
    msg:'',
    type:''});

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!name){
      //display alert
      showAlert(true,'Please enter Valid Name','danger')
    }
    else if(name&&isEditing){
      //deal with edit
      setList(
        list.map((item)=>{
         if(item.id===editId) {
          return{...item,title:name}
         }
         return item;
        })
      );
      setName('')
      setIsEditing(false)
      setEditID(null)
      showAlert(true,'value changed','success')
    }
    else{
      //show alert
      showAlert(true,'item added to the list','success')
      const newItem={id: new Date().getTime().toString(),title:name}
      setList([...list,newItem])
      setName('')
    }
  }

  const showAlert=(show=false,msg='',type='')=>{
    setAlert({show,msg,type})
  }
  const clearItem=()=>{
    showAlert(true,'Empty List','danger')
    setList([]);
  }
  const deleteItem=(id)=>{
    showAlert(true,'item removed','danger')
    setList(list.filter((item)=>item.id!==id))
  }
  const editItem=(id)=>{
  const specificItem=list.find((item)=>item.id===id);
  setIsEditing(true);
  setEditID(id);
  setName(specificItem.title)
  }
  useEffect(()=>{
    // object to string
    localStorage.setItem('list',JSON.stringify(list))
  },[list])
  return(
   
    <section className='section-center'>
    <form className='grocery-form' onSubmit={handleSubmit}>
    {alert.show&&<Alert {...alert} removeAlert={showAlert} list={list}/>}
      <h3>Grocery Bud</h3>
      <div className='form-control'>
        <input 
          type='text'
          className='grocery'
          placeholder='e.g.eggs'
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
        <button type="submit" className='submit-btn'>{isEditing?"Edit":"Submit"}</button>
      </div>
    </form>
    <div className='grocery-container'>
      <List items={list} deleteItem={deleteItem} editItem={editItem}/>
      <button className='clear-btn' onClick={()=>clearItem()}>CLear Items</button>
    </div>
    </section>
    )
   
}

export default App
