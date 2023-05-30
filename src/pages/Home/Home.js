import { getTrendingMovie } from "components/servises/api";
import { useEffect, useState } from "react";
import { Container, Title } from "./Home.styled";
import { MovieList } from "components/MovieList/MovieList";

function Home  () {
const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovie().then(({ results }) => 
   { setMovies ( results);});
  }, [])
  return (
    <Container>
<Title>Trending</Title>
<MovieList movies={movies}/>
    </Container>
  )
}

export default Home;