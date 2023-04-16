import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Outlet} from "react-router-dom";

function MovieList(props) {
  return (
    <>
    <div className="cart-zz m-auto">
      {props.movie.map((movie) => {
        return (
        <div className="card" key={movie.id} >
        <img className="card-img-top  img-m" src={movie.posterURL} alt="Card" />
        <div className="card-body">
          <h5 className="card-title">{movie.title} Rating : {movie.rating}</h5>
          <Link  className="btn btn-primary" to={movie.title}>Trailer</Link>
        </div>
      </div>)
      })}
      
    </div>
    <Outlet/>
    </>
  );
}
export default MovieList;
