import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function Filter(props) {
  const [title, setTitle] = useState("");


  return (
    <div>
      <h1>Filter</h1>
      <input
        type="text"
        placeholder="Search by Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="search cart-zz m-auto mt-4">
        {props.movie
          .filter((movie) => {
            return title.toLowerCase() === ""
              ? movie
              : movie.title.toLowerCase().includes(title.toLowerCase())})
          .map((movie) => {
            return (
              <div className="card" key={movie.id}>
                <img
                  className="card-img-top  img-m"
                  src={movie.posterURL}
                  alt="Card"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {movie.title} Rating : {movie.rating}
                  </h5>
                  <p className="card-text ">
                    {movie.description.slice(0, 160) + "..."}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default Filter;
