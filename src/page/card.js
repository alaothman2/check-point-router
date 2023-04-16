import React from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function Card(props) {
  let { title } = useParams();
  
  return (
    <div>
      
      <h2>{title}</h2>
      {console.log(title)}
      {props.movie
        .filter((movie) => {
          return title.toLowerCase() === ""
            ? movie
            : movie.title.includes(title);
        })
        .map((movies) => {
          return (
            <div key={movies.id}>
              <p className="card-text ">{movies.description}</p>
              <div class="ratio ratio-16x9">
  <iframe src={movies.trailer} title="YouTube video" allowfullscreen></iframe>
</div>
                
              
              
            </div>
          );
        })}
    </div>
  );
}

export default Card;
