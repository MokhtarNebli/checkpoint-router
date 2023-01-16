import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movie, handleDlete }) => {
  return (
    <div className="movie">
      {movie.map((per, i) => (
        <MovieCard per={per} key={i} handleDlete={handleDlete}></MovieCard>
      ))}
    </div>
  );
};
export default MovieList;
