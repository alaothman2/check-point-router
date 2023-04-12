import "./app.css";
import MovieCard from "./MovieCard";
import { useState } from "react";
import Filter from "./Filter";
function App() {
  const movies = [
    {
      id: 1,
      title: "John Wick",
      description:
        "John Wick is a movie about a retired hitman who seeks vengeance against those who wronged him. After his beloved dog is killed by a gangster's son, Wick goes on a killing spree to seek justice.",
      posterURL: require("./img/john.jpg"),
      rating: 9.3,
    },
    {
      id: 2,
      title: "The Godfather",
      description:
        "The Godfather is an iconic American film that tells the story of the Corleone family, a powerful Italian-American Mafia clan based in New York City. ",
      posterURL: require("./img/father.jpg"),
      rating: 9.2,
    },
    {
      id: 3,
      title: "Fast And Furious",
      description:
        "Fast and Furious is a high-octane action film franchise that follows a group of street racers turned international criminals and their attempts to evade the law while pulling off daring heists and missions.",
      posterURL: require("./img/fast.jpg"),
      rating: 9.0,
    },
  ];
  const [movie,setMovie]= useState(movies)
  return (
    <div className="App">
      <MovieCard movie={movie}  setMovie={setMovie} />
      <Filter movie={movie}  />
    </div>
  );
}

export default App;
