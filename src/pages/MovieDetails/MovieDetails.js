import { useEffect, lazy, useState } from "react";
import { Link, Route, Routes, useParams, useLocation, Outlet} from "react-router-dom"
import { getMovieId } from "components/servises/api";
import { GeneralContainer, MovieContainer, MovieDescription, MovieDetailsContainer, MovieImage, Overview,MovieAddContainer } from "./MovieDetails.styled.jsx";
import styled from "styled-components";

const Cast = lazy(() => import('../../components/Cast/Cast.jsx'));
const Reviews = lazy(() => import('../../components/Reviews/Reviews.jsx'));

const MovieCastLink = styled(Link)`

`;

const MovieReviewsLink = styled(Link)`

`;
function MovieDetails() {
 const { idMovie } = useParams();
 const location = useLocation();
 const [ movie, setMovie ] = useState(null);

 useEffect(() => {getMovieId(idMovie).then((data) => { setMovie(data)})}, [idMovie])

 if(!movie) {return}

 const genres = movie.genres.map(genre => genre.name).join(', ');

 return (
   <GeneralContainer>
       <MovieDetailsContainer>
         <MovieContainer>
           <MovieImage src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt={movie.title}/>
            <MovieDescription>
             <div>
               <p><strong>Title: </strong>{movie.title}</p>
               <Link to={location.state?.from ?? '/movies'}>
               <button>Back</button>
             </Link>
             </div>
             <Overview>
             <strong>Overview: </strong>
             {movie.overview}
           </Overview>
           {genres && <p><strong>Genres: </strong>{genres}</p>}
         </MovieDescription>
       </MovieContainer>

       <MovieAddContainer>
         <MovieCastLink to="cast" state={{ from: location.state?.from }}>
           <button>Cast</button>
         </MovieCastLink>

         <MovieReviewsLink to="reviews" state={{ from: location.state?.from }}>
           <button>Reviews</button>
         </MovieReviewsLink>
       </MovieAddContainer>
     </MovieDetailsContainer>

     <Routes>
       <Route path="cast" element={<Cast />} />
       <Route path="reviews" element={<Reviews />} />
     </Routes>
     <Outlet />
   </GeneralContainer>
 );
};

export default MovieDetails;