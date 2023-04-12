import React, { useState } from "react";
import MovieList from "./MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
function MovieCard(props) {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const [desc, setDesc] = useState("");
  const [img, setimg] = useState("");
  return (
    <div>
      <h1>Movies </h1>
      <div className="input-group">
        <span className="input-group-text"> Title and Rating</span>
        <input
          type="text"
          aria-label="Title"
          className="form-control"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          aria-label="Rating"
          className="form-control"
          onChange={(e) => setRating(e.target.value)}
        />
        <span className="input-group-text"> Description</span>
        <input
          type="text"
          aria-label="description"
          className="form-control"
          onChange={(e) => setDesc(e.target.value)}
        />
         <span className="input-group-text"> Image</span>
        <input
          type="text"
          aria-label="description"
          className="form-control"
          onChange={(e) => setimg(e.target.value)}
        />
        <button
          className="btn btn-outline-secondary"
          onClick={() => {
            props.setMovie([
              ...props.movie,
              {
                id: props.movie.length + 1,
                title: title,
                description: desc,
                posterURL: img,
                rating: rating,
              },
            ]);
          }}
        >
          add movie
        </button>
        <MovieList movie={props.movie} />
      </div>
    </div>
    // you can add url of an img if you want test the posterURL 
  );
}

export default MovieCard;
