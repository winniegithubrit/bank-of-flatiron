import React from "react"
function SearchBar({search,searchHandler}){
  
 
  return(
    <div className="search">
<input type="text" placeholder="search..." value={search} onChange={searchHandler}/>
    </div>
  )
}
export default SearchBar