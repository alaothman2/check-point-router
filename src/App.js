import "./app.css";
import MovieCard from "./MovieCard";
import Card from "./page/card";
import { useState } from "react";
import Filter from "./Filter";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import MovieList from "./MovieList";

function App() {
  const movies = [
    {
      id: 1,
      title: "John Wick",
      description:
        "John Wick is a movie about a retired hitman who seeks vengeance against those who wronged him. After his beloved dog is killed by a gangster's son, Wick goes on a killing spree to seek justice.",
      posterURL: require("./img/john.jpg"),
      rating: 9.3,
      trailer: "https://www.youtube.com/watch?v=yjRHZEUamCc",
    },
    {
      id: 2,
      title: "The Godfather",
      description:
        "The Godfather is an iconic American film that tells the story of the Corleone family, a powerful Italian-American Mafia clan based in New York City. ",
      posterURL: require("./img/father.jpg"),
      rating: 9.2,
      trailer: "https://www.youtube.com/watch?v=UaVTIH8mujA",
    },
    {
      id: 3,
      title: "Fast And Furious",
      description:
        "Fast and Furious is a high-octane action film franchise that follows a group of street racers turned international criminals and their attempts to evade the law while pulling off daring heists and missions.",
      posterURL: require("./img/fast.jpg"),
      rating: 9.0,
      trailer: "https://www.youtube.com/watch?v=32RAq6JzY-w",
    },
  ];
  const [movie, setMovie] = useState(movies);
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<MovieList movie={movie} />} />
          <Route path=":title" element={<Card movie={movie} />} />

          <Route path="filter" element={<Filter movie={movie} />} />
          <Route
            path="addmovie"
            element={<MovieCard movie={movie} setMovie={setMovie} />}
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
