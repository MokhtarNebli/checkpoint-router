import "./App.css";
import { useState } from "react";
import MovieList from "./component/MovieList";
import AddMovie from "./component/AddMovie";
import { v4 as uuidv4 } from "uuid";
import Filter from "./component/Filter";
import { Route, Routes } from "react-router-dom";
import Descriptions from "./component/Descriptions";

function App() {
  const [key, setKey] = useState("");
  const [rating, setRating] = useState(1);

  const [movie, setMovie] = useState([
    {
      MovieName: "sex education",
      Description: "----------------------",
      rating: 4,
      image:
        "https://www.revue-etudes.com/meta-social-network/picture?path=%2Farticle%2Fpicture%2F4336.jpg",
      id: 1,
      trailer: "https://youtu.be/Hd2ldTR-WpI",
    },
    {
      MovieName: "manifest",
      Description: "--------------------------",
      rating: 3,
      image:
        "https://m.media-amazon.com/images/M/MV5BZjllMzc1ZTAtMzYyYi00OWU4LTgzNTAtYWJmMWNhZDI3ODVjXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_.jpg",
      id: uuidv4(),
      trailer: "https://youtu.be/I1hNAIzkQWY",
    },
    {
      MovieName: "Un oeil indiscret",
      Description: "----------------------",
      rating: 2,
      image:
        "https://fr.web.img3.acsta.net/pictures/22/12/15/17/08/5418222.jpg",
      id: uuidv4(),
      trailer: "https://youtu.be/XmFE9KZNIsw",
    },
  ]);
  const handeleAdd = (newMovie) => {
    setMovie([...movie, newMovie]);
  };

  const handelKey = (text) => {
    setKey(text);
  };

  const handleRating = (number) => {
    setRating(number);
  };
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filter handelKey={handelKey} handleRating={handleRating} />
              <AddMovie handeleAdd={handeleAdd} />
              <br></br>
              <MovieList
                movie={movie.filter(
                  (el) =>
                    el.MovieName.toLowerCase().includes(
                      key.toLowerCase().trim()
                    ) && el.rating >= rating
                )}
              />
            </>
          }
        />
        <Route path="/trailer/:id" element={<Descriptions movie={movie} />} />
      </Routes>
    </div>
  );
}

export default App;
