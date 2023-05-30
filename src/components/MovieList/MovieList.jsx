import { Link, useLocation } from "react-router-dom";
import { MoviesList, MovieItem, Title, Img, Container } from "./MovieList.styled";

export const MovieList = ({ movies }) => {
const location = useLocation();

if(!movies){
  return null;
} else {
  return (
    <MoviesList>
      {movies.map(movie => {
        const image = movie.backdrop_path ?  `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`:
        'https://img1.wsimg.com/isteam/ip/bc473ead-66a2-452b-8269-b247bfe9772e/oopps.jpg/:/rs=w:1280';
        
        return <MovieItem key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location}}>
           <Container>
           <Title>{movie.title}</Title>
            <Img src={image} alt={movie.title}/>
           </Container>
          </Link>

        </MovieItem>
      })}
    </MoviesList>
  )
}

};