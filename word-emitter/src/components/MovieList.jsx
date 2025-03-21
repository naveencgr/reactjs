import React, {useState}  from "react";

function MovieList() {
  const [movies, setMovies] = useState([])

  const searchMovie = () => {
    
    fetch("https://jsonmock.hackerrank.com/api/movies?Year=2015")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setMovies(data.data)
    })

   /* const url = `https://jsonmock.hackerrank.com/api/movies?Year=2015`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data)
      setMovies(data.data); // needs check
    } catch (err) {
      console.log(err);
    }*/
  }


  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <input type="number" className="large" placeholder="Enter Year eg 2015" data-testid="app-input"/>
        <button className="" data-testid="submit-button" onClick={searchMovie}>Search</button>
      </section>

      <div>
      {
          movies.map((movie)=> (
            <h6>{movie.Title}</h6>
          ))
        }
      </div>
      <ul className="mt-50 styled" data-testid="movieList">
        
        {
           movies.map((movie)=> <li className="slide-up-fade-in py-10"  key={movie.imdbID}>{movie.Title}</li>)
        }
      </ul>

      <div className="mt-50 slide-up-fade-in" data-testid="no-result"></div>
    </div>
  );
}

export  {MovieList};