import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { AppContex,useGlobalContex } from './context';
const Home = () => {
  // const data=useContext(AppContex);    //firstway
  // const data=useGlobalContex();    //second way
  // console.log(data);
const{openSidebar,openModal}=useGlobalContex();
  
  return (
    <main>
      <button className='sidebar-toggle'
      onClick={openSidebar}>
        <FaBars />
      </button>
      <button className='btn'
      onClick={openModal}>
show modal
      </button>
    </main>
  );
}

export default Home
