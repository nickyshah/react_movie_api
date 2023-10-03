
import { useState } from 'react';
import './App.css';
import { Display } from './Components/Display';
import { SearchForm } from './Components/SearchForm';

function App() {

  const [movieList, setMovieList] = useState([])


  const addToMovieList = (movie) => {
    const noRepeat = movieList.filter((item)=> item.imdbID !== movie.imdbID)
    // alert(movie)
    // console.log(movie)
    setMovieList([...noRepeat, movie])
    // setMovieList(
    //   [...movieList, movie]
    // )
    
  }

  const handleOnDelete = (imdbID) => {
    if (window.confirm("Are You Sure Want To Delete? ")){

      // filter 
      const deleteButton = movieList.filter((item) => item.imdbID !== imdbID)
      setMovieList(deleteButton)

    }

  }
  


 
  return (
    <div className="wrapper bg-dark text-warning min-vh-100 ">
      <div className="container">
                        {/* title */}
        <div className="row">
          <div className="col">
            <h1 className='mt-5 text-center'>My Movie Collection </h1>
          </div>
        </div>
        <hr />
        
        


        {/* Search area */}
          <SearchForm addToMovieList={addToMovieList} handleOnDelete={handleOnDelete} />
            {/* form */}


            {/* card */}
        
        {/* movie list */}

          {/* buttons */}

          {/* cards */}

      <Display movieList={movieList} handleOnDelete={handleOnDelete} />
      </div> 
    </div>
  )


};

export default App;
