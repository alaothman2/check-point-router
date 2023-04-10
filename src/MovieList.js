import "bootstrap/dist/css/bootstrap.min.css";

function MovieList(props) {
  return (
    <div className="cart">
      {props.movies.map((movie) => {
        return (
        <div className="card" key={movie.id} >
        <img className="card-img-top" src={movie.posterURL} alt="Card" />
        <div className="card-body">
          <h5 className="card-title">{movie.title} Rating : {movie.rating}</h5>
          <p className="card-text">
          {movie.description}
          </p>
          <a href="#" className="btn btn-primary">
            more information </a>
        </div>
      </div>)
      })}
    </div>
  );
}
export default MovieList;
