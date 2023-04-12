import "bootstrap/dist/css/bootstrap.min.css";

function MovieList(props) {
  return (
    <div className="cart-zz m-auto">
      {props.movie.map((movie) => {
        return (
        <div className="card" key={movie.id} >
        <img className="card-img-top  img-m" src={movie.posterURL} alt="Card" />
        <div className="card-body">
          <h5 className="card-title">{movie.title} Rating : {movie.rating}</h5>
          <p className="card-text ">
          {movie.description.slice(0,160)+'...'}
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
