import React, {useState} from "react";
import { CustomCard } from "./CustomCard"

export const Display = ({movieList, handleOnDelete}) => {

  const [selectedCategory, setSelectedCategory] = useState('all');
  

  const handleCategoryChange = (category) => {
    console.log(category)
    setSelectedCategory(category);
    
  };

  const filteredMovies = movieList.filter(item => (
    selectedCategory === 'all' || item.mode === selectedCategory
  ));

  

  

  const func = (mode) => {
    if (mode !== "delete"){
        movieList({...movieList, mode})
        // setSelectedCategory([])
    }} 

    
    

  return (
    <div className="bg-dark p-4 rounded shadow-lg mt-5">
      <div className="row">
        <div className="col">
          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-primary" onClick={() => handleCategoryChange('all')} >
              All
            </button>
            <button type="button" class="btn btn-warning" onClick={() => handleCategoryChange('happy')} >
              Happy
            </button>
            <button type="button" class="btn btn-info"  onClick={() => handleCategoryChange('action')}>
              Action
            </button>
            
          </div>
          <div className="mt-3">{filteredMovies.length} Movie(s) found</div> <hr />
        </div>
      </div>
      <div className="row p-2">
        <div className="col d-flex flex-wrap gap-3 justify-content-around">
            {filteredMovies.map((item, i) =>(<CustomCard key={i} movie={item} handleOnDelete = {handleOnDelete} func={func}/>))}
            
        </div>
      </div>
    </div>
  );
};
