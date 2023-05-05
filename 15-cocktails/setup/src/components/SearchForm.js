import React,{useRef} from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerm}=useGlobalContext();
  const searchValue=useRef('');
  const searchCocktail=()=>{
    setSearchTerm(searchValue.current.value)
  }

  React.useEffect(()=>{
    searchValue.current.focus()
  },[])
  return (
    <main>
    <div className='section search'>
      <form className='search-form'>
      <div className='form-control'>
        <label>Search your favourite Cocktail</label>
        <input
         type="text" 
         name="name"
        id="name"
        ref={searchValue}
        onChange={searchCocktail}
        />
      </div>
      </form>
    </div>
    </main>
  )
}

export default SearchForm
