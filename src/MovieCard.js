import React, { useState } from "react";
import MovieList from "./MovieList";
function MovieCard(props) {
    const [title,setTitle]= useState("")
    const [rating,setRating]=useState(0)
    const [desc,setDesc]=useState("")
  return (
    <div>
      <h1>Movies </h1>
      
      <div className="input-group">
        <span className="input-group-text"> Title and Rating</span>
        <input type="text" aria-label="Title" className="form-control" onChange={(e) =>setTitle(e.target.value)} />
        <input type="number" aria-label="Rating" className="form-control"  onChange={(e) =>setRating(e.target.value)}/>
        <span className="input-group-text"> Description</span>
        <input type="text" aria-label="description" className="form-control" onChange={(e) =>setDesc(e.target.value)} />
        <button className="btn btn-outline-secondary" onClick={()=> {props.movies.push({id:(props.movies.length+1),title : title, description : desc ,posterURL:"no img" ,rating :rating  } && console.log({id:(props.movies.length+1),title : title  ,description : desc,posterURL:"" ,rating :rating  }))}}>add movie</button>
    <MovieList movies={props.movies} />

      </div>
    </div>
  );
}

export default MovieCard;
