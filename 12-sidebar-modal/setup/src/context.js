import React, { useState, useContext } from 'react'
import { FaSortAlphaUp } from 'react-icons/fa';


const AppContex=React.createContext();



const AppProvider=({children})=>{
  const[isSidebarOpen,setIsSidebarOpen]=useState(false)
  const[isModalOpen,setIsModalOpen]=useState(false);

  const openSidebar=()=>{
    setIsSidebarOpen(true)
  }
const closeSidebar=()=>{
  setIsSidebarOpen(false)
}

const openModal=()=>{
  setIsModalOpen(true);
}

const closeModal=()=>{
  setIsModalOpen(false)
}



//(first way)
return <AppContex.Provider value={{
  isSidebarOpen,
  isModalOpen,
  openSidebar,
  closeSidebar,
  openModal,
  closeModal
}}>
      {children}
    </AppContex.Provider>

  
}
//custom hook(second way)
export const useGlobalContex=()=>{
  return useContext(AppContex)
};


export {AppProvider,AppContex}