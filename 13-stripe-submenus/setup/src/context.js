import React, { useState, useContext } from 'react'
import sublinks from './data'
const AppContext=React.createContext();
export const AppProvider=({children})=>{

const[isSidebarOpen,setIsSidebarOpen]=useState(false)
const[isSubOpen,setIsSubOpen]=useState(false)
const [location,setLocation]=useState({});
const [page,setPage]=useState({page:'',links:[]})
const openSidebar=()=>{
  setIsSidebarOpen(true);
}
const closeSidebar=()=>{
  setIsSidebarOpen(false);
}
const openSub=(text,coordinate)=>{
  const page=sublinks.find((link)=>link.page===text)
  setPage(page)
  setLocation(coordinate)
  setIsSubOpen(true);
}
const closeSub=()=>{
setIsSubOpen(false);
}
  return(
    <AppContext.Provider value={{
      isSidebarOpen,
      isSubOpen,
      openSub,
      closeSub,
      openSidebar,
      closeSidebar,
      location,
      page
    }}>
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext=()=>{
  return useContext(AppContext);
};

